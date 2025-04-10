"use client";
import { useState } from "react";

export default function UseState() {
  const [countState, setCountState] = useState<number>(0);
  let countVar = 0;

  return (
    <div>
      <div className="mb-10">Use State</div>
      <hr />
      <div className="mt-10">
        VARIABLE
        <div className="w-full border rounded-sm p-10 flex flex-col">
          COUNT: {countVar}
          <button
            className="standard-button"
            onClick={() => {
              countVar++;
              console.log(countVar);
            }}
          >
            Increment
          </button>
        </div>
      </div>
      <div className="mt-10">
        STATE
        <div className="w-full border rounded-sm p-10 flex flex-col">
          COUNT: {countState}
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
