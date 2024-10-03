import { FC } from "react";
import { useAppDispatch } from "../hooks/hook";
import { removeTodo, toggleTodoComplete } from "../store/todoSlice";

interface TodoItemProps {
  id: string;
  title: string;
  completed: boolean;
}

const TodoItem: FC<TodoItemProps> = ({ id, title, completed }) => {
  const dispatch = useAppDispatch();

  return (
    <li>
      <input
        className="checkbox"
        type="checkbox"
        checked={completed}
        onChange={() => dispatch(toggleTodoComplete(id))}
      />
      <span>{title}</span>
      <span className="delete" onClick={() => dispatch(removeTodo(id))}>
        &times;
      </span>
    </li>
  );
};

export default TodoItem;
