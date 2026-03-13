import React from 'react';
import './App.css';
import Navbar from './Component/Navbar';
import Todos from './Component/Todos';
import Footer from './Component/Footer';
import AddTodo from './Component/AddTodo';

function App() {
  const [showAddTodo, setShowAddTodo] = React.useState(false);

  const [todos, setTodos] = React.useState([
    {
      id: 1,
      Title: 'Demo Title.',
      Description: 'Delete this default demo and add your tasks.',
    }
  ]);

  // Define your addTask function and todos state here
  const addTask = (title, desc) => {
    let newid;
    if (todos.length === 0) {
      newid = 1;
    }
    else {
      newid = todos[todos.length - 1].id + 1;
    }
    const newTask = {
      id: newid,
      Title: title,
      Description: desc,
    }
    setTodos([...todos, newTask]);
  }

  const onDelete = (todo) => {
    const updatedTodos = todos.filter((e) => e !== todo);
    setTodos(updatedTodos);
  };



  return (
    <div className="App">
      <Navbar title="My Todos List" search="true"  />

      {showAddTodo ? (
        <AddTodo addTask={addTask} setShowAddTodo={setShowAddTodo}/>
      ) : (
        <>
          <Todos todos={todos} setShowAddTodo={setShowAddTodo} onDelete={onDelete} />
        </>
      )}
      <Footer />
    </div>
  );
}

export default App;











