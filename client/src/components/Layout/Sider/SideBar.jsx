import React, {useEffect, useState} from 'react';
import {Layout, Menu} from 'antd';
import constant from '../../../Constant';
import "./SideBar.css";
import {observer} from "mobx-react";
import {bugStore} from "../../../stores/BugStore";
import {projectStore} from '../../../stores/ProjectStore';

const {Header, Content, Footer, Sider} = Layout;


const SideBar = observer(({selectedTab}) => {
    const [collapsed, setCollapsed] = useState(false);
    const [selectedProjectKey, setSelectedProjectKey] = useState('');
    const projectListItems = projectStore.projectList.map((item) =>
        ({key: item.id, label: item.name}));

    const onClick = (item) => {
        if (selectedProjectKey === item.key) {
            setSelectedProjectKey('');
            bugStore.resetFilteredBugs();
            return;
        }
        setSelectedProjectKey(item.key);
        bugStore.filterBugsByProjectId(item.key);
    }

    if (selectedTab !== constant.BUGS_TAB) {
        return;
    }


    return (
        <Sider collapsed={collapsed} onCollapse={coll => setCollapsed(coll)}>
            <Header style={{color: "aliceblue", fontSize: "16px"}}>Projects: </Header>
            <Menu theme="dark" selectedKeys={[selectedProjectKey]} mode="inline" onClick={onClick}>
                {projectListItems.map(item => (
                    <Menu.Item key={item.key}>{item.label}</Menu.Item>
                ))}
            </Menu>
        </Sider>
    );
});

export default SideBar;