import css from "./todoItem.module.css";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { changeStatus } from "../../redux";

function TodoItem(props) {
  const [inValue] = useState(props.title);
  const [edit, setIsEdit] = useState(true);
  const dispatch = useDispatch();
  const checkInput = () => {
    dispatch(changeStatus(props.id));
  };
  const handleChange = (e) => {
    dispatch(editTodo({ id: props.id, newStr: inpValue }));
  };
  return (
    <div className={css.Item}>
      <div>
        {edit ? (
          <label className={css.leftItem}>
            <input
              type="checkbox"
              checked={props.status}
              onClick={checkInput}
            />
            <p className={props.status ? css.compleate : ""}>{props.title}</p>
          </label>
        ) : (
          <input value={inValue} type="text" onChange={handleChange} />
        )}

        <div className={css.ItemButtons}>
          {edit ? (
            <button className={css.edit} onClick={() => setIsEdit(false)}>
              Edit
            </button>
          ) : (
            <button className={css.edit} onClick={() => setIsEdit(true)}>
              Save
            </button>
          )}
          <button
            className={css.del}
            onClick={() => {
              props.del(props.id);
            }}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default TodoItem;
//            {edit === true ? editBtn : saveBtn}
