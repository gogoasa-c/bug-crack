const {describe, expect, test} = require("@jest/globals");
const Project = require("../../src/model/project.js");
const {getProject, getAllProjectsForTeam, addProject} = require("../../src/service/ProjectService");

describe("Testing Project Service:", () => {
    test("Add Project - Testing correct request: ", async () => {
        let request = {
            body: {
                "name": "Project 1",
                "repositoryLink": "https://www.github.com/user/project1",
                "description": "This is a project",
                "teamId": 1
            }
        };
        let response = {
            status: {}
        };

        Project.create = jest.fn().mockResolvedValue(JSON.parse("{\n" +
            "    \"id\": 1,\n" +
            "    \"name\": \"Project 1\",\n" +
            "    \"repositoryLink\": \"https://www.github.com/user/project1\",\n" +
            "    \"description\": \"This is a project\",\n" +
            "    \"teamId\": 1,\n" +
            "    \"updatedAt\": \"2023-11-17T13:55:08.976Z\",\n" +
            "    \"createdAt\": \"2023-11-17T13:55:08.976Z\"\n" +
            "}"));

        const returnedProject = await addProject(request, response);

        expect(returnedProject).not.toBeNull();
        expect(returnedProject.name).toEqual(request.body.name);
        expect(returnedProject.repositoryLink).toEqual(request.body.repositoryLink);
        expect(returnedProject.description).toEqual(request.body.description);
        expect(returnedProject.teamId).toEqual(request.body.teamId);
    })
    test("Add Project - Testing incorrect request: ", async () => {
        let request = {
            body: {
                "name": "Project 1",
                "description": "This is a project",
                "randomField": "randomValue"
            }
        };
        let response = {
            status: {}
        };

        Project.create = jest.fn().mockRejectedValue("Error");

        const returnedProject = await addProject(request, response);

        expect(returnedProject).toBeNull();
    })
    test("Get Project - Testing correct request: ", async () => {
        let request = {
            params: {
                "id": 1
            }
        };
        let response = {
            status: {}
        };

        Project.findByPk = jest.fn().mockResolvedValue(JSON.parse("{\n" +
            "    \"id\": 1,\n" +
            "    \"name\": \"Project 1\",\n" +
            "    \"repositoryLink\": \"https://www.github.com/user/project1\",\n" +
            "    \"description\": \"This is a project\",\n" +
            "    \"teamId\": 1,\n" +
            "    \"updatedAt\": \"2023-11-17T13:55:08.976Z\",\n" +
            "    \"createdAt\": \"2023-11-17T13:55:08.976Z\"\n" +
            "}"));

        const returnedProject = await getProject(request, response);

        expect(returnedProject).not.toBeNull();
        expect(returnedProject.id).toEqual(request.params.id);
    })
    test("Get Project - Testing incorrect request: ", async () => {
        let request = {
            params: {
                "id": 1
            }
        };
        let response = {
            status: {}
        };

        Project.findByPk = jest.fn().mockRejectedValue("Error");

        const returnedProject = await getProject(request, response);

        expect(returnedProject).toBeNull();
    })
    test("Get All Projects For Team - Testing correct request: ", async () => {
        let request = {
            params: {
                "teamId": 1
            }
        };
        let response = {
            status: {}
        };

        Project.findAll = jest.fn().mockResolvedValue(JSON.parse("[{\n" +
            "    \"id\": 1,\n" +
            "    \"name\": \"Project 1\",\n" +
            "    \"repositoryLink\": \"https://www.github.com/user/project1\",\n" +
            "    \"description\": \"This is a project\",\n" +
            "    \"teamId\": 1,\n" +
            "    \"updatedAt\": \"2023-11-17T13:55:08.976Z\",\n" +
            "    \"createdAt\": \"2023-11-17T13:55:08.976Z\"\n" +
            "}, {\n" +
            "    \"id\": 2,\n" +
            "    \"name\": \"Project 2\",\n" +
            "    \"repositoryLink\": \"https://www.github.com/user/project2\",\n" +
            "    \"description\": \"This is a project\",\n" +
            "    \"teamId\": 1,\n" +
            "    \"updatedAt\": \"2023-11-17T13:55:08.976Z\",\n" +
            "    \"createdAt\": \"2023-11-17T13:55:08.976Z\"\n" +
            "}]"));

        const returnedProjects = await getAllProjectsForTeam(request, response);

        expect(returnedProjects).not.toBeNull();
        expect(returnedProjects.length).toEqual(2);
        expect(returnedProjects[0].teamId).toEqual(request.params.teamId);
        expect(returnedProjects[1].teamId).toEqual(request.params.teamId);
    })
    test("Get All Projects For Team - Testing incorrect request: ", async () => {
        let request = {
            params: {
                "teamId": 1
            }
        };
        let response = {
            status: {}
        };

        Project.findAll = jest.fn().mockRejectedValue("Error");

        const returnedProjects = await getAllProjectsForTeam(request, response);

        expect(returnedProjects).toBeNull();
    })
})