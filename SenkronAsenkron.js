// Js Single Thread
// Js Synchronous

// const func1 = () => {
//     console.log("Func1 console log 1")
//     console.log("Func1 console log 2")
//
//     alert("Alert Message")
// }
// const func2 = () => {
//     console.log("Func2 console log 2")
//     console.log("Func2 console log 1")
// }
// func1();
// func2();

// let x = 10;
// console.log("Birinci : " +x);
//
// setTimeout(()=>{
//     x = x+5;
// },1000)
//
// console.log("Ikinci : " +x);
//
// x = x+5;
// console.log("Ucuncu : " +x);
//

// Call Stack: fonksiyonlarin calisma sirasini gosterir

// function func1() {
//     console.log(" First Line")
//     func2();
//     console.log(" First Line")
// }
//
// function func2() {
//     console.log("Second Line");
//     func3()
//     console.log(" Second Line")
// }
// function func3() {
//     console.log("Third Line")
// }
// func1();

// function sum(x,y) {
//     return x+y;
// }
//
// function ave(x,y) {
//     return sum(x,y)/2;
// }
//
// let x = ave (6,8)
// console.log(x)

// function task(message) {
//     let n = 10000000000;
//     while( n > 0){
//         n--
//     }
//     console.log(message)
// }
//
// console.log("1")
// setTimeout(()=>{
//     console.log("2")
// },1000)
//
// console.log("3")
// console.log("4")
//
// task("Islem Tamamlandi");
//
// setTimeout(()=>{
//     console.log("5")
// },2000)


// const myName = () => {
//     console.log("My name is Berk")
// }
//
// setTimeout(myName, 3000);

// setTimeout(()=>{
//     console.log("My name is Mehmet Berk")
// },2000)

// Event Listener...

