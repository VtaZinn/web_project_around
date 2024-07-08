export default class UserInfo {
    constructor({nameSelector, workSelector}) {
        this._nameSelector = document.querySelector(nameSelector);
        this._workSelector = document.querySelector(workSelector);
    }

    getUserInfo(){
        return {
            name: this._nameSelector.innerText,
            work: this._workSelector.innerText
        }
    }

    setUserInfo(name, work) {
        this._nameSelector.innerText = name;
        this._workSelector.innerText = work;
    }
}