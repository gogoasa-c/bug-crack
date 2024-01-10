import React, {useState} from 'react';
import "./BugList.css";
import {Layout, Space, Row, Col, Divider, Table} from "antd";
import {CheckCircleFilled} from "@ant-design/icons";
import Dot from "../Common/Dot";
import { observer } from 'mobx-react';
import { bugStore } from '../../stores/BugStore';

const {Header, Footer, Sider, Content} = Layout

// mock
const bugArray = [
    {
        "project": "Bug Crack",
        "description": "We have no bugs, but this is a placeholder.",
        "severity": "Low",
        "status": "New",
        "assignedTo": "Cristian Gogoasa"
    },
    {
        "project": "SQLite",
        "description": "We have no bugs, but this is a very slightly longer placeholder",
        "severity": "Medium",
        "status": "In progress",
        "assignedTo": "Valentin Ghita"
    },
    {
        "project": "TKCiNL",
        "description": "Still a placeholder, nothing new.",
        "severity": "High",
        "status": "New",
        "assignedTo": "Brescar"
    },
    {
        "project": "Serevu",
        "description": "This is a bug which cannot be reproduced.",
        "severity": "Harmless",
        "status": "Fixed",
        "assignedTo": "Petre Palton"
    },
    {
        "project": "Bug Crack 2.0",
        "description": "We’re not sure whether to call this a feature or not.",
        "severity": "Critical",
        "status": "Closed",
        "assignedTo": "Andrei Cheorche"
    }
];

const bugArray1 = [
    {
        project: "Bug Crack",
        description: "We have no bugs, but this is a placeholder.",
        severity: "Low",
        status: "New",
        assignedTo: "Cristian Gogoasa"
    },
    {
        project: "SQLite",
        description: "We have no bugs, but this is a very slightly longer placeholder",
        severity: "Medium",
        status: "In progress",
        assignedTo: "Valentin Ghita"
    },
    {
        project: "TKCiNL",
        description: "Still a placeholder, nothing new.",
        severity: "High",
        status: "New",
        assignedTo: "Brescar"
    },
    {
        project: "Serevu",
        description: "This is a bug which cannot be reproduced.",
        severity: "Harmless",
        status: "Fixed",
        assignedTo: "Petre Palton"
    },
    {
        project: "Bug Crack 2.0",
        description: "We’re not sure whether to call this a feature or not.",
        severity: "Critical",
        status: "Closed",
        assignedTo: "Andrei Cheorche"
    },
    {
        project: "Bug Crack",
        description: "We have no bugs, but this is a placeholder.",
        severity: "Low",
        status: "New",
        assignedTo: "Cristian Gogoasa"
    },
    {
        project: "SQLite",
        description: "We have no bugs, but this is a very slightly longer placeholder",
        severity: "Medium",
        status: "In progress",
        assignedTo: "Valentin Ghita"
    },
    {
        project: "TKCiNL",
        description: "Still a placeholder, nothing new.",
        severity: "High",
        status: "New",
        assignedTo: "Brescar"
    },
    {
        project: "Serevu",
        description: "This is a bug which cannot be reproduced.",
        severity: "Harmless",
        status: "Fixed",
        assignedTo: "Petre Palton"
    },
    {
        project: "Bug Crack 2.0",
        description: "We’re not sure whether to call this a feature or not.",
        severity: "Critical",
        status: "Closed",
        assignedTo: "Andrei Cheorche"
    },
    {
        project: "Bug Crack",
        description: "We have no bugs, but this is a placeholder.",
        severity: "Low",
        status: "New",
        assignedTo: "Cristian Gogoasa"
    },
    {
        project: "SQLite",
        description: "We have no bugs, but this is a very slightly longer placeholder",
        severity: "Medium",
        status: "In progress",
        assignedTo: "Valentin Ghita"
    },
    {
        project: "TKCiNL",
        description: "Still a placeholder, nothing new.",
        severity: "High",
        status: "New",
        assignedTo: "Brescar"
    },
    {
        project: "Serevu",
        description: "This is a bug which cannot be reproduced.",
        severity: "Harmless",
        status: "Fixed",
        assignedTo: "Petre Palton"
    },
    {
        project: "Bug Crack 2.0",
        description: "We’re not sure whether to call this a feature or not.",
        severity: "Critical",
        status: "Closed",
        assignedTo: "Andrei Cheorche"
    },
    {
        project: "Bug Crack",
        description: "We have no bugs, but this is a placeholder.",
        severity: "Low",
        status: "New",
        assignedTo: "Cristian Gogoasa"
    },
    {
        project: "SQLite",
        description: "We have no bugs, but this is a very slightly longer placeholder",
        severity: "Medium",
        status: "In progress",
        assignedTo: "Valentin Ghita"
    },
    {
        project: "TKCiNL",
        description: "Still a placeholder, nothing new.",
        severity: "High",
        status: "New",
        assignedTo: "Brescar"
    },
    {
        project: "Serevu",
        description: "This is a bug which cannot be reproduced.",
        severity: "Harmless",
        status: "Fixed",
        assignedTo: "Petre Palton"
    },
    {
        project: "Bug Crack 2.0",
        description: "We’re not sure whether to call this a feature or not.",
        severity: "Critical",
        status: "Closed",
        assignedTo: "Andrei Cheorche"
    }
];

const headers = [
    "Project",
    "Description",
    "Severity",
    "Status",
    "Assigned To"
]

const getHeaders = (header) => {
    if (header === "Description") {
        return <Col span={8}>{header}</Col>;
    }
    return <Col span={4}>{header}</Col>;
}

const getColumns = (column) => {
    if (column === 'Description') {
        return {
            title: column,
            dataIndex: column.toLowerCase(),
            width: 300
        }
    }
    if (column === "Assigned To") {
        return {
            title: column,
            dataIndex: 'assignedTo',
            width: 300
        }
    }
    return {
        title: column,
        dataIndex: column.toLowerCase(),
        width: 150
    }
}

const BugList = observer(() => {
    return (
        <Table
            columns={headers.map(col => getColumns(col))}
            dataSource={bugStore.filteredBugList}
            pagination={{
                pageSize: 10,
            }}

        />
    );
});

export default BugList;