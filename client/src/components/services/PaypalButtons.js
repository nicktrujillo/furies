import React from "react";
import ReactDOM from "react-dom";
import scriptLoader from "react-async-script-loader";
// import Song from "../assets/img/song.jpg";
import Spinner from "../../components/layout/Spinner";
import "./services.css";

const CLIENT = {
  sandbox:
    "AR5icVMPMnZrYiMFSJAGOZKRqc7np-ogz5xCwWLWhJdBmJcyFhTP5SXOYGGgdFiwzn_kvgKyshY6myRI",

  production:
    "AR5icVMPMnZrYiMFSJAGOZKRqc7np-ogz5xCwWLWhJdBmJcyFhTP5SXOYGGgdFiwzn_kvgKyshY6myRI",
};

const CLIENT_ID =
  process.env.NODE_ENV === "production" ? CLIENT.production : CLIENT.sandbox;

let PayPalButton = null;
class PaypalButton extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showButtons: false,
      loading: true,
      paid: false,
    };

    window.React = React;
    window.ReactDOM = ReactDOM;
  }

  componentDidMount() {
    const { isScriptLoaded, isScriptLoadSucceed } = this.props;

    if (isScriptLoaded && isScriptLoadSucceed) {
      PayPalButton = window.paypal.Buttons.driver("react", { React, ReactDOM });
      this.setState({ loading: false, showButtons: true });
    }
  }

  componentWillReceiveProps(nextProps) {
    const { isScriptLoaded, isScriptLoadSucceed } = nextProps;

    const scriptJustLoaded =
      !this.state.showButtons && !this.props.isScriptLoaded && isScriptLoaded;

    if (scriptJustLoaded) {
      if (isScriptLoadSucceed) {
        PayPalButton = window.paypal.Buttons.driver("react", {
          React,
          ReactDOM,
        });
        this.setState({ loading: false, showButtons: true });
      }
    }
  }
  createOrder = (data, actions) => {
    return actions.order.create({
      purchase_units: [
        {
          description: this.props.product,
          amount: {
            currency_code: "USD",
            value: this.props.price,
          },
        },
      ],
    });
  };

  onApprove = (data, actions) => {
    actions.order.capture().then((details) => {
      const paymentData = {
        payerID: data.payerID,
        orderID: data.orderID,
      };
      console.log("Payment Approved: ", paymentData);
      this.setState({ showButtons: false, paid: true });
    });
  };

  render() {
    const { showButtons, loading, paid } = this.state;

    return (
      <div className='mainPaypal'>
        {loading && <Spinner />}

        {showButtons && (
          <div>
            <div>
              <h4 className='purchaseItem'>
                {" "}
                Service:{" "}
                <span className='productInfo'>{this.props.product}</span>
              </h4>
              <h4 className='purchaseAmount'>
                Total: <span className='productInfo'>${this.props.price}</span>
              </h4>
            </div>

            <PayPalButton
              createOrder={(data, actions) => this.createOrder(data, actions)}
              onApprove={(data, actions) => this.onApprove(data, actions)}
            />
          </div>
        )}

        {paid && (
          <div className='mainPaypal'>
            <h2 className='thanks'>Thanks for your purchase of</h2>
            <h2>{this.props.product}!</h2>
            <p className='thankYouEmail'>
              For support please email support@millody.com
            </p>
          </div>
        )}
      </div>
    );
  }
}

export default scriptLoader(
  `https://www.paypal.com/sdk/js?client-id=${CLIENT_ID}`
)(PaypalButton);
