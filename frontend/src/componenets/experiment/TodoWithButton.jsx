import { useState } from "react";
import TodoWithId from "./TodoWithId";

export default function TodoWithButton() {
  const [id, setId] = useState(1);

  return (
    <>
      <button
        onClick={() => {
          setId(1);
        }}
      >
        1
      </button>
      <button
        onClick={() => {
          setId(2);
        }}
      >
        2
      </button>
      <button
        onClick={() => {
          setId(3);
        }}
      >
        3
      </button>
      <button
        onClick={() => {
          setId(4);
        }}
      >
        4
      </button>
      <br />
      <TodoWithId id={id} />
    </>
  );
}
