import { users } from "./users.js"

export class UserService {


    constructor(type) {
        this.type = type;
        this.userList = users;
    }

    add(user) {
        console.log(this.type)
    }

    getAll() {
        return this.userList;
    }

    getById(id) {

    }

    delete(id) {

    }

}