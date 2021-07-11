// JS Classes

// constructor function

// function Person (name, surname, age){
//
//     this.name = name;
//     this.surname = surname;
//     this.age = age;
// }
// // fullName = function () {
// //     return this.name + " " + this.surname
// // }
//
// Person.prototype.fullName = function () {
//     return this.name + " " + this.surname
// }
//
// Person.prototype.friends = ["Ahmet","Mehmet"]; // her ikisinin arkadasiymis gibi gecer sisteme
//
// const berk = new Person("Berk", "Akin", 24);
// const ayse = new Person("Ayse ", "Akin", 51);
//
// console.log(berk);
// console.log(ayse);
// console.log(berk.fullName());
// // console.log(ayse.fullName())
//
// console.log(berk.friends)

// ===> Simdi classlar devreye girer

// function Person (name, surname, age){
//
//     this.name = name;
//     this.surname = surname;
//     this.age = age;
//     this.fullName = fullName;
// }
//
// class Person {
//     constructor(name, surname, age) {
//         this.name = name;
//         this.surname = surname;
//         this.age = age;
//         this.friends = ["AHMET", "Mehmet"]
//     }
//     fullName () {
//         return this.name + " " + this.surname
//     }
// }
//
// const berk = new Person("Berk", "Akin", 24)
// const ayse = new Person("Ayse", "Akin", 51)
//
// console.log(berk)
// console.log(ayse)
// console.log(berk.friends)
// console.log(ayse.friends)
//
// berk.friends.push("Cinar");
// console.log(berk.friends)
// console.log(ayse.friends)
//
// console.log(Person)
// console.log(typeof Person)