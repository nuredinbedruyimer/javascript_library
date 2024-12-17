import React, { useState } from "react";

type Todo = {
  id: number;
  task: string;
  completed: boolean;
};

const UseStateWithArray = () => {
  const [todos, setTodos] = useState<Todo[]>([]); // State as an array of `Todo` objects

  const addTodo = () => {
    setTodos((prevTodos) => [
      ...prevTodos,
      { id: prevTodos.length + 1, task: "Learn TypeScript", completed: false },
    ]);
  };

  return (
    <div>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.task} - {todo.completed ? "Done" : "Pending"}
          </li>
        ))}
      </ul>
      <button onClick={addTodo}>Add Todo</button>
    </div>
  );
};

export default UseStateWithArray;
