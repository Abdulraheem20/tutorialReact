import React, { Component } from "react";

const time = new Date();
time.getUTCHours();
time.getUTCMinutes();
time.getUTCSeconds();
export class Timer extends Component {
  constructor() {
    super();
    this.state = { time: new Date().toLocaleTimeString() };
  }
  componentDidMount() {
    setInterval(() => {
      this.setState({ time: new Date().toLocaleTimeString() });
    }, 1000);
  }
  render() {
    return (
      <div>
        <p>The time says {this.state.time}</p>
        {/* <h1>The time is {time.getUTCHours() +1}: {time.getUTCMinutes()}: {time.getUTCSeconds()}</h1> */}
      </div>
    );
  }
}

export default Timer;
