import { users } from "./users";

console.log("Hello World");

// değişkenler
console.log(number);
// integer, tam sayı
var number = null;
console.log(number);

number = 50;
console.log(number);

// string => metinsel ifade
number = 'Merhaba';
console.log(number);

number = 50;
console.log(number);


//operators

console.log(number + 10);
console.log(number - 10);
console.log(number * 10);
console.log(number / 10);
// mod operatörü
console.log(number % 5);

// boolean, bool => True veya False

console.log(1 == 1);
console.log(1 != 1);
console.log(1 >= 1);
console.log(1 <= 1);

console.log("*****************")
// JS type-safe değil!!

// array      0        1        2
var number1 = 10;
var number2 = 10;

var cars = ["Volvo", "BMW", "Mercedes"]

var cars2 = cars;
cars2.push("Fiat");
console.log(cars);
console.log("***************")

// değer ve referans tip


console.log(cars);
console.log(cars[0]);

cars.push("Ford");
console.log(cars);

cars.unshift("Fiat");
console.log(cars);

cars.shift();
console.log(cars);

cars.pop();
console.log(cars);


var dolarDun = 17;
var dolarBugun = 17;

if (dolarBugun > dolarDun) {
    console.log("Dolar artışta..");
}
else if (dolarBugun == dolarDun) {
    console.log("Dolar sabit...")
}
else {
    console.log("Dolar düşüşte..")
}

// 0 = Sipariş alındı
// 1 = Sipariş hazırlanıyor
// 2 = Sipariş kargoya verildi
// 3 = Sipariş teslim edildi
// 4 = Sipariş iade edildi


var siparisDurumu = 10;

switch (siparisDurumu) {
    case 0:
        console.log("Sipariş alındı..");
        break;
    case 1:
        console.log("Sipariş hazırlanıyor..")
        break;
    case 2:
        console.log("Sipariş kargoya verildi");
        break;
    default:
        console.log("Yanlış bir sipariş durumu girildi..")
        break;
}

var cars = ["Volvo", "BMW", "Mercedes"]

for (var i = 0; i < cars.length; i++) {
    console.log((i + 1) + ". araba: " + cars[i])
}
// iteration, iterate

// in = index
// of = değer
for (let car of cars) {
    console.log("Car:" + car);
}


var number = 0;

while (number < 10) {
    console.log("while çalışıyor..")
    number++;
}


// forEach
cars.forEach((car) => {
    console.log("Foreachdan gelen car:" + car)
})

// map => yeni bir array return eder
// foreach => sadece iteration yapar
let newCars = cars.map((car) => {
    return "Maplenmiş " + car;
})

console.log(newCars);

let car = {
    brand: "BMW",
    model: "320",
    year: 2022,
    price: 2000
}

let carArray = [
    { brand: "BMW", model: "320", year: 2022, price: 2000 },
    { brand: "Mercedes", model: "A", year: 2021, price: 1000 },
    { brand: "Fiat", model: "B", year: 2020, price: 500 }
];
// spread operator
// her bir arabaya 100 birim ücret indirimi uygulanacak

let newCarArray = carArray.map(car => {
    return { brand: car.brand, model: car.model, year: car.year, price: car.price + 100 }
})
console.log("New Car Array: ", newCarArray);
console.log("Car Array: ", carArray);

// fiyatı 1500'den düşük arabaları getir
let filteredArray = carArray.filter((car) => {
    return car.price < 1500;
})

console.log(filteredArray)

// reduce
// tüm arabaların fiyatlarının toplamını bulmak istiyorum.

let totalPrice = 0;
carArray.forEach(car => {
    totalPrice += car.price;
})
console.log(totalPrice);


// accumulator
let totalPriceWithReduce = carArray.reduce((acc, car) => {
    return acc + car.price;
}, 0);
console.log(totalPriceWithReduce)


// fonksiyonlar
// NaN => not a number
function sumOfNumbers(a, b) {
    return a + b;
}

let sumOf = sumOfNumbers(6, 5)
console.log(sumOf)


let sum = () => {
    console.log("sum çağırıldı")
}
sum();



