import { Button, Form, Input, Select, Space } from "antd";
import { projectStore } from "../../../stores/ProjectStore";
import { observer } from "mobx-react";

const ProjectForm = observer(({ project }) => {
    const operation = project ? "Edit" : "Add";

    const [form] = Form.useForm();

    const handleFormFinish = async () => {
        form.resetFields();
        projectStore.toggleModalShown();

        const newProject = {
            id: projectStore.projectList.length + 1,
            description: form.getFieldValue("Description"),
            repo: form.getFieldValue("Repo"),
        };

        if (operation === "Edit") {
            // update project
        } else {
            // add project
        }
    };

    const handleCancel = () => {
        form.resetFields();
        projectStore.toggleModalShown();
    };

    return (
        <Form
            form={form}
            name={"projectForm"}
            labelCol={{ span: 6 }}
            wrapperCol={{ span: 18 }}
            onFinish={handleFormFinish}
            initialValues={{
                Description: project ? project.description : "",
                Repo: project ? project.repo : "",
            }}
        >
            <Form.Item label={"Description"} name={"Description"}>
                <Input />
            </Form.Item>
            <Form.Item label={"Repo"} name={"Repo"}>
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

export default ProjectForm;
