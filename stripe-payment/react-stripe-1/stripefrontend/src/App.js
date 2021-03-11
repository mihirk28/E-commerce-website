import logo from "./logo.svg";
import "./App.css";
import StripeCheckout from "react-stripe-checkout";
import { useState } from "react";

function App() {
  const [product, setProduct] = useState({
    name: "React from FB",
    price: 10,
    productBy: "facebook",
  });

  const makePayment = (token) => {
    const body = {
      token,
      product,
    };
    const headers = {
      "Content-Type": "application/json",
    };

    return fetch(`http://localhost:8282/payment`, {
      method: "POST",
      headers,
      body: JSON.stringify(body),
    })
      .then((response) => {
        console.log("RESPONSE", response);
        const { status } = response;
        console.log("STATUS", status);
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <a
          className="App-link"
          href="#"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <h1>Product Name: {product.name}</h1>
        <h2>Price: {product.price}$</h2>
        <StripeCheckout
          stripeKey="pk_test_51IT86CExWNxTV3d9mifRQWlEeRvnlcj4CxnzXFJd3ymcXNwv8FcnVN0cRDYBQg1oVS8zTmp5Ww33jBivc4G15hwE00xcL9BJOs"
          token={makePayment}
          name="Buy React"
          amount={product.price * 100}
        >
          <button className="waves-effect waves-light btn">Buy Now</button>
        </StripeCheckout>
      </header>
    </div>
  );
}

export default App;
// 42:40
