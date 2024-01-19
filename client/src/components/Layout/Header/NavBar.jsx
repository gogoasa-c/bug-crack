import axios from "axios";
import { observer } from "mobx-react";
import React, { useState } from "react";
import "./NavBar.css";
import {
    Button,
    Flex,
    Layout,
    Menu,
    Modal,
    Form,
    Input,
    Image,
    message,
} from "antd";
import { bugStore } from "../../../stores/BugStore";
import { userStore } from "../../../stores/UserStore";
import LandingPage from "../Content/LandingPage";
import { LoginModal } from "./Login/LoginModal";
import Constant from "../../../Constant";

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

const NavBar = observer(({ onTabChanged }) => {
    const [messageApi, contextHolder] = message.useMessage();

    const error = () => {
        messageApi.open({
            duration: 1,
            type: "error",
            content: "Invalid credentials!",
        });
    };

    const success = () => {
        messageApi.open({
            duration: 3,
            type: "success",
            content: "Welcome to BugCrack!",
        });
    };

    const { Header, Content, Footer } = Layout;

    const [isLoginModalOn, setIsLoginModalOn] = useState(false);
    const [loginFormData, setLoginFormData] = useState({
        email: "",
        password: "",
    });
    const [modalTitle, setTitle] = useState("Enter your e-mail & password: ");
    const [open, setOpen] = useState(false);
    const [buttonText, setButtonText] = useState("Log in");
    const [current, setCurrent] = useState("projects");

    const handleOk = async () => {
        try {
            const response = await axios.post(
                Constant.LOCALHOST + "/user/login",
                {
                    email: loginFormData.email,
                    password: loginFormData.password,
                }
            );

            const userId = response.data["id"];

            userStore.setUserId(response.data["id"]);
            setButtonText("Log out");
            setOpen(false);
            setIsLoginModalOn(false);
            await bugStore.getBugs(userId);
            success();
        } catch (e) {
            setTitle("Invalid e-mail or password, please try again: ");
            error();
        }
    };

    const handleCancel = () => {
        setOpen(false);
        setIsLoginModalOn(false);
        setTitle("Enter your e-mail & password: ");
        setLoginFormData({ email: "", password: "" });
    };

    const loginHandler = () => {
        if (userStore.userId === -1) {
            setTitle("Enter your e-mail & password: ");
            setIsLoginModalOn(true);
            setOpen(true);
        } else {
            userStore.setUserId(-1);
            setIsLoginModalOn(false);
            setButtonText("Log in");
            setOpen(false);
        }
    };

    const menuItemOnClick = (e) => {
        if (userStore.userId !== -1) {
            setCurrent(e.key);
            onTabChanged(e.key);
        }
    };

    return (
        <>
            {contextHolder}
            <Header className={"navbar"}>
                <div>
                    <Flex wrap="wrap" gap="small" className={"navbar-div"}>
                        <Image
                            className={"navbar-logo"}
                            width={40}
                            alt={"bug_crack_logo"}
                            src="/photo/bug_crack_logo.png"
                            onClick={() => {}}
                        />
                        <Menu
                            className={"navbar-element"}
                            mode="horizontal"
                            items={userStore.userId === -1 ? [] : menuItems}
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
                {
                    <div
                        style={{
                            visibility:
                                userStore.userId === -1 ? "visible" : "hidden",
                        }}
                    >
                        <LandingPage />
                    </div>
                }
                <LoginModal
                    title={modalTitle}
                    open={open}
                    onOk={handleOk}
                    onCancel={handleCancel}
                    loginFormData={loginFormData}
                    onChange={(e) =>
                        setLoginFormData({
                            ...loginFormData,
                            email: e.target.value,
                        })
                    }
                    onChangePassword={(e) =>
                        setLoginFormData({
                            ...loginFormData,
                            password: e.target.value,
                        })
                    }
                />
            </Header>
        </>
    );
});

export default NavBar;
