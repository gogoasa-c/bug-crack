const {describe, expect, test} = require("@jest/globals");
const Project = require("../../src/model/project.js");
const {getProject, getAllProjectsForTeam, addProject} = require("../../src/service/ProjectService");
const {addBug} = require("../../src/service/BugService");


describe("Testing Project Service:", () => {
    test("Add Project - Testing correct request: ", async () => {
        let request = {
            body: {
                "name": "Project 1",
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
            "    \"description\": \"This is a project\",\n" +
            "    \"teamId\": 1,\n" +
            "    \"updatedAt\": \"2023-11-17T13:55:08.976Z\",\n" +
            "    \"createdAt\": \"2023-11-17T13:55:08.976Z\"\n" +
            "}"));

        const returnedProject = await addProject(request, response);

        expect(returnedProject).not.toBeNull();
        expect(returnedProject.name).toEqual(request.body.name);
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
})