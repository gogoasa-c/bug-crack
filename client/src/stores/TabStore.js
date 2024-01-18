import {action, makeObservable, observable} from "mobx";

class TabStore {
    tabList = [
        {
            label: "My projects",
            key: "projects",
        },
        {
            label: "Teams",
            key: "teams",
        },
        {
            label: "Bugs",
            key: "bugs",
        },
    ].map((item) => ({
        ...item,
        className: "navbar-element",
    }));

    currentlySelectedTab = "";

    constructor() {
        makeObservable(this, {
            tabList: observable,
            currentlySelectedTab: observable,
            setSelectedTab: action,
        })
    }

    setSelectedTab = (key) => {
        this.tabList = this.tabList.map((item) => {
            if (item.key === key) {
                return {
                    ...item,
                    className: "navbar-element navbar-element-selected",
                };
            }

            return {
                ...item,
                className: "navbar-element",
            };
        });
    }
}

export const tabStore = new TabStore();