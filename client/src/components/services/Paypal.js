import React, { Component } from "react";
import PaypalButtons from "./PaypalButtons";

import "./services.css";

class Paypal extends Component {
  state = {
    showPaypal: false,
  };

  showPaypalButtons = () => {
    this.setState({ showPaypal: true });
  };

  render() {
    const { showPaypal } = this.state;
    if (showPaypal) {
      return <PaypalButtons />;
    } else {
      return (
        <>
          <h4>{this.props.product}</h4>
          <h3>
            <b>{this.props.price}</b>
          </h3>

          <button onClick={this.showPaypalButtons} class='paypal-button'>
            <span class='paypal-button-title'>Buy now with</span>
            <span class='paypal-logo'>
              <i> Pay</i>
              <i>Pal</i>
            </span>
          </button>
        </>
      );
    }
  }
}

export default Paypal;
