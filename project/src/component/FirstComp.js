import React from "react";

const humble = {
  width: "300px",
  boxShadow: "1px 2px 3px",
};
const raimi = {
  display: "flex",
  justifyContent: "center",
};

const FirstComp = () => {
  return (
    <div>
      <div className="container" style={raimi}>
        <div className="card" style={humble}>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum illo
            assumenda, aut asperiores non porro tempora cum vero rem quos
            inventore, esse corporis placeat, nobis sed minima quam quaerat
            magnam dolor possimus voluptatum delectus enim ut itaque?
            Repellendus fuga ab soluta praesentium corporis perspiciatis neque
            ex excepturi, reprehenderit, autem voluptatum.
          </p>
          <button>ckick me</button>
        </div>
      </div>
    </div>
  );
};

export default FirstComp;
