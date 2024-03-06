import { useState } from "react";
import Header from "./Header";

export default function ButtonWithTitle() {
  const [title, setTitle] = useState("My name is M Hassan");

  function handleTitle() {
    const random = Math.floor(Math.random() * 10);
    console.log("hiiii");
    setTitle(`My name is ${random}`);
  }

  return (
    <>
      <button onClick={handleTitle}>Click me to change title</button>
      <Header title={title} />
    </>
  );
}
