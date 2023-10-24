import React from 'react';
import TodoItem from '../Component/TodoItem';

const Todos = (props) => {
  return (
    <div className='container'>
      <h3 className='d-flex justify-content-center my-3'>My Today's Tasks</h3>
      <button className='btn btn-outline-success'
        onClick={() => props.setShowAddTodo(true)} // Set showAddTodo to true when the link is clicked
      >
        Add a Task
      </button>
      <div className='d-flex -flex-row flex-wrap mx-3 my-3 justify-content-center'>
        {props.todos.length === 0 ? <h4>No Task to Display</h4> :
          (props.todos.map((todo) => (
            <TodoItem key={todo.id} todo={todo} onDelete={props.onDelete} />
          )))
        }
      </div>
    </div>
  );
}

export default Todos;
