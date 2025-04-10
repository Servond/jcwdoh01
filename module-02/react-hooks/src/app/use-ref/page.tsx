"use client";
import { useRef, useEffect } from "react";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

export default function UseState() {
  const usernameRef = useRef<null | HTMLInputElement>(null);

  const checkRefValue = () => {
    console.log(usernameRef.current);
  };

  useEffect(() => {
    usernameRef.current?.focus();
  }, []);

  return (
    <div>
      <div className="mb-10">Use State</div>
      <hr />
      <div className="mt-10">
        FORM
        <form className="space-y-8 mt-10">
          <div>
            <label>Username : </label>
            <Input ref={usernameRef} type="text" />
          </div>
          <div>
            <label>Password : </label>
            <Input type="text" />
          </div>
        </form>
        <button
          className="mt-10 standard-button"
          onClick={() => checkRefValue()}
        >
          Submit
        </button>
      </div>
    </div>
  );
}
