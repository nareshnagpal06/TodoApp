import React from 'react'

// every component has to return
const Task = (props) => {
    const { title, details } = props;
    return (
        <div className="todo">
            <h2>{title}</h2>
            {/* <p>{details}</p> */}
            <button className="deleteBtn" onClick={props.deleteTodo} >Delete</button>
        </div>
    )
}
export default Task;