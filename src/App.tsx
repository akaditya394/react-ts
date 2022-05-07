import React, { useState } from "react";
import Todos from "./components/Todos";
import Todo from "./models/todos";
import NewTodo from "./components/NewTodo";

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const addTodoHandler = (todoText: string) => {
    const newTodo = new Todo(todoText);

    setTodos((prevTodos) => {
      return prevTodos.concat(newTodo);
    });
  };
  return (
    <React.Fragment>
      <Todos items={todos} />
      <NewTodo onAddTodo={addTodoHandler} />
    </React.Fragment>
  );
}

export default App;
