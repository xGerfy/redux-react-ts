import { useState } from "react";
import { useAppDispatch } from "./hooks/hook";

import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import { addTodo } from "./store/todoSlice";

import "./App.css";

function App() {
  const [text, setText] = useState("");
  const dispatch = useAppDispatch();

  const handleAction = () => {
    if (text.trim().length) {
      dispatch(addTodo(text));
      setText("");
    }
  };

  return (
    <div className="App">
      <div className="title">
        Этот список дел сделан с использованием Redux toolkit и ts
      </div>
      <TodoForm value={text} updateText={setText} handleAction={handleAction} />
      <TodoList />
    </div>
  );
}

export default App;
