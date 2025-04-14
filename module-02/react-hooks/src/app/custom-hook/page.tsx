"use client";
import useCounter from "@/hooks/counter";

export default function CustomHook() {
  const [count, increment, decrement] = useCounter(0, 1);

  return (
    <div>
      <div className="mb-10">Use State</div>
      <hr />
      <div className="mt-10">
        <div className="w-full border rounded-sm p-10 flex flex-col">
          COUNT: {count}
          <button className="standard-button" onClick={increment}>
            Increment
          </button>
          <button className="standard-button" onClick={decrement}>
            Decrement
          </button>
        </div>
      </div>
    </div>
  );
}
