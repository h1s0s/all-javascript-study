import {useState, useRef} from 'react'
// 간단한 회원가입 폼
// 1. 이름
// 2. 생년월일
// 3. 국적
// 4. 자기소개

const Register = () => {
    const [input, setInput] = useState({
        name: "",
        birth: "",
        country: "",
        bio: ""
    });

    //Ref 레퍼런스의 약자로, 값이 변경되어도 컴포넌트 렌더링을 유발하지 않는 객체
    const countRef = useRef(0);
    const inputRef = useRef();

    /*

        ★
        여기서 Ref를 사용하지 않고 count라는 변수를 선언해서, onChange가 발생할때마다 ++를 해줘도 되지 않나? 라는
        생각을 할 수 있는데.
        => onChange가 일어나는 시점에, Register 컴포넌트는 리렌더링이 되어서 count 변수는 초기화가 되기 때문에 불가함
        
        useState나 useRef같은 리액트의 특수한 변수를 사용해야 컴포넌트가 리렌더링이 된다고 해도 리셋이 되지 않음

        그렇다면 컴포넌트 바깥에 count 변수를 선언하면 되지 않느냐?
        이렇게 코드를 작성하면 실제로 count는 리셋되지 않고 의도한대로 작동하는 것처럼 보임
        하지만 컴포넌트를 두개 이상을 사용하게 될 경우 문제가 된다
        => 여러개의 컴포넌트가 하나의 변수를 공유하기 때문
            => 이런 현상이 발생하는 이유는?
                => App.jsx에서 Register 컴포넌트를 2번 선언하는 것은, Register 함수를 두번 호출하는 것
                    => count라는 공통된 변수를 Register 함수가 사용하는 것
                        => 결론 : 리액트 컴포넌트에서 변수는 내부, 외부에 선언하지 않고 useState, useRef를 사용해야 한다. WOW ※ 리액트를 다루기 위한 중요한 개념 !

     */

    const onChange = (e) => {
        countRef.current++;
        console.group(countRef.current);
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
    }

    const onSubmit = () => {
        if(input.name === ""){
            // 이름을 입력하는 DOM 요소 포커스
            inputRef.current.focus(); //dom요소가 들어가 있음
        }
        // if(input.birth === ""){

        // }
        // if(input.country === ""){

        // }
        // if(input.bio === ""){

        // }
    }

    return (
        <div>
            <button onClick={() => {
            }}>
                ref + 1
            </button>

            <div>
                <input 
                    ref={inputRef}
                    name="name"
                    value={input.name} 
                    onChange={onChange} 
                    placeholder={"이름"}
                />
            </div>
            <div>
                <input
                    name="birth"
                    value={input.birth}
                    type="date"
                    onChange={onChange}
                />
            </div>
            <div>
                <select name="country" value={input.country} onChange={onChange}> 
                    <option></option>
                    <option>한국</option>
                    <option>미국</option>
                    <option>영국</option>
                </select>
            </div>
            <div>
                <textarea name="bio" value={input.bio} onChange={onChange}></textarea>
            </div>
            <button onClick={onSubmit}>제출</button>
        </div>
    )
}

export default Register;