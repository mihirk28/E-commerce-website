import React, { useState } from "react";
import "./Login.css";
import { Link, useHistory } from "react-router-dom";
import { auth } from "../firebase";

function Login() {
  // useHistory helps to programatically change the url
  const history = useHistory();
  // set up email and password using useState
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [address, setAddress] = useState("");

  const signIn = (e) => {
    {
      /* e.preventDefault is to avoid refreshing after signIn*/
    }
    e.preventDefault();

    auth
      .signInWithEmailAndPassword(email, password)
      // after successful sign Up, it automatically brings to homepage
      .then((auth) => {
        history.push("/");
      })
      .catch((error) => alert(error.message));

    // firebase login process
  };

  const register = (e) => {
    e.preventDefault();

    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        // it is successfully created a new user with email & password

        // after successful sign Up, it automatically brings to homepage
        if (auth) {
          history.push("/");
          return auth.user.updateProfile({
            displayName: address,
          });
        }
      })
      .catch((error) => alert(error.message));

    // firebase register process
  };

  return (
    <div className="login">
      <Link to="/">
        <img
          className="login__logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
        />
      </Link>

      <div className="login__container">
        <h1>Sign in</h1>
        <form>
          <h5>Email</h5>
          {/* e = event */}
          {/* e.target.value = whatever the user types in email input */}
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <h5>Password</h5>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <h5>Address</h5>
          <input
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
          <button
            className="login__signInButton"
            type="submit"
            onClick={signIn}
          >
            Sign in
          </button>
          <button className="login__registerButton" onClick={register}>
            Create Account
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
