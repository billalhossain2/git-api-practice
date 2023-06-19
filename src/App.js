import Form from "./components/Form";
import Todos from "./components/Todos";
import { useState } from "react";
function App() {
  let [todoTitle, setTodoTitle] = useState("");
  let [todos, setTodos] = useState([]);
  const [editableTodo, setEditableTodo] = useState(null);
  return (
    <div className="App">
      <Form
        todoTitle={todoTitle}
        setTodoTitle={setTodoTitle}
        todos={todos}
        setTodos={setTodos}
        editableTodo={editableTodo}
        setEditableTodo={setEditableTodo}
      />
      <Todos
        todos={todos}
        setTodos={setTodos}
        todoTitle={todoTitle}
        setTodoTitle={setTodoTitle}
        editableTodo={editableTodo}
        setEditableTodo={setEditableTodo}
      />
    </div>
  );
}

export default App;
