import axios from "axios";
import {action, makeObservable, observable} from "mobx";
import Constant from "../Constant";

class BugStore {
    /*bugList = [
        {
            id: 0,
            project: "Bug Crack",
            description: "We have no bugs, but this is a placeholder.",
            severity: "Low",
            status: "New",
            assignedTo: "Cristian Gogoasa",
        },
        {
            id: 2,
            project: "SQLite",
            description:
                "We have no bugs, but this is a very slightly longer placeholder",
            severity: "Medium",
            status: "In progress",
            assignedTo: "Valentin Ghita",
        },
        {
            id: 1,
            project: "TKCiNL",
            description: "Still a placeholder, nothing new.",
            severity: "High",
            status: "New",
            assignedTo: "Brescar",
        },
        {
            id: 4,
            project: "Serevu",
            description: "This is a bug which cannot be reproduced.",
            severity: "Harmless",
            status: "Fixed",
            assignedTo: "Petre Palton",
        },
        {
            id: 3,
            project: "Bug Crack 2.0",
            description:
                "We’re not sure whether to call this a feature or not.",
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
            assignedTo: "Cristian Gogoasa",
        },
        {
            id: 2,
            project: "SQLite",
            description:
                "We have no bugs, but this is a very slightly longer placeholder",
            severity: "Medium",
            status: "In progress",
            assignedTo: "Valentin Ghita",
        },
        {
            id: 1,
            project: "TKCiNL",
            description: "Still a placeholder, nothing new.",
            severity: "High",
            status: "New",
            assignedTo: "Brescar",
        },
        {
            id: 4,
            project: "Serevu",
            description: "This is a bug which cannot be reproduced.",
            severity: "Harmless",
            status: "Fixed",
            assignedTo: "Petre Palton",
        },
        {
            id: 3,
            project: "Bug Crack 2.0",
            description:
                "We’re not sure whether to call this a feature or not.",
            severity: "Critical",
            status: "Closed",
            assignedTo: "Andrei Cheorche",
        },
        {
            id: 0,
            project: "Bug Crack",
            description: "We have no bugs, but this is a placeholder.",
            severity: "Low",
            status: "New",
            assignedTo: "Cristian Gogoasa",
        },
        {
            id: 2,
            project: "SQLite",
            description:
                "We have no bugs, but this is a very slightly longer placeholder",
            severity: "Medium",
            status: "In progress",
            assignedTo: "Valentin Ghita",
        },
        {
            id: 1,
            project: "TKCiNL",
            description: "Still a placeholder, nothing new.",
            severity: "High",
            status: "New",
            assignedTo: "Brescar",
        },
        {
            id: 4,
            project: "Serevu",
            description: "This is a bug which cannot be reproduced.",
            severity: "Harmless",
            status: "Fixed",
            assignedTo: "Petre Palton",
        },
        {
            id: 3,
            project: "Bug Crack 2.0",
            description:
                "We’re not sure whether to call this a feature or not.",
            severity: "Critical",
            status: "Closed",
            assignedTo: "Andrei Cheorche",
        },
        {
            id: 0,
            project: "Bug Crack",
            description: "We have no bugs, but this is a placeholder.",
            severity: "Low",
            status: "New",
            assignedTo: "Cristian Gogoasa",
        },
        {
            id: 2,
            project: "SQLite",
            description:
                "We have no bugs, but this is a very slightly longer placeholder",
            severity: "Medium",
            status: "In progress",
            assignedTo: "Valentin Ghita",
        },
        {
            id: 1,
            project: "TKCiNL",
            description: "Still a placeholder, nothing new.",
            severity: "High",
            status: "New",
            assignedTo: "Brescar",
        },
        {
            id: 4,
            project: "Serevu",
            description: "This is a bug which cannot be reproduced.",
            severity: "Harmless",
            status: "Fixed",
            assignedTo: "Petre Palton",
        },
        {
            id: 3,
            project: "Bug Crack 2.0",
            description:
                "We’re not sure whether to call this a feature or not.",
            severity: "Critical",
            status: "Closed",
            assignedTo: "Andrei Cheorche",
        },
    ];*/

    bugList = [];

    filteredBugList = this.bugList;

    isModalShown = false;

    selectedBugForEdit = null;

    constructor() {
        makeObservable(this, {
            bugList: observable,
            filteredBugList: observable,
            isModalShown: observable,
            selectedBugForEdit: observable,
            filterBugsByProjectId: action,
            resetFilteredBugs: action,
            toggleModalShown: action,
            updateSelectedBugForEdit: action,
        });
    }

    toggleModalShown = () => {
        this.isModalShown = !this.isModalShown;
    };

    filterBugsByProjectId = (projectId) => {
        this.filteredBugList = this.bugList.filter(
            (bug) => bug.id.toString() === projectId
        );
    };

    resetFilteredBugs = () => {
        this.filteredBugList = this.bugList;
    };

    updateSelectedBugForEdit = (bug) => {
        this.selectedBugForEdit = bug;
    };

    getBugs = async (userId) => {
        axios
            .get(Constant.LOCALHOST + `/bug/user/${userId}`)
            .then((response) => {
                this.bugList = response.data;
                this.filteredBugList = this.bugList;
            })
            .catch((error) => {
                console.error(
                    `[${new Date().toISOString()}]: Error whilst processing request: ${error}`
                );
            });
    };
}

export const bugStore = new BugStore();