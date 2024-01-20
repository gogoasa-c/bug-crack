const { describe, test, expect } = require("@jest/globals");
const Team = require("../../src/model/team");
const { getTeam, addTeam } = require("../../src/service/TeamService");

describe("Testing Team Service:", () => {
    test("Add Team - Testing correct request: ", async () => {
        let request = {
            body: {
                name: "Team 1",
                description: "This is a team",
                projectId: 23,
                userId: 15,
            },
        };
        let response = {
            status: {},
        };

        Team.create = jest
            .fn()
            .mockResolvedValue(
                JSON.parse(
                    "{\n" +
                        '    "id": 9,\n' +
                        '    "name": "Team 1",\n' +
                        '    "description": "This is a team",\n' +
                        '    "projectId": 23,\n' +
                        '    "userId": 15,\n' +
                        '    "updatedAt": "2023-11-17T13:55:08.976Z",\n' +
                        '    "createdAt": "2023-11-17T13:55:08.976Z"\n' +
                        "}"
                )
            );

        const returnedTeam = await addTeam(request, response);

        expect(returnedTeam).not.toBeNull();
        expect(returnedTeam.name).toEqual(request.body.name);
        expect(returnedTeam.description).toEqual(request.body.description);
        expect(returnedTeam.projectId).toEqual(request.body.projectId);
        expect(returnedTeam.userId).toEqual(request.body.userId);
    });

    test("Add Team - Testing incorrect request: ", async () => {
        let request = {
            body: {
                name: "Team 1",
                description: "This is a team",
                projectId: 23,
                userId: 15,
            },
        };
        let response = {
            status: {},
        };

        Team.create = jest.fn().mockRejectedValue("Error");

        const returnedTeam = await addTeam(request, response);

        expect(returnedTeam).toBeNull();
    });

    test("Get Team - Testing correct request: ", async () => {
        let request = {
            params: {
                id: 9,
            },
        };
        let response = {
            status: {},
        };

        Team.findByPk = jest
            .fn()
            .mockResolvedValue(
                JSON.parse(
                    "{\n" +
                        '    "id": 9,\n' +
                        '    "name": "Team 1",\n' +
                        '    "description": "This is a team",\n' +
                        '    "projectId": 23,\n' +
                        '    "userId": 15,\n' +
                        '    "updatedAt": "2023-11-17T13:55:08.976Z",\n' +
                        '    "createdAt": "2023-11-17T13:55:08.976Z"\n' +
                        "}"
                )
            );

        const returnedTeam = await getTeam(request, response);

        expect(returnedTeam).not.toBeNull();
        expect(returnedTeam.id).toEqual(request.params.id);
    });

    test("Get Team - Testing incorrect request: ", async () => {
        let request = {
            params: {
                id: 9,
            },
        };
        let response = {
            status: {},
        };

        Team.findByPk = jest.fn().mockRejectedValue("Error");

        const returnedTeam = await getTeam(request, response);

        expect(returnedTeam).toBeNull();
    });
});
