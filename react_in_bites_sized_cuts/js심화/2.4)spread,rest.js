/**
 * 1. spread연산자
 */

let arr1 = [1, 2, 3];
let arr2 = [4, ...arr1, 5];

/**
 * 2. rest 매개변수
 */

function function1(...rest){
    console.log(...rest);
}