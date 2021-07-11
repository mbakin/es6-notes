// Functions

// functions declaration
//function square(num){
  //  return (num*num)
//}
//console.log(square(4))

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-

// function declaration hoisting will be work
//console.log($quare(3))
//function $quare(num){
//return (num*num)}

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-

// Function Expression


// const $name = function (num) {
//     return (num*num)
// }
// console.log($name(2))
// //
//
// // First-Class Functions
//
// const myArr = [5, "Arin" , function (){
//     console.log("Hello myArr[2]")}]
//
// myArr[2]();
//
// const myObj = {
//     age: 5,
//     name: "Mehmet",
//     func: function (){
//         console.log("Obj Element")}
// }
//
// myObj.func()
// console.log(myObj.name)

// console.log(20 + (function (){return 10})()) // IIFE

// IIFE : Immediately Invocable Function Expression => olusturuldugu anda kullanilir tek seferlik

// const sum = function () {
//     console.log(5+4)
// }();
//
// // console.log(sum);
// // sum()
//
// (function (){     console.log(7+1)})();