const { describe, test, expect } = require("@jest/globals");
const User = require("../../src/model/user.js");
const { STATUS_CREATED } = require("../../src/constant/constant.js");
const bcrypt = require("bcrypt");

const addUser = require("../../src/service/UserService.js").addUser;

describe("Testing User Service:", () => {
    test("Add User - Testing correct request: ", async () => {
        let request = {
            body: {
                "email": "valentin_ghita@gmail.com",
                "password": "anaAreMere10@!"
            }
        };
        let response = {
            status: {}
        };

        User.create = jest.fn().mockResolvedValue(JSON.parse("{\n" +
            "    \"id\": 1,\n" +
            "    \"email\": \"valentin_ghita@gmail.com\",\n" +
            `    \"password\": \"anaAreMere10@!\",\n` +
            "    \"updatedAt\": \"2021-11-17T13:55:08.976Z\",\n" +
            "    \"createdAt\": \"2021-11-17T13:55:08.976Z\"\n" +
            "}"));

        const returnedUser = await addUser(request, response);

        expect(returnedUser).not.toBeNull();
        expect(returnedUser.email).toEqual(request.body.email);
        expect(returnedUser.password).toEqual(request.body.password);
    })
    test("Add User - Testing incorrect request: ", async () => {
        let request = {
            body: {
                "email": "valentin@tahoo",
                "password": "anaaremere"
            }
        };
        let response = {
            status: {}
        };

        User.create = jest.fn().mockRejectedValue("Error");

        const returnedUser = await addUser(request, response);

        expect(returnedUser).toBeNull();
    })
})