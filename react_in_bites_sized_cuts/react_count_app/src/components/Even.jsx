import { useEffect } from "react"

const Even = () => {
    useEffect(() => {
        //클린 함수, 이 콜백함수는 끝날때 실행이 됨. 언마운트가 될때 실행이 됨
        return () => {
            console.log("unmount")
        };
    }, []);
    return <div>짝수입니다</div>
}

export default Even