import './TodoItem.css'

const TodoItem = ({id, isDone, content, date}) => {
    const onChangeCheckbox = () => {

    }

    return (
    <div className="TodoItem" id={id}>
        <input readOnly onChange={onChangeCheckbox} checked={isDone} type="checkbox"/>
        <div className="content">{content}</div>
        <div className="date">{new Date(date).toLocaleDateString()}</div>
        <button>삭제</button>
    </div>
    )
}

export default TodoItem;