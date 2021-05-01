import React from 'react';

import './TodoList.css';

{ /* should tell typescript the type of props */}
interface TodoListProps {
  items: {id: string, text: string}[];
  onDeleteTodo:(id:string) => void;
};

const TodoList: React.FC<TodoListProps> = props => {
  return (
    <ul>
      {props.items.map((todo)=>{
        return (
          <li key={todo.id}>
            <span>{todo.text}</span>
            {/* 
              Param1 : null (I dont care about this keyword)
              Param2 : the first param received in 
            */}
            <button onClick={props.onDeleteTodo.bind(null, todo.id)}>DELETE</button>
          </li>
        );
      })}
    </ul>
  );
};

export default TodoList;