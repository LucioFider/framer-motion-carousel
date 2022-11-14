import React, { useEffect, useState } from "react";

const HookMistate1 = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log(count);
  }, [count]);

  function adjustCount(amount) {
    setCount((currentCount) => {
      return currentCount + amount;
    });

    // setCount(count + amount);
    // setCount(count + amount);
  }

  return (
    <>
      <button
        className="bg-blue-500 p-2 border rounded-md"
        onClick={() => adjustCount(-1)}
      >
        -
      </button>
      <span>{count}</span>
      <button
        className="bg-blue-500 p-2 border rounded-md"
        onClick={() => adjustCount(1)}
      >
        +
      </button>
    </>
  );
};

export default HookMistate1;
