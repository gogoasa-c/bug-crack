class UserStore {
    userList = [
        {
            id: 1,
            email: "valentin@gmail.com",
            password: "123456"
        },
        {
            id: 2,
            email: "cristi@gmail.com",
            password: "AceastaChiarEsteOParola1234"
        }
    ];

    setUserList = (userList) => {
        this.userList = userList;
    }
}

export const userStore = new UserStore();