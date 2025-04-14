import { useState } from "react";

export default function useCounter(val: number, step: number) {
  const [count, setCount] = useState<number>(val);

  const increment = () => {
    setCount(count + step);
  };

  const decrement = () => {
    setCount(count - step);
  };

  return [count, increment, decrement] as const;
}
