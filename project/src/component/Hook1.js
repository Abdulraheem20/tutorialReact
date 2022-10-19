import React, { useState } from "react";

const Hook1 = () => {
  const [data, setData] = useState({
    name: "Olayiwola",
    message:
      "Thank you for visiting our Web Page. Check out our other pages for more info.",
    greetings: "Welcome",
  });

  return (
    <div>
      <h1>
        {data.greetings} {data.name}
      </h1>
      <p>{data.message}</p>
      <button
        onClick={() => {
          setData({
            name: "Layi",
            message:
              "Thank you boss, we are very grateful, see you again soon.",
            greetings: "Goodbye",
          });
        }}
      >
        Log Out
      </button>
    </div>
  );
};

export default Hook1;
