import React, { useState } from "react";
import "./Login.css";
import { Link, useHistory } from "react-router-dom";
import { auth } from "../firebase";

function Login() {
  // useHistory helps to programatically change the url
  const history = useHistory();
  // set up email and password using useState
  const [email, setEmail] = useState("");
  const [email1, setEmail1] = useState("");
  const [pw, setPw] = useState("");
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
      .createUserWithEmailAndPassword(email1, pw)
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
          src="https://i.pinimg.com/originals/63/0d/96/630d96bbb40088587c50e1fc7307c10a.png"
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
          <button
            className="login__signInButton"
            type="submit"
            onClick={signIn}
          >
            Sign in
          </button>
        </form>
      </div>
      <div className="login__container">
        <h1>New Account</h1>
        <form>
          <h5>Email</h5>
          {/* e = event */}
          {/* e.target.value = whatever the user types in email input */}
          <input
            type="text"
            value={email1}
            onChange={(e) => setEmail1(e.target.value)}
          />
          <h5>Password</h5>
          <input
            type="password"
            value={pw}
            onChange={(e) => setPw(e.target.value)}
          />
          <h5>Address</h5>
          <input
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
          <button className="login__registerButton" onClick={register}>
            Create Account
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
