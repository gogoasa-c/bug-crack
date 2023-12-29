import {Layout} from "antd";
import MainPanel from "./MainPanel";
import SideBar from "../Sider/SideBar";

const PageContent = ({tabSelection}) => {
    return (
        <Layout>
            <SideBar selectedTab={tabSelection}/>
            <MainPanel tabSelection={tabSelection}/>
        </Layout>
    );
}

export default PageContent;
