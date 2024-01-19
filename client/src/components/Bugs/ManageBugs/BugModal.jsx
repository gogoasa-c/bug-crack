import { Modal } from "antd";
import { observer } from "mobx-react";
import { bugStore } from "../../../stores/BugStore";
import BugForm from "./BugForm";

const BugModal = observer(({ title }) => {
    return (
        <Modal
            open={bugStore.isModalShown}
            title={title}
            footer={null}
            onCancel={null}
            closable={false}
        >
            <BugForm bug={bugStore.selectedBugForEdit} />
        </Modal>
    );
});

export default BugModal;
