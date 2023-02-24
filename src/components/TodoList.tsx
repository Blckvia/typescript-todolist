import { Todo } from '../types';
import TodoItem from './TodoItem';

interface TodoListProps {
  list: Todo[];
  toggleTodo: (id: Todo['id']) => void;
  deleteTodo: (id: Todo['id']) => void;
}

const TodoList = ({ list, deleteTodo, toggleTodo }: TodoListProps) => {
  return (
    <ul>
      {list.map((todo) => (
        <TodoItem
          key={todo.id}
          deleteTodo={deleteTodo}
          toggleTodo={toggleTodo}
          {...todo}
        />
      ))}
    </ul>
  );
};

export default TodoList;
