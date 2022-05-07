import React, { useRef } from "react";
import styles from "./NewTodo.module.css";

const NewTodo: React.FC<{ onAddTodo: (text: string) => void }> = (props) => {
  const formInputRef = useRef<HTMLInputElement>(null);
  const formSubmitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    const enteredText = formInputRef.current!.value;

    if (enteredText.trim().length === 0) {
      return;
    }

    props.onAddTodo(enteredText);
  };

  return (
    <form className={styles.form} onSubmit={formSubmitHandler}>
      <label htmlFor="text">New Todo</label>
      <input type="text" id="text" ref={formInputRef} />
      <button>Add Todo</button>
    </form>
  );
};

export default NewTodo;
