import './App.css'
import Viewer from './components/Viewer'
import Controller from './components/Controller'
import { useState, useEffect } from 'react';

function App() {
  const [count, setCount] = useState(0);
  const [input, setInput] = useState("");
  
  useEffect(()=>{ //두번째 배열에 들어가있는 인수가 변경되면? 첫번째 인수의 콜백함수가 호출됨
    console.log(`count: ${count} / input: ${input}`)
  }, [count, input]);//의존성 배열, dependency array, deps

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
      </section>
      <section>
        <Controller onClickButton={onClickButton}/>
      </section>
    </div>
  )
}

export default App
