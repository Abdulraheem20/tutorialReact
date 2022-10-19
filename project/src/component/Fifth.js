import React, { Component } from "react";

export class Fifth extends Component {
  constructor() {
    super();
    this.state = {
      name: "Olayiwola",
      message:
        "Thank you for visiting our Web Page. Check out our other pages for more info.",
      greetings: "Welcome",
    };
  }
  changeDetails() {
    this.setState({
      name: "Ayo",
      message: "Thank you boss, we are very grateful, see you again soon.",
      greetings: "Goodbye",
    });
  }
  render() {
    return (
      <div>
        <h1>
          {this.state.greetings} {this.state.name}
        </h1>
        <p>{this.state.message}</p>
        {/* <button onClick={this.changeDetails}>Log Out</button> (this works with arrow function) */}
        <button onClick={this.changeDetails.bind(this)}>Log Out</button>
      </div>
    );
  }
}

export default Fifth;
