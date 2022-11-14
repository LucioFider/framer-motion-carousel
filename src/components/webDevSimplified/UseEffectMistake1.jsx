import React, { useState } from "react";
import { useEffect } from "react";

const UseEffectMistake1 = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  //   const [fullName, setFullName] = useState("");
  const fullName = `${firstName} ${lastName}`;
  //   useEffect(() => {
  //     setFullName(`${firstName} ${lastName}`);
  //   }, [firstName, lastName]);

  return (
    <div className="flex flex-col p-10 gap-4 ">
      <input
        className="border rounded"
        placeholder="First Name"
        type="text"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
      />
      <input
        className="border rounded"
        placeholder="Last Name"
        type="text"
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
      />
      {fullName}
    </div>
  );
};

export default UseEffectMistake1;
