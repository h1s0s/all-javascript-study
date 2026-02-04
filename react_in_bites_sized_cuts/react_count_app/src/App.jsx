import './App.css'
import Viewer from './components/Viewer'
import Controller from './components/Controller'
import Even from './components/Even'
import { useState, useEffect, useRef } from 'react';

function App() {
  const [count, setCount] = useState(0);
  const [input, setInput] = useState("");

  const isMount = useRef(false);
  
  /*
  useEffect(()=>{ //두번째 배열에 들어가있는 인수가 변경되면? 첫번째 인수의 콜백함수가 호출됨
    console.log(`count: ${count} / input: ${input}`)
  }, [count, input]);//의존성 배열, dependency array, deps
  */

  //1. 마운트
  useEffect(()=>{
    console.log("mount")
  }, [])
  
  //2. 업데이트
  useEffect(()=>{
    if(!isMount.current){
      isMount.current = true;
      return;
    }
    console.log("update")
  })

  //3. 언마운트
  useEffect(()=>{

  })

  const onClickButton = (value) => {
      setCount(count + value);
  }

  return (
    <div className="App">
      <h1>Simple Counter</h1>
      <section>
        <input value={input} onChange={(e) => {
          setInput(e.target.value);
        }}/>
      </section>
      <section>
        <Viewer count={count}/>
        {count % 2 === 0 ? <Even/> : null}
      </section>
      <section>
        <Controller onClickButton={onClickButton}/>
      </section>
    </div>
  )
}

export default App
