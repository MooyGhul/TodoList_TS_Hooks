import React, {useRef} from 'react';

import './NewTodo.css';

interface NewTodoProps {
  onAddTodo: (todoText: string) => void;
};

const NewTodo: React.FC<NewTodoProps> = props => {
  // ref wants know what kind of data will be stored inside the ref
  // null for component render the very first time
  const textInputRef = useRef<HTMLInputElement>(null);

  const todoSubmitHandler = (event: React.FormEvent) =>{
    event.preventDefault();
    // ! tell this will be set when render
    const enteredText = textInputRef.current!.value;
    props.onAddTodo(enteredText);
  };

  return (
    <form onSubmit={todoSubmitHandler}>
      <div className="form-control">
        <label htmlFor="todo-text">Todo Text</label>
        <input type="text" id="todo-text" ref={textInputRef}/>
      </div>
      <button type="submit">ADD TODO</button>
    </form>
  );
}

export default NewTodo;