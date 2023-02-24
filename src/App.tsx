import { useState, useEffect } from 'react';

import { Todo } from './types';
import NewTodoForm from './components/NewTodoForm';
import TodoList from './components/TodoList';
import './App.css';

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodo = (text: string) => {
    const newTodo: Todo = {
      id: new Date().toString(),
      title: text,
      completed: false,
    };
    setTodos([newTodo, ...todos]);
  };

  const deleteTodo = (id: Todo['id']) => {
    fetch('https://jsonplaceholder.typicode.com/todos', { method: 'DELETE' });
    const newTodoList = todos.filter((todo) => todo.id !== id);
    setTodos(newTodoList);
  };

  const toggleTodo = (id: Todo['id']) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id !== id) return todo;

        return {
          ...todo,
          completed: !todo.completed,
        };
      })
    );
  };

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then((res) => res.json())
      .then((data: Todo[]) => {
        setTodos(data);
      });
  }, []);

  return (
    <div className='App'>
      <NewTodoForm handleClick={addTodo} />
      <TodoList list={todos} deleteTodo={deleteTodo} toggleTodo={toggleTodo} />
    </div>
  );
}

export default App;
