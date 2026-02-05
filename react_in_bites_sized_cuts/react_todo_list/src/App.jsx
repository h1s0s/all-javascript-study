import './App.css'
import { useState, useRef } from 'react'
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

function App() {
  const [todos, setTodos] = useState(mockData)
  let idRef = useRef(3);

  const onCreate = (content) => {
    const newTodo = {
      id : idRef.current++,
      isDone: false,
      content: content,
      date: new Date().getTime()
    }
    setTodos([newTodo, ...todos]);
  }

  const onUpdate = (targetId) => {
    setTodos(todos.map((todo) => todo.id === targetId ? {...todo, isDone: !todo.isDone} : todo))
  }

  const onDelete = (targetId) => {
    setTodos(todos.filter((todo) => todo.id !== targetId))
  }
  //React는 State 객체/배열의 '참조'가 변경될 때 리렌더링을 결정합니다. 
  //새 객체/배열을 만들면 참조가 달라져 React가 변경을 감지하고 UI를 업데이트합니다.
  //그래서 기존 State를 직접 수정하지 않고 새로운 State를 만들어서 사용한다.

  return (
    <div className='App'>
        <Header/>
        <Editor onCreate={onCreate}/>
        <List todos={todos} onUpdate={onUpdate} onDelete={onDelete}/>
    </div>
  )
}

export default App
