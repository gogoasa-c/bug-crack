import { Modal } from "antd";
import { observer } from "mobx-react";
import { projectStore } from "../../../stores/ProjectStore";
import ProjectForm from "./ProjectForm";

const BugModal = observer(({ title }) => {
    console.log("Rendering Modal"); // add this line
    return (
        <Modal
            open={projectStore.isModalShown}
            title={title}
            footer={null}
            onCancel={null}
            closable={false}
        >
            <ProjectForm bug={projectStore.selectedBugForEdit} />
        </Modal>
    );
});

export default BugModal;
