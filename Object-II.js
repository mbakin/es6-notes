// Object Part II

// 1 - Shorthand Properties

// let name = "mehmet" , age = 6;
// const myObj = {
//     name,
//     age
// }
// console.log(myObj.name)
// console.log(myObj.age)


// 2 - Computed Property Names
//
// let prop1 = 'name';
// let myObj = {}
//
// myObj[prop1] = 'mehmet'
//
// console.log(myObj)
//
// let prop1 = 'name'
//
// let myObj = {
//     [prop1] : 'Mehmet Berk'
// }
// console.log(myObj)


// 3 - Short Method Syntax

// const person = {
//     name: "Mehmet",
//     surname: "Akin",
//     age : 24,
//     fullName() {
//         return this.name + " " + this.surname;
//     }
// }
// console.log(person)

// 4 - Object Destructing

// const person = {
//     name: "Mehmet",
//     surname: "Akin",
//     age : 24,
//     fullName() {
//         return this.name + " " + this.surname;
//     }
// }
// let myVar1 = person.name;
// console.log(myVar1);
//
// let myVar2 = person.age;
// console.log(myVar2)

// let { name, age } = person;
// console.log(name);
// console.log(age)



// 5 - Spread Operators in Object Literals (...)

// const person = {
//     name: "Mehmet",
//     surname: "Akin",
//     age : 24,
//     fullName() {
//         return this.name + " " + this.surname;
//     }
// }
//  let person2 = {...person}
// console.log(person2)

// const myObj1 = {
//     name: 'berk',
//     age: 7
// }
// const myObj2 = {
//     job: 'student',
//     gender: 'male'
// }
// const berk = {...myObj1, ...myObj2}
// console.log(berk)


// 6 - REST Operator in Object Literals
//
// const person = {
//     name: "Mehmet",
//     surname: "Akin",
//     age : 24,
//     fullName() {
//         return this.name + " " + this.surname;
//     }
// }

// const {name, surname, age} = person
// console.log(name);

// const {name, ...rest} = person;
// console.log(name);
// console.log(rest)

// 7 - Object Values - Object Entries


const person = {
    name: "Mehmet",
    surname: "Akin",
    age : 24,
    fullName() {
        return this.name + " " + this.surname;
    }
}

console.log(Object.keys(person))
console.log(Object.values(person))
console.log(Object.entries(person))