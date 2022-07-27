import React, { useState } from "react";
import "./ToDo.css"
import TodoListComp from "./ToDoListComp";


const ToDoList = () =>{
    const [InputList,SetInputList]=useState()
    const [Items,SetItems]=useState([]);

    const InputToDoList = (event) =>{
        SetInputList(event.target.value);
    };

    const ClickItems = () =>{
        SetItems((OldItems)=>{
            return [...OldItems,InputList]
        });
        SetInputList("")
    };
    const DeleteItems = (id) =>{
        console.log("delete");

        SetItems((OldItems)=>{
            return OldItems.filter((Eliment,index)=>{
                return index !== id;
            })
        })
    }

    return(
        <>
        <div className="MainDiv">
            <h1>ToDoList</h1>
            <div className="CenterDiv">
            <input type={"text"} placeholder="enter student name" value={InputList} onChange={InputToDoList}/>  
            <button className="Btn-Add" onClick={ClickItems}>Add</button>  

            <ol>
                {/* <li>{InputList}</li> */}
                {Items.map((itemVal,index)=>{
             return <TodoListComp key={index} text={itemVal} id={index}
             OnDelete={DeleteItems}/>
                })}
            </ol>
            
            </div>
        </div>
        
        </>
    )
};
export default ToDoList;