const Button = ({ children, text, color = "black", ...rest}) => {//기본적으로 props, 객체형태로 들어오나 기본값이 필요할 때 구조분해할당을 해야함.
    
    return (
    <button 
        onClick={()=>
            console.log(text)
        }
        onMouseEnter={(e)=> {
            console.log(e)
            console.log("마우스를갖다댐")
        }}
        style={{ color: color }} {...rest}>
        {text} - {color?.toUpperCase()}
        {children}
    </button>)
}

export default Button;