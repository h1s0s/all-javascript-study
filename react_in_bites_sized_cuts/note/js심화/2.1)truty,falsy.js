/**
 * truthy & falsy란 ?
 * 참이나 거짓을 의미하지 않는 값도, 조건문 내에서 참이나 거짓으로 평가하는 특징
 * 
 * 이를 이용하면 조건문을 더 강력하게 만들 수 있음
 */

if (123) {//true
    console.log("123 is true");
} else {
    console.log("123 is false");
}

if (undefined) {//false
    console.log("undefined is true");
} else {
    console.log("undefined is false");
}

//falsy한 값
let f1 = undefined;
let f2 = null;
let f3 = 0;
let f4 = -0
let f5 = NaN;
let f6 = "";
let f7 = 0n;//빅인트

//truthy
let t1 = "hello";
let t2 = 123;
let t3 = [];
let t4 = {};
let t5 = () => {};

// 활용사례
function printName(person){
    if(!person) return;
    consolelog(person.name);
}

let person = {name : "이정환"};
printName(person);