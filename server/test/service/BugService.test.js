const {describe, expect, test} = require("@jest/globals");
const Bug = require("../../src/model/bug.js");
const {STATUS_CREATED} = require("../../src/constant/constant.js");

const addBug = require("../../src/service/BugService.js").addBug;

describe("Testing Bug Service:", () => {
    test("Testing correct request: ", () => {
        Bug.create = jest.fn((obj) => {
            return JSON.parse("{\n" +
                "    \"id\": 9,\n" +
                "    \"severity\": \"Low\",\n" +
                "    \"description\": \"This is a bug, alright\",\n" +
                "    \"commitLink\": \"https://www.google.com\",\n" +
                "    \"projectId\": 23,\n" +
                "    \"userId\": 15,\n" +
                "    \"status\": \"New\",\n" +
                "    \"updatedAt\": \"2023-11-17T13:55:08.976Z\",\n" +
                "    \"createdAt\": \"2023-11-17T13:55:08.976Z\"\n" +
                "}");
        });
        Bug.create.then = jest.fn(() => {});
        Bug.create.then.catch = jest.fn(() => {});

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
        addBug(request, response);

        expect(response.status).toBe(STATUS_CREATED);
    })
})