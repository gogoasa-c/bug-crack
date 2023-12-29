import React, {useState} from 'react';
import {Layout, Menu} from 'antd';
import constant from '../../../Constant';
import "./SideBar.css";

const { Header, Content, Footer, Sider } = Layout;

const projectList = [
    {
        key: 0,
        label: "Bug Crack"
    },
    {
        key: 1,
        label: "TKCiNL"
    },
    {
        key: 2,
        label: "SQLite"
    },
    {
        key: 3,
        label: "Bug Crack 2.0"
    },
    {
        key: 4,
        label: "Serevu"
    }
].map(item => ({
    ...item,
    onClick: () => {
        filteredProjectList = projectList.filter(project => project.key !== item.key);
    }
}));

let filteredProjectList = projectList;

const SideBar = ({selectedTab}) => {
    const [collapsed, setCollapsed] = useState(false);

    if (selectedTab !== constant.BUGS_TAB) {
        return;
    }

    return (
        <Sider collapsed={collapsed} onCollapse={coll => setCollapsed(coll)} >
            <Menu theme="dark" defaultSelectedKeys={['-1']} mode="inline" items={filteredProjectList} />
        </Sider>
    );
}

export default SideBar;