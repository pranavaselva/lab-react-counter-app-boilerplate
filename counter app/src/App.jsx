import { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      num: 0,
    };
  }

  render() {
    return (
      <div>
        <h1 className="heading-one">Counter App</h1>
        <h2 className="heading-two">{this.state.num}</h2>
        <div className="buttons">
        <button className="button-1" onClick={() => this.setState({ num: this.state.num + 1 })}>
          +
        </button>
        <button className="button-2" onClick={() => this.setState({ num: this.state.num - 1 })}>
          -
        </button>
        <button className="button-3" onClick={() => this.setState({ num: 0 })}>Reset</button>
        </div>
      </div>
    );
  }
}

export default App;