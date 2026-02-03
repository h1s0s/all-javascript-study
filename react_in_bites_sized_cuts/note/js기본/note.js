// 1. null 병합 연산자

let var1;
let var2 = 10;
let var3 = 20;

let var4 = var1 ?? var2;

let userName = "스미스";
let userNickName = "winter"

let displayName = userName ?? userNickName;

/*
* 콜백함수
* 자신이 아닌 다른 함수에, 인수로써 전달된 함수를 의미함.
*/


function main(value){
    value();
}

function sub() {
    console.log("sub");
}

main(sub); // sub
main(function sub() {
    console.log("sub");
});
main(function () {
    console.log("sub");
});
main(() => {
    console.log("sub");
});
//여기서 sub가 콜백함수, 인수로 전달된 함수

//콜백함수 응용
function repeat(count){
    for(let idx = 1; idx <= count; idx++){
        console.log(idx);
    }
}
function repeatDouble(count){
    for(let idx = 1; idx <= count; idx++){
        console.log(idx * 2);
    }
}
repeat(5);
repeatDouble(5);

// =>

    
function 개선된repeat(count, callback){
    for(let idx = 1; idx <= count; idx++){
        callback(idx);
    }
}

개선된repeat(5, (idx){
    console.log(idx);
})

개선된repeatDouble(5, (idx) =>{
    console.log(idx * 2);
})