const {describe, expect, test} = require("@jest/globals");
const Bug = require("../../src/model/bug.js");
const {addBug, getBug, getAllBugsForProject} = require("../../src/service/BugService");

describe("Testing Bug Service:", () => {
    test("Add Bug - Testing correct request: ", async () => {
        let request = {
            body: {
                "severity": "Low",
                "description": "This is a bug, alright",
                "commitLink": "https://www.google.com",
                "projectId": 23,
                "userId": 15,
                "status": "New"
            }
        };
        let response = {
            status: {}
        };

        Bug.create = jest.fn().mockResolvedValue(JSON.parse("{\n" +
            "    \"id\": 9,\n" +
            "    \"severity\": \"Low\",\n" +
            "    \"description\": \"This is a bug, alright\",\n" +
            "    \"commitLink\": \"https://www.google.com\",\n" +
            "    \"projectId\": 23,\n" +
            "    \"userId\": 15,\n" +
            "    \"status\": \"New\",\n" +
            "    \"updatedAt\": \"2023-11-17T13:55:08.976Z\",\n" +
            "    \"createdAt\": \"2023-11-17T13:55:08.976Z\"\n" +
            "}"));


        const returnedBug = await addBug(request, response);

        expect(returnedBug).not.toBeNull();
        expect(returnedBug.severity).toEqual(request.body.severity);
        expect(returnedBug.description).toEqual(request.body.description);
        expect(returnedBug.commitLink).toEqual(request.body.commitLink);
        expect(returnedBug.projectId).toEqual(request.body.projectId);
        expect(returnedBug.userId).toEqual(request.body.userId);
        expect(returnedBug.status).toEqual(request.body.status);
    })
    test("Add Bug - Testing incorrect request: ", async () => {
        let request = {
            body: {
                "severity": "Invalid",
                "description": "This is a bug, alright",
                "commitLink": "https://www.google.com",
                "projectId": 23,
                "userId": 15,
                "status": "New"
            }
        };
        let response = {
            status: {}
        };

        Bug.create = jest.fn().mockRejectedValue("Error");

        const returnedBug = await addBug(request, response);

        expect(returnedBug).toBeNull();
    })
    test("Get Bug - Testing correct request: ", async () => {
        let request = {
            params: {
                id: 1
            }
        };
        let response = {
            status: {},
            json: {}
        };

        Bug.findByPk = jest.fn().mockResolvedValue(JSON.parse("{\n" +
            "    \"id\": 1,\n" +
            "    \"severity\": \"Low\",\n" +
            "    \"description\": \"This is a bug, alright\",\n" +
            "    \"commitLink\": \"https://www.google.com\",\n" +
            "    \"projectId\": 23,\n" +
            "    \"userId\": 15,\n" +
            "    \"status\": \"New\",\n" +
            "    \"updatedAt\": \"2023-11-17T13:55:08.976Z\",\n" +
            "    \"createdAt\": \"2023-11-17T13:55:08.976Z\"\n" +
            "}"));

        const returnedBug = await getBug(request, response);

        expect(returnedBug).not.toBeNull();
        expect(returnedBug.id).toEqual(request.params.id);
        expect(returnedBug.severity).toEqual("Low");
        expect(returnedBug.description).toEqual("This is a bug, alright");
        expect(returnedBug.commitLink).toEqual("https://www.google.com");
        expect(returnedBug.projectId).toEqual(23);
        expect(returnedBug.userId).toEqual(15);
        expect(returnedBug.status).toEqual("New");
    })
    test("Get Bug - Testing incorrect request: ", async () => {
        let request = {
            params: {
                id: 1
            }
        };
        let response = {
            status: {},
            json: {}
        };

        Bug.findByPk = jest.fn().mockRejectedValue("Error");

        const returnedBug = await getBug(request, response);

        expect(returnedBug).toBeNull();
    })
    test("Get All Bugs For Project - Testing correct request: ", async () => {
        let request = {
            params: {
                id: 1
            }
        };
        let response = {
            status: {},
            json: {}
        };

        Bug.findAll = jest.fn().mockResolvedValue(JSON.parse("[{\n" +
            "    \"id\": 1,\n" +
            "    \"severity\": \"Low\",\n" +
            "    \"description\": \"This is a bug, alright\",\n" +
            "    \"commitLink\": \"https://www.google.com\",\n" +
            "    \"projectId\": 23,\n" +
            "    \"userId\": 15,\n" +
            "    \"status\": \"New\",\n" +
            "    \"updatedAt\": \"2023-11-17T13:55:08.976Z\",\n" +
            "    \"createdAt\": \"2023-11-17T13:55:08.976Z\"\n" +
            "}]"));

        const returnedBugs = await getAllBugsForProject(request, response);

        expect(returnedBugs).not.toBeNull();
        expect(returnedBugs[0].id).toEqual(1);
        expect(returnedBugs[0].severity).toEqual("Low");
        expect(returnedBugs[0].description).toEqual("This is a bug, alright");
        expect(returnedBugs[0].commitLink).toEqual("https://www.google.com");
        expect(returnedBugs[0].projectId).toEqual(23);
        expect(returnedBugs[0].userId).toEqual(15);
        expect(returnedBugs[0].status).toEqual("New");
    })
    test("Get All Bugs For Project - Testing incorrect request: ", async () => {
        let request = {
            params: {
                id: 1
            }
        };
        let response = {
            status: {},
            json: {}
        };

        Bug.findAll = jest.fn().mockRejectedValue("Error");

        const returnedBugs = await getAllBugsForProject(request, response);

        expect(returnedBugs).toBeNull();
    })
})