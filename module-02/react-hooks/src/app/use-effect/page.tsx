"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import axios from "axios";

export default function UseEffect() {
  const [dogState, setDogState] = useState<string[]>([]);
  const [dogEffectState, setDogEffectState] = useState<string[]>([]);

  const fetchDogState = async () => {
    try {
      const { data } = await axios.get(
        "https://dog.ceo/api/breeds/image/random/3"
      );

      setDogState(data.message);
    } catch (err) {
      const Err = err as Error;
      alert(Err.message);
    }
  };

  const fetchEffectDogState = async () => {
    try {
      const { data } = await axios.get(
        "https://dog.ceo/api/breeds/image/random/3"
      );

      setDogEffectState(data.message);
    } catch (err) {
      const Err = err as Error;
      alert(Err.message);
    }
  };

  useEffect(() => {
    fetchEffectDogState();
  }, [dogState]);

  return (
    <div>
      <div className="mb-10">Use Effect</div>
      <hr />
      <div className="mt-10">
        Dog List
        <div className="w-full border rounded-sm p-10 flex flex-col">
          <div className="flex flex-row gap-2 justify-items-center justify-center">
            {dogState.map((dog, idx) => (
              <Image
                key={idx}
                src={dog}
                alt={`dog-${idx}`}
                width={320}
                height={320}
              />
            ))}
          </div>
          <button
            className="mt-10 standard-button"
            onClick={() => fetchDogState()}
          >
            Fetch
          </button>
        </div>
        <div className="mt-10">
          Dog Effect List
          <div className="w-full border rounded-sm p-10 flex flex-col">
            <div className="flex flex-row gap-2 justify-items-center justify-center">
              {dogEffectState.map((dog, idx) => (
                <Image
                  key={idx}
                  src={dog}
                  alt={`dog-${idx}`}
                  width={320}
                  height={320}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
