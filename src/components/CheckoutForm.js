import React, { useState } from "react";
import "./CheckoutForm.css";
import {
  Elements,
  CardElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import axios from "axios";
import { useHistory } from "react-router";
import CurrencyFormat from "react-currency-format";
import { getBasketTotal } from "../reducer";
import { useStateValue } from "../StateProvider";
import { db } from "../firebase";

function CheckoutForm() {
  const [{ basket, user }, dispatch] = useStateValue();
  const [processing, setProcessing] = useState("");
  const history = useHistory();
  const [success, setSuccess] = useState(false);
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setProcessing(true);
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardElement),
    });

    if (!error) {
      try {
        const { id } = paymentMethod;
        const response = await axios.post("http://localhost:5000/payment", {
          amount: getBasketTotal(basket) * 100,
          id,
          customer: user?.email,
        });

        if (response.data.success) {
          // firebase database
          console.log(user?.uid);
          db.collection("users")
            .doc(user?.uid)
            .collection("orders")
            .doc(`${id}`)
            .set({
              basket: basket,
              amount: getBasketTotal(basket),
              created: paymentMethod.created,
            });

          console.log("Successful payment");
          setSuccess(true);
          setProcessing(false);

          dispatch({
            type: "EMPTY_BASKET",
          });

          history.replace("/orders");
        }
      } catch (error) {
        console.log("Error", error);
      }
    } else {
      console.log(error.message);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="checkoutForm__form">
        <h2>Payment Form</h2>
        <CurrencyFormat
          renderText={(value) => (
            <>
              <p>
                Amount: <strong>{value}</strong>
              </p>
            </>
          )}
          decimalScale={2}
          value={getBasketTotal(basket)}
          displayType={"text"}
          thousandSeperator={true}
          prefix={"€"}
        />
        <CardElement />
        <button type="submit" disabled={!stripe || processing || success}>
          Pay
        </button>
      </form>
    </div>
  );
}

export default CheckoutForm;
