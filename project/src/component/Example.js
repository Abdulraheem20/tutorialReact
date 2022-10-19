import React, { Component } from "react";

const card = {
  width: "300px",
  backgroundColor: "silver",
  boxShadow: "1px 2px 3px",
  borderRadius: "5px",
  padding: "10px",
  display: "block",
  margin: "25px auto",
};

export class Example extends Component {
  constructor() {
    super();
    this.about = {
      name: "Abdullaahi",
      bio: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto necessitatibus assumenda ipsa tempora beatae fugiat deserunt ratione culpa possimus dignissimos vero commodi delectus ipsam saepe, explicabo quia provident dolores molestiae.",
    };
  }
  render() {
    return (
      <div>
        <div className="container" style={card}>
          <div className="card">
            <h2 className="name">{this.about.name}</h2>
            <p className="bio">{this.about.bio}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Example;
