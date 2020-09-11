/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

// a
console.log('a');
var boys = ["Peter", "lars", "Ole"];
var girls = ["Janne", "hanne", "Sanne"];
// b
console.log('b');
var all = boys.concat(girls);
console.log(all);
// c
console.log('c');
console.log(all.join());
console.log(all.join('-'));
// d
console.log('d');
all.push('Lone', 'Gitte');
console.log(all);
// e
console.log('e');
all.unshift('Hans','Kurt');
console.log(all);
// f
console.log('f');
all.shift();
console.log(all);
// g
console.log('g');
all.pop();
console.log(all);
// h
console.log('h');
all.splice(3,2);
console.log(all);
// i
console.log('i');
all.reverse();
console.log(all);
// j
console.log('j');
all.sort();
console.log(all);
// k
console.log('k');
all.sort(function (a, b) {
    return a.toLowerCase().localeCompare(b.toLowerCase());
});
console.log(all);
// l
console.log('l');
all = all.map(function(e){ return e.toUpperCase(); });
console.log(all);
// m
console.log('m');
all = all.filter(e => e.startsWith("l") || e.startsWith("L"));
console.log(all);