/*
동기와 비동기

자바스크립트는 기본적으로 동기방식
자바스크립트 엔진에는 쓰레드가 1개밖에 없음(싱글스레드)

비동기 방식으로 진행되는 Task의 결과값을 사용하려면
callback함수를 붙여서 처리하면 가능하다.
*/

//1. setTimeout(); 
// 코드를 특정 시간 이후에 비동기적으로
// 실행하도록 하는 함수
console.log(1);

setTimeout(() => {
    console.log(2);
}, 3000);
// setTimeout으로 3초의 타이머 후
// 콜백함수가 실행되는 것

console.log(3);

/*
* 자바스크립트는 싱글 스레드인데 어떻게 동시에 작업을 처리하지?
* 비동기 작업들은 자바스크립트 엔진이 아닌 Web APIs 에서 실행됨 
*
* WebBrowser 안에는, javaScript엔진과 Web APIs가 탑재되어 있음
* javaScript엔진에서 비동기 코드를 만나면 WebAPIs에게 위탁을함
* 콜백함수까지 위탁
*
*/


//예시
function add(a, b, callback) {
    setTimeout(() => {
        const sum = a + b;
        callback(sum);
    }, 3000)
}

add(1, 2, (value) => {console.log(value)});

function orderFood(callback) {
    setTimeout(() => {
        const food = "떡볶이";
        callback(food);
    }, 3000);
}

function cooldownFood(food, callback){
    setTimeout(() => {
        const cooldownedFood = `식은 ${food}`;
        callback(cooldownedFood);
    }, 2000)
}

function freezeFood(food, callback){
    setTimeout(() => {
        const freezedFood = `냉동된 ${food}`;
        callback(freezedFood)
    }, 1500);
}

orderFood((food) => {
    console.log(food);

    cooldownFood(food, (cooldownedFood) => {
        console.log(cooldownedFood);

        freezeFood(cooldownedFood, (freezeFood) => {
            console.log(freezedFood)
        })
    })
})

//콜백함수를 남발하다보니 인덴트(들여쓰기)가 지나쳐짐
//콜백지옥


