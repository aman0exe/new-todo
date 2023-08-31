import "./todoContainer.css";
import TodoItem from "../TodoItem/todoItem";
import { useSelector } from "react-redux";
// import CreateTodo from "../createTodo/createTodo"

function TodoContainer(props) {
  const todosArr = useSelector((state) => state.todos);
  return (
    <div className="container">
      <div className="todoItems">
        {todosArr.map((el) => (
          <TodoItem
            title={el.title}
            status={el.status}
            id={el.id}
            edited={props.edited}
          />
        ))}
      </div>
    </div>
  );
}

export default TodoContainer;
