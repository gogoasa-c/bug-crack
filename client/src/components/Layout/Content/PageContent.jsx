import {Layout} from "antd";
import MainPanel from "./MainPanel";
import SideBar from "../Sider/SideBar";
import {projectStore} from "../../../stores/ProjectStore";
import React from "react";

const PageContent = ({tabSelection}) => {
    return (
        <Layout>
            <SideBar selectedTab={tabSelection} />
            <MainPanel tabSelection={tabSelection} />
        </Layout>
    );
}

export default PageContent;
