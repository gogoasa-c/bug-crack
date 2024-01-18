const bcrypt = require("bcrypt");
const User = require("../model/user.js");
const {
    STATUS_CREATED,
    STATUS_INTERNAL_SERVER_ERROR,
} = require("../constant/constant.js");

module.exports = {
    addUser: async (req, res) => {
        let returnedUser = null;
        const body = req.body;

        if (body.email === undefined || body.password === undefined) {
            console.error(
                `[${new Date().toISOString()}]: Error whilst processing request: Missing parameters`
            );
            return returnedUser;
        }

        if (body.password.length < 13) {
            console.error(
                `[${new Date().toISOString()}]: Error whilst processing request: Password < 13 chars`
            );
            return returnedUser;
        }

        if (!/[A-Z]/.test(body.password)) {
            console.error(
                `[${new Date().toISOString()}]: Error whilst processing request: Password missing uppercase char`
            );
            return returnedUser;
        }

        if (!/[a-z]/.test(body.password)) {
            console.error(
                `[${new Date().toISOString()}]: Error whilst processing request: Password missing lowercase char`
            );
            return returnedUser;
        }

        if (!/[0-9]/.test(body.password)) {
            console.error(
                `[${new Date().toISOString()}]: Error whilst processing request: Password missing number`
            );
            return returnedUser;
        }

        if (!/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(body.password)) {
            console.error(
                `[${new Date().toISOString()}]: Error whilst processing request: Password missing special char`
            );
            return returnedUser;
        }

        const { email, password } = body;

        let salt = await bcrypt.genSalt(10);
        let cryptedPassword = await bcrypt.hash(password, salt);

        await User.create({
            email: email,
            password: cryptedPassword,
        })
            .then((user) => {
                returnedUser = user;
            })
            .catch((error) => {
                console.error(
                    `[${new Date().toISOString()}]: Error whilst processing request: ${error}`
                );
            });

        return returnedUser;
    },

    login: async (req, res) => {
        const body = req.body;
        const user = await User.findOne({ where: { id: body.id } });
        if (user && (await bcrypt.compare(body.password, user.password))) {
            return true;
        } else {
            return false;
        }
    },
};
