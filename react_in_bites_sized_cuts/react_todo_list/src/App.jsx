import './App.css'
import { useState, useRef, useReducer } from 'react'
import Header from './components/Header'
import Editor from './components/Editor'
import List from './components/List'

const mockData = [
  {
    id: 0,
    isDone: false,
    content: "React 공부하기",
    date: new Date().getTime()
  },
  {
    id: 1,
    isDone: false,
    content: "빨래하기",
    date: new Date().getTime()
  },
  {
    id: 2,
    isDone: false,
    content: "노래 연습하기",
    date: new Date().getTime()
  }
]

function reducer(state, action) {
  switch(action.type){
    case 'CREATE': 
      return [action.data, ...state];
    case 'UPDATE':
      return state.map((item) => item.id === action.targetId ? {...item, isDone: !item.isDone} : item)
    case 'DELETE':
      return state.filter((item) => item.id !== action.targetId);
    default:
      return state;
    }
}


function App() {
  const [todos, dispatch] = useReducer(reducer, mockData);
  let idRef = useRef(3);

  const onCreate = (content) => {
    dispatch({
      type : "CREATE",
      data : {
        id : idRef.current++,
        isDone: false,
        content: content,
        date: new Date().getTime()
      }
    })
  }

  const onUpdate = (targetId) => {
    dispatch({
      type: "UPDATE",
      targetId: targetId
    })
  }

  const onDelete = (targetId) => {    
    dispatch({
      type: "DELETE",
      targetId: targetId
    })
  }
  //React는 State 객체/배열의 '참조'가 변경될 때 리렌더링을 결정합니다. 
  //새 객체/배열을 만들면 참조가 달라져 React가 변경을 감지하고 UI를 업데이트합니다.
  //그래서 기존 State를 직접 수정하지 않고 새로운 State를 만들어서 사용한다.

  return (
    <div className='App'>
      {/* <Exam/> */}
        <Header/>
        <Editor onCreate={onCreate}/>
        <List todos={todos} onUpdate={onUpdate} onDelete={onDelete}/>
    </div>
  )
}

export default App
