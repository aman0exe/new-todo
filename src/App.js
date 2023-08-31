import { useState } from "react";
import "./App.css";
import CreateTodo from "./components/createTodo/createTodo";
import Header from "./components/header/header";
import TodoContainer from "./components/TodoContainer/todoContainer";

function App() {
  const arr = [];
  let [todoArr] = useState(arr);
  const resLength = todoArr.reduce((acc, item) => {
    return acc + item.status;
  }, 0);
  return (
    <div className="App">
      <Header valueOne={resLength} valueTwo={todoArr.length} />
      <CreateTodo />
      <TodoContainer />
    </div>
  );
}

export default App;
