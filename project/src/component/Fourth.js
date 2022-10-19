import React, { Component } from "react";
import Card from "./Card";

export class Fourth extends Component {
  constructor() {
    super();
    this.state = { name: "Ade", location: "Oyo", title: "Engineer" };
  }
  render() {
    return (
      <div>
        <h1>
          My name is Abdulraheem. I am from Ibadan. I am an Electrical Engineer.
        </h1>
        <h1>
          My name is {this.state.name}. I am from {this.state.location}. I am an
          {this.state.title}.
        </h1>
        <Card
          imagess="../../images/profile-pic (4).png"
          text="qwrtieoiuygfcvbnmnbd dfwghjkjhb fgdhjfkjndbvc efgwdhjfnb"
          btn="Click"
        />
      </div>
    );
  }
}

export default Fourth;
