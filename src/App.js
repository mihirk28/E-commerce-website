// npm install react-router-dom for additional web pages in react
import React, { useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Checkout from "./components/Checkout";
import Login from "./components/Login";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";
import Payment from "./components/Payment";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./components/CheckoutForm";
import Orders from "./components/Orders";

const stripePromise = loadStripe(
  "pk_test_51IT86CExWNxTV3d9mifRQWlEeRvnlcj4CxnzXFJd3ymcXNwv8FcnVN0cRDYBQg1oVS8zTmp5Ww33jBivc4G15hwE00xcL9BJOs"
);

function App() {
  const [{}, dispatch] = useStateValue();
  // to keep the track of who signed in
  useEffect(() => {
    // will only run once when the app component loads

    auth.onAuthStateChanged((authUser) => {
      console.log("THE USER IS =", authUser);

      if (authUser) {
        // the user just logged in / the user was logged in

        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // the user is logged out

        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);

  return (
    <Router>
      <div className="App">
        {/* Header */}
        <Switch>
          <Route path="/orders">
            <Header />
            <Orders />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path="/checkoutform">
            <Header />
            <Elements stripe={stripePromise}>
              <CheckoutForm />
            </Elements>
          </Route>
          <Route path="/">
            <Header />
            {/* Home */}
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
