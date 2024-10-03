import { motion } from "framer-motion";
import { FC } from "react";
import { useAppSelector } from "../hooks/hook";
import TodoItem from "./TodoItem";

const TodoList: FC = () => {
  const todos = useAppSelector((state) => state.todos.list);

  return (
    <ul>
      {todos.map((todo) => (
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4 }}
          key={todo.id}
        >
          <TodoItem {...todo} />
        </motion.div>
      ))}
    </ul>
  );
};

export default TodoList;
