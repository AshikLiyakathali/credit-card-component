import React from "react";

class Form extends React.Component {
  state = {
    cardholderName: "",
    cardNumber: "",
    validUntil: ""
  };

  change = e => {
    this.props.onChange({ [e.target.name]: e.target.value });
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  onSubmit = e => {
    e.preventDefault();
    // this.props.onSubmit(this.state);
    this.setState({
      cardholderName: "",
      cardNumber: "",
      validUntil: ""
    });
    this.props.onChange({
      cardholderName: "",
      cardNumber: "",
      validUntil: ""
    });
  };

  render() {
    return (
      <form>
        <input
          name="cardholderName"
          placeholder="Cardholder Name"
          value={this.state.cardholderName}
          onChange={e => this.change(e)}
          style={{
            backgroundColor: "white",
            height: 20,
            width: 400,
            margin: 5
          }}
          type="text"
        />
        <br />
        <input
          name="cardNumber"
          placeholder="Card Number"
          value={this.state.cardNumber}
          onChange={e => this.change(e)}
          style={{
            backgroundColor: "white",
            height: 20,
            width: 400,
            margin: 5
          }}
          type="number"
        />
        <br />
        <input
          name="validUntil"
          placeholder="Valid Until"
          value={this.state.validUntil}
          onChange={e => this.change(e)}
          style={{
            backgroundColor: "white",
            height: 20,
            width: 400,
            margin: 5
          }}
          type="date"
        />
        <br />
        <button onClick={e => this.onSubmit(e)}>Submit</button>
      </form>
    );
  }
}

export default Form;
