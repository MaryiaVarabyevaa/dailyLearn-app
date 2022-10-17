import {makeAutoObservable} from "mobx";

export default class UserStore {
    constructor() {
        this.isAuth = false;
        this._user = {};
        makeAutoObservable(this);
    }
    setUser(user) {
        this._user = user; 
    }
    setIsAuth(bool) {
        this._isAuth = bool;
    }
    get isAuth() {
        return this._isAuth;
    }
    set isAuth(bool) {
        this._isAuth = bool;
    }
    get user() {
        return this._user;
    }
    set user(user) {
        this._user = user; 
    }
}