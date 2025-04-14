"use client";
import { useState, useCallback } from "react";
import Todos from "@/components/todos";

export default function UseCallback() {
  const [todos, setTodos] = useState<string[]>([]);
  const [countState, setCountState] = useState<number>(0);

  const addTodo = useCallback(() => {
    setTodos((i) => [...i, "new todo"]);
  }, [todos]);

  return (
    <div>
      <div className="mb-10">Use State</div>
      <div className="mt-10 mb-10">
        <div className="w-full border rounded-sm p-10 flex flex-col">
          <Todos todos={todos} addTodo={addTodo} />
        </div>
      </div>
      <hr />
      <div className="mt-10">
        <div className="w-full border rounded-sm p-10 flex flex-col">
          COUNT : {countState}
          <button
            className="standard-button"
            onClick={() => setCountState(countState + 1)}
          >
            Increment
          </button>
        </div>
      </div>
    </div>
  );
}
