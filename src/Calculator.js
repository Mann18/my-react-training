import React, { Component } from "react";
import "./Calculator.css";
import Footer from "./Footer";
import Navigation from "./Navigation";

class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      num1: "",
      num2: "",
      result: "",
    };
  }

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleAddition = () => {
    const result = parseFloat(this.state.num1) + parseFloat(this.state.num2);
    this.setState({ result });
  };

  handleSubtraction = () => {
    const result = parseFloat(this.state.num1) - parseFloat(this.state.num2);
    this.setState({ result });
  };

  handleMultiplication = () => {
    const result = parseFloat(this.state.num1) * parseFloat(this.state.num2);
    this.setState({ result });
  };

  handleDivision = () => {
    const result = parseFloat(this.state.num1) / parseFloat(this.state.num2);
    this.setState({ result });
  };

  render() {
    return (
      <>
        <Navigation />
        <div className="calculator-container">
          <h2>Mini Calculator</h2>
          <input
            type="number"
            name="num1"
            value={this.state.num1}
            onChange={this.handleInputChange}
            placeholder="Enter first number"
            className="input-field"
          />
          <input
            type="number"
            name="num2"
            value={this.state.num2}
            onChange={this.handleInputChange}
            placeholder="Enter second number"
            className="input-field"
          />
          <div>
            <button onClick={this.handleAddition}>+</button>
            <button onClick={this.handleSubtraction}>-</button>
            <button onClick={this.handleMultiplication}>*</button>
            <button onClick={this.handleDivision}>/</button>
          </div>
          <div className="result">Answer is:{this.state.result}</div>
        </div>
        <Footer />
      </>
    );
  }
}

export default Calculator;
