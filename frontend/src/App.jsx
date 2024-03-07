import "./App.css";
import TodoWithId from "./componenets/experiment/TodoWithId";

function App() {
  return (
    <div>
      <h1>Musab Hassan</h1>
      <h3>Full Stack Developer</h3>
      <TodoWithId id={5} />
    </div>
  );
}

export default App;
