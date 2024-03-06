import { useState } from "react";
import "./App.css";
import Todo from "./componenets/todo/Todo";

function App() {
  const [todos, setTodos] = useState([
    { id: 1, title: "Todo1", discription: "Todo1 discription" },
    { id: 2, title: "Todo2", discription: "Todo2 discription" },
    { id: 3, title: "Todo3", discription: "Todo3 discription" },
  ]);

  function handleTodo() {
    setTodos([
      ...todos,
      {
        id: 4,
        title: "Todo4",
        discription: "Todo4 discription",
      },
    ]);
  }

  return (
    <div>
      <h1>Musab Hassan</h1>
      <h3>Full Stack Developer</h3>
      <button onClick={handleTodo}>Add Todo</button>
      {todos.map((todo) => (
        <Todo key={todo.id} title={todo.title} discription={todo.discription} />
      ))}
    </div>
  );
}

export default App;
