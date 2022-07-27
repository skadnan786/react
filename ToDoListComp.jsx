import React from "react";

const TodoListComp = (props) =>{

    return(
    <>
        <div className="ToDoStyle">
            <button onClick={()=>{
                props.OnDelete(props.id)
            }} >Delete</button>
        <li>{props.text}</li>
        </div>
    </>
    )
};
export default TodoListComp;