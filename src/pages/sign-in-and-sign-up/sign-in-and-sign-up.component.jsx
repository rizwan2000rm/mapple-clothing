import React from "react";

import SignIn from "../../components/sign-in/sign-in.component";
import SignUp from "../../components/sign-up/sign-up.component";

import "./sign-in-and-sign-up.styles.scss";

const SignInAndSignUpPage = () => (
  <div className="container">
    <div className="row">
      <div className="col s12 l6">
        <SignIn />
      </div>
      <div className="col s12 l6">
        <SignUp />
      </div>
    </div>
  </div>
);

export default SignInAndSignUpPage;
