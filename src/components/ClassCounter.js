import React, { Component } from "react";

class ClassCounter extends Component {
  //initial state
  state = {
    count: 0
  };

  //increment count method
  incrementCount = () => {
    this.setState({
      count: this.state.count + 1
    });
  };

  //clear count method
  clearCount = () => {
    this.setState({
      count: 0
    });
  };

  render() {
    console.log(this.state);
    const { count } = this.state;
    return (
      <div>
        <button onClick={this.incrementCount}>Count {count}</button>
        <button onClick={this.clearCount}>Clear count</button>
      </div>
    );
  }
}

export default ClassCounter;
