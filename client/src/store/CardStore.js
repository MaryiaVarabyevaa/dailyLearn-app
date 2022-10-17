import {makeAutoObservable} from "mobx";

export default class UserStore {
    constructor() {
        this._words = [];
        makeAutoObservable(this);
    }
    get words() {
        return this._words;
    }
    setWords(words) {
        this._words = words;
    }
}