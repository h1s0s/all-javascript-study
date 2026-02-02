import "./Main.css";

/**
 * jsx
 * javascript Extension
 * 자바스크립트 확장 문법
 * HTML + JS를 혼용하는 문법
 * 
 * 주의사항
 * 1. 중괄호 내부에는 자바스크립트 표현식만 넣을 수 있다
 * 2. 숫자, 문자열, 배열 값만 렌더링이 된다. if, for문 안됨
 * 3. 객체 자체를 넣으면 에러가 난다, 객체 필드만 넣을 수 있음
 * 4. 모든 태그는 닫혀있어야 한다
 * 5. 최상위 태그는 반드시 하나여야만 한다. 최상위 태그가 없다면 <></> 빈태그로 묶어주자
 */
const Main = () => {
    const user = {
        name: "이정환",
        isLogin: true
    }

    // return (
    //     <>
    //         {user.isLogin ? (<div>로그아웃</div>) : (<div>로그인</div>)}
    //     </>
    // )

    if(user.isLogin){
        // return <div style={{//jsx에서 style 속성을 넣는 방법 첫번째
        //     backgroundColor: "red",
        //     borderBottom: "5px solid blue"
        // }}>로그아웃</div>
        return <div className="logout">로그아웃</div>
    } else {
        return <div>로그인</div>
    }
}

export default Main;