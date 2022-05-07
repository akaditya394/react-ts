import React, { useRef } from "react";

const NewTodo = () => {
  const formInputRef = useRef<HTMLInputElement>(null);
  const formSubmitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    const enteredText = formInputRef.current!.value;

    if (enteredText.trim().length === 0) {
      return;
    }
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <label htmlFor="text">New Todo</label>
      <input type="text" id="text" ref={formInputRef} />
      <button>Add Todo</button>
    </form>
  );
};

export default NewTodo;
