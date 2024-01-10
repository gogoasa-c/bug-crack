import {action, makeObservable, observable} from "mobx";

class BugStore {
    bugList = [
        {
            id: 0,
            project: "Bug Crack",
            description: "We have no bugs, but this is a placeholder.",
            severity: "Low",
            status: "New",
            assignedTo: "Cristian Gogoasa"
        },
        {
            id: 2,
            project: "SQLite",
            description: "We have no bugs, but this is a very slightly longer placeholder",
            severity: "Medium",
            status: "In progress",
            assignedTo: "Valentin Ghita"
        },
        {
            id: 1,
            project: "TKCiNL",
            description: "Still a placeholder, nothing new.",
            severity: "High",
            status: "New",
            assignedTo: "Brescar"
        },
        {
            id: 4,
            project: "Serevu",
            description: "This is a bug which cannot be reproduced.",
            severity: "Harmless",
            status: "Fixed",
            assignedTo: "Petre Palton"
        },
        {
            id: 3,
            project: "Bug Crack 2.0",
            description: "We’re not sure whether to call this a feature or not.",
            severity: "Critical",
            status: "Closed",
            assignedTo: "Andrei Cheorche"
        },
        {
            id: 0,
            project: "Bug Crack",
            description: "We have no bugs, but this is a placeholder.",
            severity: "Low",
            status: "New",
            assignedTo: "Cristian Gogoasa"
        },
        {
            id: 2,
            project: "SQLite",
            description: "We have no bugs, but this is a very slightly longer placeholder",
            severity: "Medium",
            status: "In progress",
            assignedTo: "Valentin Ghita"
        },
        {
            id: 1,
            project: "TKCiNL",
            description: "Still a placeholder, nothing new.",
            severity: "High",
            status: "New",
            assignedTo: "Brescar"
        },
        {
            id: 4,
            project: "Serevu",
            description: "This is a bug which cannot be reproduced.",
            severity: "Harmless",
            status: "Fixed",
            assignedTo: "Petre Palton"
        },
        {
            id: 3,
            project: "Bug Crack 2.0",
            description: "We’re not sure whether to call this a feature or not.",
            severity: "Critical",
            status: "Closed",
            assignedTo: "Andrei Cheorche"
        },
        {
            id: 0,
            project: "Bug Crack",
            description: "We have no bugs, but this is a placeholder.",
            severity: "Low",
            status: "New",
            assignedTo: "Cristian Gogoasa"
        },
        {
            id: 2,
            project: "SQLite",
            description: "We have no bugs, but this is a very slightly longer placeholder",
            severity: "Medium",
            status: "In progress",
            assignedTo: "Valentin Ghita"
        },
        {
            id: 1,
            project: "TKCiNL",
            description: "Still a placeholder, nothing new.",
            severity: "High",
            status: "New",
            assignedTo: "Brescar"
        },
        {
            id: 4,
            project: "Serevu",
            description: "This is a bug which cannot be reproduced.",
            severity: "Harmless",
            status: "Fixed",
            assignedTo: "Petre Palton"
        },
        {
            id: 3,
            project: "Bug Crack 2.0",
            description: "We’re not sure whether to call this a feature or not.",
            severity: "Critical",
            status: "Closed",
            assignedTo: "Andrei Cheorche"
        },
        {
            id: 0,
            project: "Bug Crack",
            description: "We have no bugs, but this is a placeholder.",
            severity: "Low",
            status: "New",
            assignedTo: "Cristian Gogoasa"
        },
        {
            id: 2,
            project: "SQLite",
            description: "We have no bugs, but this is a very slightly longer placeholder",
            severity: "Medium",
            status: "In progress",
            assignedTo: "Valentin Ghita"
        },
        {
            id: 1,
            project: "TKCiNL",
            description: "Still a placeholder, nothing new.",
            severity: "High",
            status: "New",
            assignedTo: "Brescar"
        },
        {
            id: 4,
            project: "Serevu",
            description: "This is a bug which cannot be reproduced.",
            severity: "Harmless",
            status: "Fixed",
            assignedTo: "Petre Palton"
        },
        {
            id: 3,
            project: "Bug Crack 2.0",
            description: "We’re not sure whether to call this a feature or not.",
            severity: "Critical",
            status: "Closed",
            assignedTo: "Andrei Cheorche"
        }
    ];

    filteredBugList = this.bugList;

    constructor() {
        makeObservable(this, {
            bugList: observable,
            filteredBugList: observable,
            filterBugsByProjectId: action
        })
    }

    filterBugsByProjectId = (projectId) => {
        this.filteredBugList = this.bugList.filter(bug => bug.id.toString() === projectId);
    }

    resetFilteredBugs = () => {
        this.filteredBugList = this.bugList;
    }

}

export const bugStore = new BugStore();