
export default class User {
    constructor() {
        this.userName;
        this.userAge;

    }

    getUserName = () => { return this.userName }

    setUserName = (name) => { this.userName = name}

    getUserAge = () => { return this.userAge }

    setUserAge = (age) => { this.userAge = age}

}