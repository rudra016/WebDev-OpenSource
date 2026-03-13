import React from 'react'
import { useState } from 'react';
import './style.css'

const TodoItem = ({todo , onDelete}) => {
    const [buttonText, setButtonText] = useState('Pending');
    const [buttnColor, setbuttnColor] = useState('btn btn-warning');

    
    const handleClick = () => {
        if(buttonText === 'Pending' && buttnColor === 'btn btn-warning'){
        setButtonText(`Done`);
        setbuttnColor('btn btn-success');
        }
        else{
            setButtonText('Pending')
            setbuttnColor('btn btn-warning')
        }
    }

    return (
        <div>
            <div className="card mx-3 my-3 card">
                <div className="card-body">
                    <p>{todo.id}</p>
                    <h5 className="card-title">{todo.Title}</h5>
                    <p className="card-text">{todo.Description}</p>
                    <button className={buttnColor} onClick={handleClick}>{buttonText}</button>
                    <button className='btn btn-danger' onClick={() => {onDelete(todo)}}>Delete</button>
                </div>
            </div>
        </div>
    )
}

export default TodoItem