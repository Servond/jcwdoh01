"use client";
import { useState } from "react";

export default function LocalState() {
  return (
    <div>
      Local State
      <Children1 />
      <Children2 />
    </div>
  );
}

function Children1() {
  const [count, setCount] = useState<number>(0);
  return <div className="mt-10">Children 1</div>;
}

function Children2() {
  const [count, setCount] = useState<number>(0);
  return <div className="mt-10">Children 2</div>;
}
