import React, { useState, useMemo } from "react";

const TodoList = ({ todos }) => {
  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>
          <strong>{todo.title}</strong>: {todo.description}
        </li>
      ))}
    </ul>
  );
};

const TodoForm = ({
  title,
  description,
  onTitleChange,
  onDescriptionChange,
  onAddTodo,
}) => {
  return (
    <div>
      <label>Title:</label>
      <input type="text" value={title} onChange={onTitleChange} />
      <br />
      <label>Description:</label>
      <input type="text" value={description} onChange={onDescriptionChange} />
      <br />
      <button onClick={onAddTodo}>Add Todo</button>
    </div>
  );
};

function TosoApp() {
  const [todos, setTodos] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const addTodo = () => {
    if (title.trim() === "" || description.trim() === "") {
      alert("Please enter both title and description.");
      return;
    }

    const newTodo = {
      id: todos.length + 1,
      title: title,
      description: description,
    };

    setTodos([...todos, newTodo]);
    setTitle("");
    setDescription("");
  };

  const memoizedTodoList = useMemo(() => <TodoList todos={todos} />, [todos]);

  return (
    <div>
      <h1>Todo App</h1>
      <TodoForm
        title={title}
        description={description}
        onTitleChange={(e) => setTitle(e.target.value)}
        onDescriptionChange={(e) => setDescription(e.target.value)}
        onAddTodo={addTodo}
      />
      {memoizedTodoList}
    </div>
  );
}

export default TosoApp;
