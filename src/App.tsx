import React, {useState} from 'react';
import TodoList from './components/TodoList';
import NewTodo from './components/NewTodo'; 
import { Todo } from './todo.model'

// Fuction Component Type from React Library
// React.ClassComponent
const App: React.FC = () => {
  // ts inferes it is an array of nothing
  // so have to pass in the structure of it
  const [todos, setTodos] = useState<Todo[]>([]);

  const todoAddHandler = (text: string) => {
    // spread is not the cleanest way of updating it, 
    // theoretically react schedules state updates 
    // therefore what react to do is 
    // value here might not be the latest state when the update is performed
    // setTodos([...todos, {id: id.toString(), text: text}]);

    // For guarenteen
    setTodos(prevTodos => [
      ...prevTodos, 
      {id: Math.random().toString(), text: text}
    ]);
  }

  const todoDeleteHandler = (todoId: string) => {
    setTodos(prevTodos => {
      return prevTodos.filter(todo => todo.id!==todoId);
    });
  }

  return (
    <div>
      <NewTodo onAddTodo={todoAddHandler}/>
      <TodoList items={todos} onDeleteTodo={todoDeleteHandler} />
    </div>
  );
}

export default App;
