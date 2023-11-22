import React, {useState} from 'react';
import "./NavBar.css";
import {Breadcrumb, Button, Flex, Layout, Menu, Modal, theme} from 'antd';

const menuItems = [
    {
        label: "My projects",
        key: "projects"
    },
    {
        label: "Teams",
        key: "teams"
    },
    {
        label: "Bugs",
        key: "bugs"
    }
]

const NavBar = () => {
    const {Header, Content, Footer} = Layout;

    const [isLoginModalOn, setIsLoginModalOn] = useState(false);
    const [modalTitle, setTitle] = useState("Enter your e-mail & password: ");
    const [open, setOpen] = useState(false);
    const [buttonText, setButtonText] = useState("Log in");
    const [current, setCurrent] = useState("projects");

    const handleOk = () => {
        setOpen(false);
    };

    const handleCancel = () => {
        setOpen(false);
    }

    const loginHandler = () => {
        setIsLoginModalOn(true);
        setOpen(true);
    }

    const menuItemOnClick = (e) => {
        setCurrent(e.key);
    }

    return (
        <Header
            className={"navbar"}
        >
            <div >
                <Flex wrap="wrap" gap="small" className={"navbar-div"}>
                    <Menu
                        className={"navbar"}
                        mode="horizontal"
                        items={menuItems}
                        selectedKeys={current}
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
        </Header>
    );
}

export default NavBar;