import React, { useState } from "react";
import "../Projects/ProjectList.css";
import { Layout, Space, Row, Col, Divider, Table } from "antd";
import { CheckCircleFilled } from "@ant-design/icons";
import Dot from "../Common/Dot";
import { observer } from "mobx-react";
import { projectStore } from "../../stores/ProjectStore";

const { Header, Footer, Sider, Content } = Layout;

const headers = ["ID", "Description", "Repo"];

const getHeaders = (header) => {
    if (header === "Description") {
        return <Col span={8}>{header}</Col>;
    }
    return <Col span={4}>{header}</Col>;
};

const getColumns = (column) => {
    if (column === "Description") {
        return {
            title: column,
            dataIndex: column.toLowerCase(),
            width: 300,
        };
    }
    if (column === "Repo") {
        return {
            title: column,
            dataIndex: column.toLowerCase(),
            width: 300,
        };
    }
    return {
        title: column,
        dataIndex: column.toLowerCase(),
        width: 150,
    };
};

const ProjectList = observer(() => {
    return (
        <Table
            columns={headers.map((col) => getColumns(col))}
            dataSource={projectStore.projectList}
            pagination={{
                pageSize: 10,
            }}
            onRow={(record, rowIndex) => {
                return {
                    onClick: (event) => {
                        projectStore.updateSelectedProjectForEdit(record);
                        projectStore.toggleModalShown();
                    },
                };
            }}
        />
    );
});

export default ProjectList;
