import { useState } from "react";

export default function Todo() {
  return (
    <>
      <InputTodo />
    </>
  );
}

function InputTodo() {
  const [todos, setTodos] = useState([
    {
      title: "todo 1",
      description: "description 1",
    },
    {
      title: "todo 2",
      description: "description 2",
    },
    {
      title: "todo 3",
      description: "description 3",
    },
  ]);

  const [input, setInput] = useState("");
  const [key, setKey] = useState("");

  return (
    <>
      <input
        onChange={(e) => {
          setInput(e.target.value);
        }}
        type="text"
        placeholder="title"
      />
      <input
        onChange={(e) => {
          setKey(e.target.value);
        }}
        type="text"
        placeholder="description"
      />
      <br />
      <button
        onClick={() => {
          setTodos([...todos, { title: input, description: key }]);
        }}
      >
        Add Todo
      </button>
      {todos.map((todo) => {
        return (
          <>
            <h1>{todo.title}</h1>
            <h3>{todo.description}</h3>
          </>
        );
      })}
    </>
  );
}
