/**
 * Promise
 * 
 * 비동기 작업을 효율적으로 처리할 수 있도록 도와주는 자바스크립트의 내장 객체
 * 
 * Promise는 비동기작업(ex. setTimeout)을 랩핑하는 객체.
 * 역할 : 비동기 작업 실행, 비동기 작업 상태관리, 비동기작업 결과저장
 * 비동기 작업 병렬실행, 비동기작업 다시실행 등등 와우
 * 
 * 
 * 프로미스의 3가지 상태
 * 대기 (Pending) : 아직 작업이 완료되지 않은 상태, 진행중인
 * 성공 (Fulfilled) : 비동기 작업이 성공적으로 마무리 된 상태
 * 실패 (Rejected) : 비동기 작업이 실패한 상태
 * 
 * 대기 -> 성공 : 해결 Resolve
 * 대기 -> 거부 : 거절 reject
 * 
 * 유튜브를 예로 들어보면,
 * 유튜브 영상 로딩중 -> Pending
 * 영상 로딩 완료 -> resolve
 * 시청 가능해진 상태 -> Fulfilled
 * 영상 로딩 실패 -> reject
 * 시청 불가능한 상태 -> Rejected
 * 
 * Promise = {
 *  "[[ProtoType]]" : "Promise"
 *  , [[PromiseState]] : "상태"
 *  , "[[PromiseResult]]" : resolve(""), reject("") <- 이 값이 들어감.
 * }
 */

const promise = new Promise(() => {
    //비동기 작업
    setTimeout(()=> {
        console.log("안녕?");
        //reject("실패");//이걸 선언하면 프로미스 객체 상태가 실패로.
    }, 2000)
});


const promise2 = new Promise(() => {
    const num = 10;

    if (typeof num === "number"){
        resolve(num + 10) ;
    } else {
        reject("num이 숫자가 아닙니다.");
    }
}, 2000);

//프로미스 체이닝
promise2
    .then((value) => {//해당 프로미스가 resolve면? then이 실행됨
        console.log(value)
    })
    .catch((error) => {//해당 프로미스가 reject면 ? catch가 실행됨
        console.log(err)
    });