import { Content } from "antd/es/layout/layout";
import {observer} from "mobx-react";
import {userStore} from "../../../stores/UserStore";
import BugList from "../../Bugs/BugList";
import ProjectList from "../../Projects/ProjectList";
import LandingPage from "./LandingPage";

const MainPanel = observer(({ tabSelection }) => {
    const getPage = (tabName) => {
        switch (tabName) {
            case "projects":
                return <ProjectList />;
            case "teams":
                return <></>;
            case "bugs":
                return <BugList />;
        }
    };
    if (userStore.userId === -1) {
        return <></>;
    }

    return <Content>{getPage(tabSelection)}</Content>;
});

export default MainPanel;
