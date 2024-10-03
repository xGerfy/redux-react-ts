import { FC } from "react";
import { useAppSelector } from "../hooks/hook";
import TodoItem from "./TodoItem";

const TodoList: FC = () => {
  const todos = useAppSelector((state) => state.todos.list);

  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem key={todo.id} {...todo} />
      ))}
    </ul>
  );
};

export default TodoList;
