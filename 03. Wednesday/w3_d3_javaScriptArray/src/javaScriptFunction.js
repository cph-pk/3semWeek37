/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

// Opg 1.
//Observe: no return type, no type on parameters
function add(n1, n2) {
    return n1 + n2;
}

//Function Expression
var sub = function (n1, n2) {
    return n1 - n2;
};

//Callback example
var cb = function (n1, n2, callback) {
    var a = null;
    if (typeof n1 !== "number") {
        console.log("Expected a function but got: " + n1);
    }
    if (typeof n2 !== "number") {
        console.log("Expected a function but got: " + n2);
    }
    if (typeof callback !== "function") {
        console.log("Expected a function but got: " + callback);
    }
    if (callback === add) {
        a = "+";
    } else if (callback === sub) {
        a = "-";
    } else if (callback === mul) {
        a = "*";
    } else if (callback === div) {
        a = "/";
    }
    return "Result from the two numbers: " + n1 + "" + a + "" + n2 + "=" + callback(n1, n2);
};


// Opg 2.
// What will this print?
// 3
console.log('** 1 **');
console.log(add(1,2));

// What will it print and what does add represent?  
// [Function: add] add represent a function
console.log('** 2 **');
console.log(add );  

// What will it print 
// 3
console.log('** 3 **');
console.log(add(1,2,3));

// What will it print   F  
// NaN (Not a number)
console.log('** 4 **');
console.log(add(1));

// What will it print   
// Result from the two numbers: 3+3=6
console.log('** 5 **');
console.log(cb(3,3,add));  

// What will it print   
// Result from the two numbers: 4+3=1
console.log('** 6 **');
console.log(cb(4,3,sub));

// What will it print   
// return "Result from the two numbers: " + n1 + "+" + n2 + "=" + callback(n1, n2);    
// add()is a function not a referance
// console.log(cb(3,3,add())); 
console.log('** 7 **');
try {
    console.log(cb(3, 3, add()));
} catch (e) {
    if (e instanceof TypeError) {
        console.error(e.name + ': ' + e.message);
    }
}
// What will it print   
// TypeError: callback is not a function
console.log('** 8 **');
console.log(cb(3,"hh",add));

var mul = function (n1, n2) {
    return n1 * n2;
};

var cb2 = function (n1, n2, callback) {
    if (typeof n1 !== "number") {
        console.log("Expected a function but got: " + n1);
    }
    if (typeof n2 !== "number") {
        console.log("Expected a function but got: " + n2);
    }
    if (typeof callback !== "function") {
        console.log("Expected a function but got: " + callback);
    }
    return "Result from the two numbers: " + n1 + " + " + n2 + " + (" + n1 + " * " + n2 + ") = " + (n1 + n2 + callback(n1, n2));
};

console.log("** 8.4 **");
console.log(cb2(2, 2, mul));

var div = function (n1, n2) {
    return n1 / n2;
};

console.log("## 8.5 ##");
console.log(cb(8, 2, div));
