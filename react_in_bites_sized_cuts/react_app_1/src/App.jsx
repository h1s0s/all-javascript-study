import './App.css'
import Bulb from './components/Bulb.jsx'
import Counter from './components/Counter.jsx'

/*
  리렌더링이 일어나는 기준
  1. state가 변경될 때
  2. props가 변경될 때
  3. 부모가 변경될 때
  Bulb가 변경되었을 때도 bulb가 리 렌더링이 되지만
  count가 변경되어도 리렌더링이 된다!
  이유는, 부모 App()이 변경되었기 때문이다.
  그래서 App안에 state를 관리하기 보다는
  하나의 컴포넌트를 따로 뺴주는게 좋다
 */ 



function App() {
  // console.log(state); //상태
  // console.log(setState); //상태값을 변환하는 함수, 이걸 사용해 상태값을 변경해야지만 리렌더링이 됨

  return (
    <>
      <Bulb/>
      <Counter />
    </>
  );
}

export default App
