import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../../redux";
import "./createTodo.css";

function CreateTodo() {
  const [value, setValue] = useState("");
  const dispatch = useDispatch();

  const submit = (e) => {
    e.preventDefault();
    dispatch(addTodo(value));
    setValue("");
  };
  const handleChange = (e) => {
    setValue(e.target.value);
  };
  return (
    <div className="create">
      <form onSubmit={submit} className="fields">
        <input
          type="text"
          onChange={handleChange}
          placeholder="Type what to do"
          value={value}
        />
        <button>+ Add</button>
      </form>
    </div>
  );
}

export default CreateTodo;
