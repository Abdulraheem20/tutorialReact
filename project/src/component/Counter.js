import React, { Component } from "react";

export class Counter extends Component {
  constructor() {
    super();
    this.state = { count: 0 };
  }
  render() {
    return (
      <div>
        <h1>Update count value on the click of a button</h1>
        <h1>{this.state.count}</h1>
        <button
          onClick={() => {
            this.setState({ count: this.state.count + 1 });
          }}
        >
          Update Value
        </button>
      </div>
    );
  }
}

export default Counter;
