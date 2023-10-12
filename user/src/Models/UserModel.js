export class UserModel {

    constructor(username = '', age = 0, id = '') {
        this.username = username;
        this.age = age;
        this.id = id;
    }

    getIsValid = () => {
        return this.username !== '' && Number(this.age) > 0;
    }
}