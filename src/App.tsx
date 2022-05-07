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

  const removeTodoHandler = (todoId: string) => {
    setTodos((prevTodos) => {
      return prevTodos.filter((todo) => todo.id !== todoId);
    });
  };

  return (
    <React.Fragment>
      <NewTodo onAddTodo={addTodoHandler} />
      <Todos onRemoveTodo={removeTodoHandler} items={todos} />
    </React.Fragment>
  );
}

export default App;
