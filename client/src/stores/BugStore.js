import axios from "axios";
import {action, makeObservable, observable} from "mobx";
import Constant from "../Constant";

class BugStore {

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