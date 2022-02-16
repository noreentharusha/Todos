import { Button, Input } from "@material-ui/core";
import React, { useState } from "react";
import Todo from "./Todo";

function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  const addTodo = (event) => {
    setTodos([...todos, input]);
    event.preventDefault();
    setInput("");
  };

  const updateTodo = (todoId, newValue) => {
    setTodos((prev) =>
      prev.map((item) => (item.id === todoId ? newValue : item))
    );
  };

  console.log(input);
  return (
    <div className="App">
      <h1>Task Board</h1>
      <form>
        <Input
          value={input}
          onChange={(event) => setInput(event.target.value)}
        />
        <Button
          disabled={!input}
          variant="contained"
          color="primary"
          type="submit"
          onClick={addTodo}
        >
          Add To do
        </Button>
      </form>
      <ul>
        {todos.map((todo) => (
          <Todo text={todo} updateTodo={updateTodo} />
        ))}
      </ul>
    </div>
  );
}

export default App;
