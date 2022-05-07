import Todos from "./components/Todos";
import Todo from "./models/todos";

function App() {
  const todos = [new Todo("Learn React"), new Todo("Learn TypeScript")];
  return <Todos items={todos} />;
}

export default App;
