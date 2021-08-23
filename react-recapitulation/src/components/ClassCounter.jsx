import React from "react";

class ClassCounter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      likeCounter: 0,
    };
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
  }

  increment() {
    this.setState({ likeCounter: this.state.likeCounter + 1 });
  }

  decrement() {
    this.setState({ likeCounter: this.state.likeCounter - 1 });
  }

  render() {
    return (
      <div>
        <h1>{this.state.likeCounter}</h1>
        <div>
          <button onClick={this.increment}>+</button>
          <button onClick={this.decrement}>-</button>
        </div>
      </div>
    );
  }
}

export default ClassCounter;
