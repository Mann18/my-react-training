import React from "react";
import "./CounterApp.css";
import Navigation from "./Navigation";
import Footer from "./Footer";

class CounterApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = { Counter: 0, message: "" };
  }

  componentDidMount() {
    const counterValue = localStorage.getItem("Counter");
    if (counterValue !== null) {
      this.setState({ Counter: parseInt(counterValue) });
    }
  }

  btnReset = () => {
    localStorage.setItem("Counter", 0);
    this.setState({ Counter: 0, message: "Your counter has been reset!" });
  };

  decrement = () => {
    if (this.state.Counter > 0) {
      this.setState({ Counter: this.state.Counter - 1, message: "" });
      localStorage.setItem("Counter", this.state.Counter - 1);
    } else {
      this.setState({ message: "Sorry, you have reached the minimum limit" });
    }
  };

  increment = () => {
    if (this.state.Counter < 20) {
      this.setState({ Counter: this.state.Counter + 1, message: "" });
      localStorage.setItem("Counter", this.state.Counter + 1);
    } else {
      this.setState({ message: "Sorry, you have reached the maximum limit" });
    }
  };

  render() {
    return (
      <>
        <Navigation />
        <div className="counter-container">
          <h2>Counter App</h2>
          <p>Counter: {this.state.Counter}</p>
          <button onClick={this.decrement}>-</button>
          <button onClick={this.increment}>+</button>
          <br />
          <br />
          <button onClick={this.btnReset}>Reset Counter</button>
          {this.state.message && (
            <p className="error-message">{this.state.message}</p>
          )}
        </div>
        <Footer />
      </>
    );
  }
}

export default CounterApp;
