import './App.css'
import Header from './components/Header.jsx'
import Main from './components/Main.jsx'
import Footer from './components/Footer.jsx'
import Button from './components/Button.jsx'

function App() {
  const buttonCommonProps = {
    a: 1,
    b: 2
  }

  return (
    <>
      <Header/>
      <Main/>
      <Footer/>
      <Button text={"메일"} color={"red"}/>
      <Button text={"카페"}/>
      <Button text={"블로그"} {...buttonCommonProps}>
        <div>자식요소</div>
      </Button>
    </>
  )
}

export default App
