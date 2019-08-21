import React, { Component } from "react";

class ClassCounter extends Component {
  //initial state
  state = {
    count: 0
  };

  //increment count method
  incrementCount = () => {
    this.setState(prevState => {
      return {
        count: prevState.count + 1
      };
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
        <h2>Class Component</h2>
        <button onClick={this.incrementCount}>Count {count}</button>
        <button onClick={this.clearCount}>Clear count</button>
      </div>
    );
  }
}

export default ClassCounter;
