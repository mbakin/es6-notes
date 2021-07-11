// This Object

// obj.func() --> this obj
// this --> global object --> window (global)

// console.log(this)
// console.log(this.location)
// console.log(this.location.href)
// console.log(window.location.href)

// Function Declaration
// function  func1() {
//     console.log(this)
// }
//
// //Function Expression
// const func2 = function () {
//     console.log(this)
// }
// func1();
// func2();
// // ikisi de ayni this referansina window'a sahip olur ornekte

//
//
// function func1 (){
//     this.name = "Mehmet";
//     console.log(this.name)
//     console.log(this.age);
// }
//
// const func2 = function () {
//     this.age = 23
//     console.log(this.age)
// }
// func1();
// func2();

// Obj' bagli durum

// function Person(name, surname, age){
//     const obj = {}
//     obj.name = name;
//     //console.log(obj);
//     obj.surname = surname;
//     obj.age = age;
//     obj.fullName= function (){
//         return obj.name + " " + obj.surname
//     }
//     return obj
// }

// function Person(name, surname, age){
//     this.name = name;
//     this.surname = surname;
//     this.age = age;
//     this.fullName= function (){
//         return obj.name + " " + obj.surname
//     }
// }

// class Person{
//     constructor(name, surname, age) {
//         this.name = name;
//         this.surname = surname;
//         this.age = age;
//     }
//     fullName= function (){
//         return this.name + " " + this.surname
//     }
// }
//
// const mehmet = new Person("Mehmet","Akin",24);
// const ayse = new Person("Ayse","Akin",51);
// console.log(mehmet);
// console.log(ayse);

//
// const foo = {
//     name: "Mehmet",
//     surname: "akin",
//     age: 24,
//     fullName: function (){
//         console.log(this)
//        return this.name +" "+this.surname
//     },
//
//     mother : {
//         name: "Ayse",
//         surname: "Akin",
//         age: 51,
//         fullName: function () {
//             console.log(this);
//             return this.name + " " + this.surname
//         }
//     }
// }
// console.log(foo.fullName());
// console.log(foo.mother.fullName());