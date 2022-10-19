import React, { useState } from "react";

const Hook2 = () => {
  const [input, setInput] = useState("");
  const [display, setDisplay] = useState("");
  return (
    <div>
      <form action="">
        <input
          type="text"
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
          }}
        />
        <button
          onClick={(e) => {
            e.preventDefault();
            setDisplay(input);
          }}
        >
          Add Item
        </button>
      </form>
      <h1>{display}</h1>
    </div>
  );
};

export default Hook2;
