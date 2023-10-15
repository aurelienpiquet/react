export class UserModel {

    constructor(username = '', age = 0, id = '') {
        this.username = username;
        this.age = age;
        this.id = id;
    }

    getIsValid = () => {
        return this.username !== '' && +this.age > 0;
    }
}