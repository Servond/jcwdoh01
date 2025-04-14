import { memo } from "react";

interface ITodos {
  todos: string[];
  addTodo: () => void;
  //   setTodos: Dispatch<SetStateAction<string[]>> *jika ingin mengirimkan sebuah set state sebagai sebuah props
}

const Todos = ({ todos, addTodo }: ITodos) => {
  console.log("component kerender ulang");

  return (
    <div>
      <h2 className="text-2xl mb-10">Todo List</h2>
      {todos?.map((todo, idx) => (
        <div key={idx}>
          <p>{todo}</p>
        </div>
      ))}
      <button className="standard-button mt-10" onClick={addTodo}>
        Add Todo
      </button>
    </div>
  );
};

export default memo(Todos);
