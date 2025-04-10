"use client";
import { useState, useMemo } from "react";

export default function UseState() {
  const [numberState, setNumberState] = useState<number>(0);
  const [countState, setCountState] = useState<number>(0);

  const isNumberEven = useMemo(() => {
    let i = 0;
    while (i < 2000000000) {
      i++;
    }

    return numberState % 2 === 0;
  }, [numberState]);

  return (
    <div>
      <div className="mb-10">Use State</div>
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
        <div className="w-full border rounded-sm p-10 flex flex-col mt-10">
          {numberState} : {isNumberEven ? "even" : "odd"}
          <button
            className="standard-button"
            onClick={() => setNumberState(numberState + 1)}
          >
            Increment
          </button>
        </div>
      </div>
    </div>
  );
}
