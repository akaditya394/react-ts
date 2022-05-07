import React from "react";
import TodoItem from "./TodoItem";
import Todo from "../models/todos";
import styles from "./Todos.module.css"

const Todos: React.FC<{ items: Todo[] }> = (props) => {
  return (
    <ul className={styles.todos}>
      {props.items.map((item) => {
        return <TodoItem key={item.id} text={item.text} />;
      })}
    </ul>
  );
};

export default Todos;
