class ProjectStore {
    projectList = [
        {
            id: 0,
            name: "Bug Crack"
        },
        {
            id: 1,
            name: "TKCiNL"
        },
        {
            id: 2,
            name: "SQLite"
        },
        {
            id: 3,
            name: "Bug Crack 2.0"
        },
        {
            id: 4,
            name: "Serevu"
        }
    ];
    
    setProjectList = (projectList) => {
        this.projectList = projectList;
    }
}

export const projectStore = new ProjectStore();