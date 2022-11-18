import { FileLogger, MssqlLogger } from './crossCuttingConcerns/logging/logger.js';
import { users } from './data/users.js'
import UserService from './services/userService.js';

let userList = users;


// 4 adet fonksiyon oluşturucaz

// getAll
// getById
// add
// delete => id parametresi ile yapılacak

// her fonksiyonu test ediniz.

let getAll = () => {
    return userList;
}
console.log(getAll());

let getById = (id) => {
    // filter
    // identifier 
    let userToFind = userList.find(user => user.id === id);
    return userToFind ?? null;
}
console.log(getById(500))

let add = (user) => {
    userList.push(user);
}

let add2 = (id, firstName, lastName, city, age, salary, type) => {
    userList.push({ id, firstName, lastName, city, age, salary, type })
}

add({ id: 101, firstName: "Halit", lastName: "Kalaycı", city: "Istanbul", age: 23, salary: 1, type: "employee" })
add2(1002, "İrem", "Balcı", "İzmir", 23, 1, "customer");

console.log(getAll())

function deleteById(id) {
    userList = userList.filter(user => user.id !== id);
}

function deleteByIdSplice(id) {
    let userToDelete = getById(id);
    let index = userList.indexOf(userToDelete);
    userList.splice(index, 1);
}

deleteById(1002);
console.log(getAll())

deleteByIdSplice(101);
deleteByIdSplice(5);
console.log(getAll())


// instance
// nesne ve obje
let logger = new FileLogger();
let logger1 = new MssqlLogger();

let loggers = [logger, logger1];
// polymorphism
let userService = new UserService(loggers);
userService.getAll();
// userService.add({ id: 1 })
