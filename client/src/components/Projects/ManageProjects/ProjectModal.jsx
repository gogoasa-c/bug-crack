import { Modal } from "antd";
import { observer } from "mobx-react";
import { projectStore } from "../../../stores/ProjectStore";
import ProjectForm from "./ProjectForm";

const ProjectModal = observer(({ title }) => {
    console.log("Rendering Modal"); // add this line
    return (
        <Modal
            open={projectStore.isModalShown}
            title={title}
            footer={null}
            onCancel={null}
            closable={false}
        >
            <ProjectForm project={projectStore.selectedProjectForEdit} />
        </Modal>
    );
});

export default ProjectModal;
