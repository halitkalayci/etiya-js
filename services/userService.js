import { users } from "../data/users.js"

export default class UserService {

    //prototype
    // DI - Dependency Injection
    constructor(loggers) {
        this.loggers = loggers;
        this.userList = users;
    }

    add(user) {
        for (let logger of this.loggers) {
            logger.log("UserService.Add method")
        }
        console.log(this.type)
    }

    getAll() {
        for (let logger of this.loggers) {
            logger.log("UserService.Add method")
        }
        return this.userList;
    }

    getById(id) {

    }

    delete(id) {

    }

}

