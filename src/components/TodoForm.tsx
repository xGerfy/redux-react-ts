import { FC } from "react";

interface TodoFormProps {
  value: string;
  updateText: (str: string) => void;
  handleAction: () => void;
}

const TodoForm: FC<TodoFormProps> = ({ value, updateText, handleAction }) => {
  return (
    <div className="form">
      <input
        placeholder="Напишите задачу..."
        value={value}
        onChange={(e) => updateText(e.target.value)}
        className="form__input"
      />
      <button className="form__btn" onClick={handleAction}>
        Добавить
      </button>
    </div>
  );
};

export default TodoForm;
