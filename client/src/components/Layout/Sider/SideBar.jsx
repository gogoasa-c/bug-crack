import React, {useEffect, useState} from 'react';
import {Layout, Menu} from 'antd';
import constant from '../../../Constant';
import "./SideBar.css";

const { Header, Content, Footer, Sider } = Layout;



const SideBar = ({selectedTab}) => {
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
    ];

    const [collapsed, setCollapsed] = useState(false);
    const [selectedProject, setSelectedProject] = useState(projectList[0]);
    const [filteredProjectList, setFilteredProjectList] = useState(projectList);

    console.log(projectList)
    const onSelect = (item) => {
        console.log(item);
        setSelectedProject(item);
    }

    if (selectedTab !== constant.BUGS_TAB) {
        return;
    }

    return (
        <Sider collapsed={collapsed} onCollapse={coll => setCollapsed(coll)} >
            <Menu theme="dark" selectedKeys={[selectedProject.key]} mode="inline" items={filteredProjectList} onSelect={onSelect} />
        </Sider>
    );
}

export default SideBar;