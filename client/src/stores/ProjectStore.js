import { action, makeObservable, observable } from "mobx";
import projectList from "../components/Projects/ProjectList";
import {userStore} from "./UserStore";
import Constant from "../Constant";

class ProjectStore {
    projectList = [
        {
            id: 0,
            name: "Bug Crack",
            description:
                "A bug tracking app for developers to track bugs in their projects.",
            repo: "https//github.com/bug-crack/bug-crack",
        },
        {
            id: 1,
            name: "TKCiNL",
            description:
                "A web app for tracking the progress of students in a coding bootcamp.",
            repo: "https//github.com/justATinyDancer/TKCiNL",
        },
        {
            id: 2,
            name: "SQLite",
            description: "A database manager.",
            repo: "https//github.com/thisIsAnotherUser/sqlite",
        },
        {
            id: 3,
            name: "Bug Crack 2.0",
            description: "just another description",
            repo: "https//github.com/bug-crack/bug-crack2",
        },
        {
            id: 4,
            name: "Serevu",
            description: "Game. Web game.",
            repo: "https//github.com/Anonimus/serevu",
        },
    ];

    // projectList = [];

    setProjectList = (projectList) => {
        this.projectList = projectList;
    };

    isModalShown = false;

    selectedProjectForEdit = null;

    constructor() {
        makeObservable(this, {
            projectList: observable,
            isModalShown: observable,
            selectedProjectForEdit: observable,
            toggleModalShown: action,
            updateSelectedProjectForEdit: action,
        });
    }

    toggleModalShown = () => {
        this.isModalShown = !this.isModalShown;
    };

    updateSelectedProjectForEdit = (project) => {
        this.selectedProjectForEdit = project;
    };

    getProjectsForUser = async () => {
        await fetch(Constant.LOCALHOST + `/project/user/${userStore.userId}`)
            .then((response) => {
                this.projectList = response.data;
            })
            .catch((error) => {
                console.error(
                    `[${new Date().toISOString()}]: Error whilst processing request: ${error}`
                );
            });
    }
}

export const projectStore = new ProjectStore();
