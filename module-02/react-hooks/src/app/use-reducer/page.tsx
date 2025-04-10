"use client";
import { useRef, useReducer } from "react";
import { Input } from "@/components/ui/input";

function reducer(
  state: { count: number; num: number },
  action: { type: string; payload: number }
) {
  switch (action.type) {
    case "INCREMENTCOUNT":
      return { count: state.count + action.payload, num: state.num };
    case "DECREMENTCOUNT":
      return { count: state.count - action.payload, num: state.num };
    case "INCREMENTNUMBER":
      return { count: state.count, num: state.num + action.payload };
    case "DECREMENTNUMBER":
      return { count: state.count, num: state.num - action.payload };
    default:
      return state;
  }
}

export default function UseReducer() {
  const [state, dispatch] = useReducer(reducer, { count: 0, num: 0 });
  const amountRef = useRef<null | HTMLInputElement>(null);

  return (
    <div>
      <div className="mb-10">Use State</div>
      <hr />
      <div className="mt-10">
        <div className="mt-10">
          STATE
          <div className="mt-10">
            <label>Amount : </label>
            <Input ref={amountRef} type="number" defaultValue={0} />
          </div>
          <div className="w-full border rounded-sm p-10 flex flex-col gap-4 mt-10">
            COUNT: {state.count}
            <button
              className="standard-button"
              onClick={() => dispatch({ type: "INCREMENTCOUNT", payload: 1 })}
            >
              Increment
            </button>
            <button
              className="standard-button"
              onClick={() => dispatch({ type: "DECREMENTCOUNT", payload: 1 })}
            >
              Decrement
            </button>
            <div className="flex flex-col gap-4">
              <button
                className="standard-button"
                onClick={() =>
                  dispatch({
                    type: "INCREMENTCOUNT",
                    payload: Number(amountRef.current?.value),
                  })
                }
              >
                Increment by amount
              </button>
              <button
                className="standard-button"
                onClick={() =>
                  dispatch({
                    type: "DECREMENTCOUNT",
                    payload: Number(amountRef.current?.value),
                  })
                }
              >
                Decrement by amount
              </button>
            </div>
          </div>
          <div className="w-full border rounded-sm p-10 flex flex-col gap-4 mt-10">
            NUMBER: {state.num}
            <button
              className="standard-button"
              onClick={() => dispatch({ type: "INCREMENTNUMBER", payload: 1 })}
            >
              Increment
            </button>
            <button
              className="standard-button"
              onClick={() => dispatch({ type: "DECREMENTNUMBER", payload: 1 })}
            >
              Decrement
            </button>
            <div className="flex flex-col gap-4">
              <button
                className="standard-button"
                onClick={() =>
                  dispatch({
                    type: "INCREMENTNUMBER",
                    payload: Number(amountRef.current?.value),
                  })
                }
              >
                Increment by amount
              </button>
              <button
                className="standard-button"
                onClick={() =>
                  dispatch({
                    type: "DECREMENTNUMBER",
                    payload: Number(amountRef.current?.value),
                  })
                }
              >
                Decrement by amount
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
