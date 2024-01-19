import { Button, Form, Input, Select, Space } from "antd";
import axios from "axios";
import Constant from "../../../Constant";
import { bugStore } from "../../../stores/BugStore";
import { observer } from "mobx-react";
import {userStore} from "../../../stores/UserStore";

const BugForm = observer(({ bug }) => {
    const operation = bug ? "Edit" : "Add";

    const [form] = Form.useForm();

    const handleFormFinish = async () => {
        form.resetFields();
        bugStore.toggleModalShown();

        const newBug = {
            description: form.getFieldValue("Description"),
            severity: form.getFieldValue("Severity"),
            status: form.getFieldValue("Status"),
            commitLink: form.getFieldValue("CommitLink"),
        };

        if (operation === "Edit") {
            axios.put(Constant.LOCALHOST + `/bug/${bugStore.selectedBugForEdit.id}`, newBug)
                .then((response) => {
                    bugStore.resetFilteredBugs();
                    bugStore.getBugs(userStore.userId);
                });

            // update bug
        } else {
            // add bug
        }
    };

    const handleCancel = () => {
        form.resetFields();
        bugStore.toggleModalShown();
    };

    return (
        <Form
            form={form}
            name={"bugForm"}
            labelCol={{ span: 6 }}
            wrapperCol={{ span: 18 }}
            onFinish={handleFormFinish}
            initialValues={{
                Project: bug ? bug.project : "",
                Description: bug ? bug.description : "",
                Severity: bug ? bug.severity : "",
                Status: bug ? bug.status : "",
                CommitLink: bug ? bug.commitLink : "",
            }}
        >
            <Form.Item label={"Project"} name={"Project"}>
                <Input />
            </Form.Item>
            <Form.Item label={"Description"} name={"Description"}>
                <Input />
            </Form.Item>
            <Form.Item label={"Severity"} name={"Severity"}>
                <Select>
                    <Select.Option value={"Harmless"}>Harmless</Select.Option>
                    <Select.Option value={"Low"}>Low</Select.Option>
                    <Select.Option value={"Medium"}>Medium</Select.Option>
                    <Select.Option value={"High"}>High</Select.Option>
                    <Select.Option value={"Critical"}>Critical</Select.Option>
                </Select>
            </Form.Item>
            <Form.Item label={"Status"} name={"Status"}>
                <Select>
                    <Select.Option value={"New"}>New</Select.Option>
                    <Select.Option value={"In Progress"}>
                        In Progress
                    </Select.Option>
                    <Select.Option value={"Fixed"}>Fixed</Select.Option>
                    <Select.Option value={"Closed"}>Closed</Select.Option>
                </Select>
            </Form.Item>
            <Form.Item label={"Commit Link"} name={"CommitLink"}>
                <Input />
            </Form.Item>
            <Form.Item style={{ textAlign: "right" }}>
                <Space>
                    <Button
                        type={"primary"}
                        htmlType={"submit"}
                        style={{ background: "#10243c" }}
                    >
                        {operation}
                    </Button>
                    <Button htmlType={"button"} onClick={handleCancel}>
                        Cancel
                    </Button>
                </Space>
            </Form.Item>
        </Form>
    );
});

export default BugForm;
