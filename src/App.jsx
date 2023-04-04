import React, { useState } from 'react';
import { v1 as uuidv1 } from "uuid"
import Form from './components/Form';
import TodoList from './components/TodoList';

const App = () => {

  const [todos, setTodos] = useState([{
    id: uuidv1(),
    text: "Prvi todo",
    done: false
  },
  {
    id: uuidv1(),
    text: "Drugi todo",
    done: false
  }])

  return (
    <div>
      <Form setTodos={setTodos} />
      <h2>Todo List:</h2>
      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  );
};

export default App;