import React from "react";
import "./Login.css";
import { Link, useHistory } from "react-router-dom";

function Login() {
  return (
    <div className="login">
      <Link to="/">
        <img className="login__logo" alt="" />
      </Link>

      <div className="login__container">
        <h1>Sign in </h1>
        <form>
          <h5>E-mail</h5>
          <input type="email" />
          <h5>Password</h5>
          <input type="password" />
          <button className="login__signInButton">Sign in </button>
        </form>
        <p>
          By signing-in you agree to Taski's Conditions of Use & Sale. Please
          see our Privacy Notice, our Cookies Notice and our interest-based Ads
          Notice.{" "}
        </p>
        <button className="login__createButton">
          Create your Taski Account
        </button>
      </div>
    </div>
  );
}

export default Login;
