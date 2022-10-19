import React, { Component } from "react";
import Timer from "./Timer";

export class ClassCondtn extends Component {
  render() {
    let message;
    let time = new Date().getHours();
    if (time < 12) {
      message = "Good Morning";
    } else if (time >= 12 && time < 16) {
      message = "Good Afternoon";
    } else if (time >= 16 && time < 20) {
      message = "Good Evening";
    } else {
      message = "Good Night";
    }
    return (
      <div>
        <h1>
          {<Timer />}
          {message}
        </h1>
      </div>
    );
  }
}

export default ClassCondtn;
