//1.filter

let arr1 = [
    { name: "이정환", hobby: "테니스"},
    { name: "김효빈", hobby: "테니스"},
    { name: "홍길동", hobby: "독서"},
]

const tenisPeople = arr1.filter(
    item => item.hobby == "tenis"
)

//2. map
let arr2 = [1, 2, 3];
const mapResult1 = arr2.map((item, idx, arr) => {
    return item * 2;
});

let names = arr1.map((item) =>
    item.name
);

//3. sort
let arr3 = ["b", "a", "c"];

arr3.sort();

let arr4 = [10, 3, 5];

arr4.sort(); //X 사전순으로만 정렬하기 때문에 숫자는 원하는대로 정렬되지 않음

arr4.sort((a,b) => {
    if(a > b){
        return 1;
    } else if(a == b){
        return 0;
    } else if(a < b){
        return -1;
    }
})

//4. toSorted
//sort는 원본 배열을 정렬하는거고, toSorted는 새로운 배열을 반환

//5. join
//배열의 모든 요소를 문자열로 합침
let arr5 = ["hi", "im", "winterlood"];
const joined1 = arr5.join();
const joined2 = arr5.join(" ");