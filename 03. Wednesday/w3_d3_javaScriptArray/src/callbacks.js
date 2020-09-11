/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var names = ["Lars", "Jan", "Peter", "Bo", "Frederik"];

//Callbacks 1
var namesLengthLessOrEqualThanThree = names.filter(name => name.length <= 3);

function printElements(item, index) {
    console.log(index + ": " + item);
};

console.log('** 1 **');
names.forEach(printElements);
console.log("");
namesLengthLessOrEqualThanThree.forEach(printElements);
console.log("\n");

//Callbacks 2
console.log('** 2 **');
var allNamesUpperCase = names.map(arr => arr.toUpperCase());
allNamesUpperCase.forEach(printElements);
console.log("\n");

//Callbacks 3
console.log('** 3 **');
var namesToHtmlList = "<ul>" + names.map(function (name) {
	return "<li>" + name + "</li>";
}).join("") + "</ul>";
console.log(namesToHtmlList);
console.log("\n");

//Calbacks 4
var cars = [
  { id: 1, year: 1997, make: 'Ford', model: 'E350', price: 3000 },
  { id: 2, year: 1999, make: 'Chevy', model: 'Venture', price: 4900 },
  { id: 3, year: 2000, make: 'Chevy', model: 'Venture', price: 5000 },
  { id: 4, year: 1996, make: 'Jeep', model: 'Grand Cherokee', price: 4799 },
  { id: 5, year: 2005, make: 'Volvo', model: 'V70', price: 44799 }
];
console.log("** 4 **");
console.log(cars);
var newerCar =  cars.filter(function(car) {
    return car.year > 1999;
});

console.log();
console.log("Cars newer than 1999");
console.log(newerCar);

var volvoCars =  cars.filter(function(car) {
    return car.make === 'Volvo';
});

console.log();
console.log("All Volvo’s");
console.log(volvoCars);

var carsBelow =  cars.filter(function(car) {
    return car.price < 5000;
});

console.log();
console.log("All cars with a price below 5000");
console.log(carsBelow);