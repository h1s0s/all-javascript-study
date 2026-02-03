import { useState } from 'react';

function useInput() {//use라는 접두사를 쓰면 Hook으로 인식함
    const [input, setInput] = useState("");

    const onChange = (e) => {
        setInput(e.target.value);
    };

    return [input, onChange];
}

export default useInput;