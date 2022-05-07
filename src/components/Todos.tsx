import React from "react";
import TodoItem from "./TodoItem";
import Todo from "../models/todos";
import styles from "./Todos.module.css";

const Todos: React.FC<{ items: Todo[]; onRemoveTodo: (id:string) => void }> = (
  props
) => {
  return (
    <ul className={styles.todos}>
      {props.items.map((item) => {
        return (
          <TodoItem
            key={item.id}
            text={item.text}
            onRemoveTodo={props.onRemoveTodo.bind(null, item.id)}
          />
        );
      })}
    </ul>
  );
};

export default Todos;
