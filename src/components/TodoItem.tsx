import React from 'react';
import { Todo } from '../types';

interface TodoItemProps extends Todo {
  toggleTodo: (id: Todo['id']) => void;
  deleteTodo: (id: Todo['id']) => void;
  style?: React.CSSProperties;
}

const TodoItem = ({
  id,
  title,
  completed,
  toggleTodo,
  deleteTodo,
  style = {},
}: TodoItemProps) => {
  return (
    <li style={style}>
      <input
        type='checkbox'
        checked={completed}
        onChange={() => toggleTodo(id)}
      />
      <span>{title}</span>
      <span onClick={() => deleteTodo(id)}>&times;</span>
    </li>
  );
};

export default TodoItem;
