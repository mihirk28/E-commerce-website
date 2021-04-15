// npm i react-currency-format
import React, { useState } from "react";
import "./Subtotal.css";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "../StateProvider";
import { getBasketTotal } from "../reducer";
import { useHistory } from "react-router-dom";

function Subtotal() {
  const history = useHistory(); ///
  const [{ basket, user }, dispatch] = useStateValue();
  const [disabled, setDisabled] = useState("");

  const value = getBasketTotal(basket);
  const username = user?.email;

  const handleChange = () => {
    console.log(value);
    if (value === 0) {
      setDisabled(true);
      //const msg = "Your shopping basket is empty";
      //alert(msg);
    } else {
      setDisabled(false);
    }
    console.log(value);
  };

  const paymentPage = (e) => {
    console.log(username);
    if (!username) {
      history.push("/login");
    } else {
      history.push("/checkoutform");
    }
  };

  return (
    <div className="subtotal">
      <p>
        Ordered By: <strong>{!user ? "Guest User" : user?.email} </strong>
      </p>

      <p>
        Delivery address: <strong>{user?.displayName}</strong>
      </p>
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal ({basket.length} items): <strong>{value}</strong>
            </p>
          </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)}
        displayType={"text"}
        thousandSeperator={true}
        prefix={"€"}
      />
      <button
        type="submit"
        disabled={disabled}
        onMouseDownCapture={handleChange}
        onClick={paymentPage}
      >
        Proceed to Checkout
      </button>
    </div>
  );
}

export default Subtotal;
