import {Content} from "antd/es/layout/layout";
import BugList from "../../Bugs/BugList";

const MainPanel = ({tabSelection}) => {
    const getPage = (tabName) => {
        switch (tabName) {
            case 'projects':
                return <></>;
            case 'teams':
                return <></>;
            case 'bugs':
                return <BugList/>
        }
    }

    return (
            <Content>
                {getPage(tabSelection)}
            </Content>
    );
}

export default MainPanel;
