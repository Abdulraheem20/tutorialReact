import React, { Component } from "react";

const name = {
  fname: "Abdulraheem",
  lname: "Raimi",
};
const title = "Full-stack Developer (in-view)";

export class Third extends Component {
  render() {
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col">
              <h2>
                <strong>{name.fname}</strong> {name.lname}
              </h2>
              <h5>{title}</h5>
              <p>
                html, css, bootstrap, jquery, javascript, react, Redux, Scss,
                Tailwind, git, python, django, node, sql,{" "}
              </p>
              <div className="bio">
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Molestias sed facere corrupti enim, sequi dicta inventore
                  veritatis beatae dolore vitae.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Third;
