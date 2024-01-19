import { Content } from "antd/es/layout/layout";
import BugList from "../../Bugs/BugList";
import ProjectList from "../../Projects/ProjectList";
import LandingPage from "./LandingPage";

const MainPanel = ({ tabSelection }) => {
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

    return <Content>{getPage(tabSelection)}</Content>;
};

export default MainPanel;
