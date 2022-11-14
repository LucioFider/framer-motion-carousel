import React, { useState } from "react";
import { useRef } from "react";

const HookMistakes = () => {
  const emailRef = useRef();
  const passwordRef = useRef();

  //   const [email, setEmail] = useState("");
  //   const [password, setPassword] = useState("");

  function onSubmit(e) {
    e.preventDefault();
    console.log({
      email: emailRef.current.value,
      password: passwordRef.current.value,
    });
  }
  return (
    <form
      onSubmit={onSubmit}
      className="flex flex-col items-center gap-4 justify-center"
    >
      <label htmlFor="email">Email</label>
      <input
        className="border rounded text-gray-700 "
        // value={email}
        // onChange={(e) => setEmail(e.target.value)}
        ref={emailRef}
        type="email"
        id="email"
        placeholder="Enter your email"
      />
      <label htmlFor="password">Password</label>
      <input
        className="border rounded"
        // value={password}
        // onChange={(e) => setPassword(e.target.value)}
        ref={passwordRef}
        type="password"
        id="password"
        placeholder="Enter your password"
      />
      <button
        type="submit"
        className="bg-blue-500 border p-2 rounded-md text-white"
      >
        Submit
      </button>
    </form>
  );
};

export default HookMistakes;
