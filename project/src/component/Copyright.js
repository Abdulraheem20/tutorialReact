import React from "react";
const date = new Date();
date.getFullYear();

const Copyright = () => {
  return (
    <div>
      <p>&copy; COPYRIGHT {date.getFullYear()}</p>
    </div>
  );
};

export default Copyright;
