import React, { useState } from "react";
import "./NavBar.css";
import {Button, Flex, Layout, Menu, Modal, Form, Input, Image} from "antd";
import { userStore } from "../../../stores/UserStore";
import { set } from "mobx";
import LandingPage from "../Content/LandingPage";
import {LoginModal} from "./Login/LoginModal";

const menuItems = [
    {
        label: "My projects",
        key: "projects",
    },
    {
        label: "Teams",
        key: "teams",
    },
    {
        label: "Bugs",
        key: "bugs",
    },
].map((item) => ({
    ...item,
    className: "navbar-element",
}));

const NavBar = ({ onTabChanged }) => {
    const { Header, Content, Footer } = Layout;

    const [isLoginModalOn, setIsLoginModalOn] = useState(false);
    const [loginFormData, setLoginFormData] = useState({
        email: "",
        password: "",
    });
    const [userId, setUserId] = useState(-1); //-1 <=> invalid (not logged in)
    const [modalTitle, setTitle] = useState("Enter your e-mail & password: ");
    const [open, setOpen] = useState(false);
    const [buttonText, setButtonText] = useState("Log in");
    const [current, setCurrent] = useState("projects");

    const handleOk = () => {
        userStore.userList.forEach((user) => {
            if (
                user.email === loginFormData.email &&
                user.password === loginFormData.password
            ) {
                setUserId(user.id);
                setButtonText("Log out");
                setOpen(false);
                setIsLoginModalOn(false);
            }
        });
        setTitle("Invalid e-mail or password, please try again: ");
    };

    const handleCancel = () => {
        setOpen(false);
        setIsLoginModalOn(false);
        setTitle("Enter your e-mail & password: ");
    };

    const loginHandler = () => {
        if (userId === -1) {
            setTitle("Enter your e-mail & password: ");
            setIsLoginModalOn(true);
            //setButtonText("Log out")
            setOpen(true);
        } else {
            setUserId(-1);
            setIsLoginModalOn(false);
            setButtonText("Log in");
            setOpen(false);
        }
    };

    const menuItemOnClick = (e) => {
        if (userId !== -1) {
            setCurrent(e.key);
            onTabChanged(e.key);
        }
    };

    return (
        <Header className={"navbar"}>
            <div>
                <Flex wrap="wrap" gap="small" className={"navbar-div"}>
                    <Image
                        width={40}
                        alt={"bug_crack_logo"}
                        src="/photo/bug_crack_logo.png"
                        onClick={() => {
                        }}
                    />
                    <Menu
                        className={"navbar-element"}
                        mode="horizontal"
                        items={menuItems}
                        selectedKeys={[current]}
                        onClick={menuItemOnClick}
                    />
                    <Button
                        key={0}
                        type="text"
                        size={"large"}
                        onClick={loginHandler}
                        className={"navbar-button"}
                        shape={"round"}
                    >
                        {buttonText}
                    </Button>
                </Flex>
            </div>
            <div style={{visibility: userId === -1 ? "visible" : "hidden"}}>
                <LandingPage/>
            </div>
            <LoginModal title={modalTitle} open={open} onOk={handleOk} onCancel={handleCancel}
                        loginFormData={loginFormData} onChange={(e) =>
                setLoginFormData({
                    ...loginFormData,
                    email: e.target.value,
                })} onChange1={(e) =>
                setLoginFormData({
                    ...loginFormData,
                    password: e.target.value,
                })}/>
        </Header>
    );
};

export default NavBar;
