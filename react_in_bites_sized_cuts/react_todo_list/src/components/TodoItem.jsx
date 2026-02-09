import './TodoItem.css'
import { memo, useContext } from 'react';
import TodoContainer, {TodoContext} from '../App';

const TodoItem = ({id, isDone, content, date}) => {
    const { onUpdate, onDelete } = useContext(TodoContext);
    const onChangeCheckbox = () => {
        onUpdate(id)
    }

    const onClickButton = () => {
        if(!confirm('정말 삭제할것인가요')) return false;
        onDelete(id)
    }

    return (
    <div className="TodoItem">
        <input onChange={onChangeCheckbox} checked={isDone} type="checkbox"/>
        <div className="content">{content}</div>
        <div className="date">{new Date(date).toLocaleDateString()}</div>
        <button onClick={onClickButton}>삭제</button>
    </div>
    )
}

//고차 컴포넌트(HOC)
// export default memo(TodoItem, (prevProps, nextProps) => {
//     //반환 값에 따라, Props가 바뀌었는지 안바뀌었는지 판단
//     // true -> 리렌더링 X
//     // false -> 리렌더링 O
//     if(prevProps.id !== nextProps.id) return false;
//     if(prevProps.isDone !== nextProps.isDone) return false;
//     if(prevProps.content !== nextProps.content) return false;
//     if(prevProps.date !== nextProps.date) return false;
//
//     return true;
// });

export default memo(TodoItem);
