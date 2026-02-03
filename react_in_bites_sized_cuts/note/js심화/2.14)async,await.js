/**
 * async
 * 함수 앞에 붙이는 키워드로
 * 함수를 비동기로 만들어 줌
 * 함수를 프로미스를 반환하도록 만들어 줌
 */

async function getData() {
    return {
        name : "이정환"
        , id : "winterlood"
    }
}

console.log(getData()) ; //프로미스 객체가 반환됨


/**
 * await
 * async 내부에서만 사용 가능한 키워드
 * 비동기 함수가 다 처리되기를 기다리는 역할
 */

async function printData() {
    const data = await getData(); //then 이런거 안써도, 결과값 반환을 기다려줌. 얘가 있으면 동기적 처리
    
}