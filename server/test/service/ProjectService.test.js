const { describe, test, expect } = require("@jest/globals");
const { addProject, getProject } = require("../../src/service/ProjectService");
const Project = require("../../src/model/project");

describe("Testing Project Service:", () => {
    test("Add Project - Testing correct request: ", async () => {
        let request = {
            body: {
                description: "This is a project",
                repo: "https://www.google.com",
                userId: 15,
            },
        };
        let response = {
            status: {},
        };

        Project.create = jest
            .fn()
            .mockResolvedValue(
                JSON.parse(
                    "{\n" +
                        '    "id": 9,\n' +
                        '    "description": "This is a project",\n' +
                        '    "repo": "https://www.google.com",\n' +
                        '    "userId": 15,\n' +
                        '    "updatedAt": "2023-11-17T13:55:08.976Z",\n' +
                        '    "createdAt": "2023-11-17T13:55:08.976Z"\n' +
                        "}"
                )
            );

        const returnedProject = await addProject(request, response);

        expect(returnedProject).not.toBeNull();
        expect(returnedProject.description).toEqual(request.body.description);
        expect(returnedProject.userId).toEqual(request.body.userId);
    });

    test("Add Project - Testing incorrect request: ", async () => {
        let request = {
            body: {
                description: "This is a project",
                repo: "https://www.google.com",
                userId: 15,
            },
        };
        let response = {
            status: {},
        };

        Project.create = jest.fn().mockRejectedValue("Error");

        const returnedProject = await addProject(request, response);

        expect(returnedProject).toBeNull();
    });

    test("Get Project - Testing correct request: ", async () => {
        let request = {
            params: {
                id: 9,
            },
        };
        let response = {
            status: {},
        };

        Project.findByPk = jest
            .fn()
            .mockResolvedValue(
                JSON.parse(
                    "{\n" +
                        '    "id": 9,\n' +
                        '    "name": "Project 1",\n' +
                        '    "repo": "https://www.google.com",\n' +
                        '    "description": "This is a project",\n' +
                        '    "userId": 15,\n' +
                        '    "updatedAt": "2023-11-17T13:55:08.976Z",\n' +
                        '    "createdAt": "2023-11-17T13:55:08.976Z"\n' +
                        "}"
                )
            );

        const returnedProject = await getProject(request, response);

        expect(returnedProject).not.toBeNull();
        expect(returnedProject.id).toEqual(request.params.id);
    });

    test("Get Project - Testing incorrect request: ", async () => {
        let request = {
            params: {
                id: 9,
            },
        };
        let response = {
            status: {},
        };

        Project.findByPk = jest.fn().mockRejectedValue("Error");

        const returnedProject = await getProject(request, response);

        expect(returnedProject).toBeNull();
    });
});
