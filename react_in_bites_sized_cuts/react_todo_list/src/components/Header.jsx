import './Header.css'
import { memo } from 'react';

const Header = () => {
    return (
        <div className="Header">
            <h3>오늘은 📆</h3>
            <h1>{new Date().toDateString()}</h1>
        </div>
    )
}

/*
* memo(컴포넌트)로 export하면, 해당 컴포넌트의 props가 변경되지 않을 경우에는
* 리렌더링을 하지 않음
* */
export default memo(Header);