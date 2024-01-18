import {Form, Input, Modal} from "antd";
import React from "react";

export const LoginModal = ({title, open, onOk, onCancel, loginFormData, onChange, onChange1}) => {
    return <Modal
        title={title}
        open={open}
        onOk={onOk}
        onCancel={onCancel}
    >
        <Form>
            <Form.Item label="Email">
                <Input
                    type="email"
                    value={loginFormData.email}
                    onChange={onChange
                    }
                />
            </Form.Item>
            <Form.Item label="Password">
                <Input.Password
                    value={loginFormData.password}
                    onChange={onChange1
                    }
                />
            </Form.Item>
        </Form>
    </Modal>;
}