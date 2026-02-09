import './App.css'
import WordInput from "./components/WordInput.jsx";
import WordList from "./components/WordList.jsx";
import { useState } from "react";

const mockWords = [
    {
        id: 0
        , isDone: false
        , hieroglyph: "明日"
        , yomigana: "あした"
        , meaning: "내일"
    },
    {
        id: 1
        , isDone: false
        , hieroglyph: "明日"
        , yomigana: "あした"
        , meaning: "내일"
    }
]

function App() {
    const [filter, setFilter] = useState("0");
    const [words, setWords] = useState(mockWords);

    return (
        <div className="App">
            <WordInput filter={filter} setFilter={setFilter}/>
            <WordList words={words} setWords={setWords}/>
        </div>
    )
}

export default App
