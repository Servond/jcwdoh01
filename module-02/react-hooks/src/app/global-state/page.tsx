"use client";
import { useState } from "react";

export default function GlobalState() {
  const [count, setCount] = useState<number>(0);
  const [number, setNumber] = useState<number>(0);

  return (
    <div>
      Global State
      <Children1 count={count} />
      <Children2 number={number} />
    </div>
  );
}

function Children1({ count }: { count: number }) {
  return <div className="mt-10">Children 1</div>;
}

function Children2({ number }: { number: number }) {
  return <div className="mt-10">Children 2</div>;
}
