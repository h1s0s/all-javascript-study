import { useEffect } from "react"

const Even = () => {
    useEffect(() => {
        //클린 함수, 이 콜백함수는 끝날때 실행이 됨. 언마운트가 될때 실행이 됨
        //`useEffect`에서 반환된 함수를 클린업(cleanup) 함수라고 불러요. 
        // 주로 컴포넌트가 사라질 때(언마운트)나 effect가 다시 실행되기 전에 이전 effect가 남긴 것을 정리하는 데 쓰이죠.
        return () => {
            console.log("unmount")
        };
    }, []);
    return <div>짝수입니다</div>
}

export default Even