import React, { Component } from "react";
import "./App.css";
import Form from "./Form";

class App extends Component {
  state = {
    fields: {}
  };

  onChange = updatedValue => {
    this.setState({
      fields: {
        ...this.state.fields,
        ...updatedValue
      }
    });
  };

  render() {
    return (
      <div className="App">
        <h1>Enter Credit Card Details</h1>
        <Form onChange={fields => this.onChange(fields)} />
      </div>
    );
  }
}

export default App;
