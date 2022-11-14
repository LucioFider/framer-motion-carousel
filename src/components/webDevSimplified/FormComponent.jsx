import React, { useEffect, useState } from "react";
import { useMemo } from "react";

const FormComponent = () => {
  const [age, setAge] = useState(0);
  const [name, setName] = useState("");
  const [darkMode, setDarkMode] = useState(false);

  //   const person = { age, name };
  const person = useMemo(() => {
    return { age, name };
  }, [age, name]);

  useEffect(() => {
    console.log(person);
  }, [person]);

  return (
    <div style={{ background: darkMode ? "#333" : "#fff" }}>
      Age:{" "}
      <input
        className="border rounded outline-gray-500"
        type="number"
        value={age}
        onChange={(e) => setAge(e.target.value)}
      />
      <br />
      Name:{" "}
      <input
        className="border rounded outline-gray-500"
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <br />
      Dark Mode:{" "}
      <input
        className="border rounded outline-gray-500"
        type="checkbox"
        value={darkMode}
        onChange={(e) => setDarkMode(e.target.checked)}
      />
    </div>
  );
};

export default FormComponent;
