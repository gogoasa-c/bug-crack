import {Layout} from "antd";
import {useState} from "react";
import NavBar from "./Header/NavBar";
import PageContent from "./Content/PageContent";

const PageContainer = () => {
    const [ selectedTab, setSelectedTab ] = useState('projects');

    const handleTabClick = (tabName) => {
        setSelectedTab(tabName);
    }

    return (
            <Layout>
                <NavBar onTabChanged={handleTabClick}/>
                <PageContent tabSelection={selectedTab}/>
            </Layout>
    );
}

export default PageContainer;
