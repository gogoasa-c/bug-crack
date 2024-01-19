import {action, makeObservable, observable} from "mobx";

class UserStore {
    userId = -1

    constructor() {
        makeObservable(this, {
            userId: observable,
            setUserId: action
        })
    }

    setUserId(userId) {
        this.userId = userId;
    }
}

export const userStore = new UserStore();