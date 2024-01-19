import { Form, Input, Modal } from "antd";
import React from "react";

export const LoginModal = ({
    title,
    open,
    onOk,
    onCancel,
    loginFormData,
    onChange,
    onChangePassword,
}) => {
    return (
        <Modal title={title} open={open} onOk={onOk} onCancel={onCancel}>
            <Form labelCol={{ span: 6 }} wrapperCol={{ span: 18 }}>
                <Form.Item label="Email">
                    <Input
                        type="email"
                        value={loginFormData.email}
                        onChange={onChange}
                    />
                </Form.Item>
                <Form.Item label="Password">
                    <Input.Password
                        value={loginFormData.password}
                        onChange={onChangePassword}
                    />
                </Form.Item>
            </Form>
        </Modal>
    );
};
