import { useEffect, useState } from "react";
import axios from "axios";

export default function TodoWithId({ id }) {
  const [todo, setTodo] = useState({});
  useEffect(() => {
    axios.get(`https://sum-server.100xdevs.com/todo?id=${id}`).then((res) => {
      setTodo(res.data.todo);
    });
  }, [id]);
  return (
    <>
      <h1>{todo.title}</h1>
      <h4>{todo.description}</h4>
    </>
  );
}
