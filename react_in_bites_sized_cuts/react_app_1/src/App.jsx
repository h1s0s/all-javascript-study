import './App.css'
import { useState } from 'react'

function App() {
  // const state = useState(); //[인수, f()]
  const [count, setCount] = useState(0);//구조분해 할당
  // console.log(state); //상태
  // console.log(setState); //상태값을 변환하는 함수, 이걸 사용해 상태값을 변경해야지만 리렌더링이 됨
  const [light, setLight] = useState("OFF");

  return (
    <>
    <div>
      <h1>{light}</h1>
      <button onClick={()=>{
        setLight(light == 'ON' ? 'OFF' : 'ON');
      }}>{light == "ON" ? "끄기" : "켜기"}</button>
    </div>
    <div>
      <h1>{count}</h1>
      <button onClick={()=>{
        setCount(count + 1);
      }}>
        +
      </button>
    </div>
    </>
  );
}

export default App
