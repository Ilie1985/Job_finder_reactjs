import React from "react";
import {Logo} from "../components";
import main from "../assets/images/main.svg";
import Wrapper from "../assets/wrappers/LandingPage";

const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <Logo />
      </nav>
      <div className="container page">
        <div className="info">
          <h1>
            job <span> tracking </span> app
          </h1>
          <p>
            Tell your brand story, increase your followers and engage with
            companies directly. Post new job opportunities even faster and hire
            staff today.
          </p>
          <button className="btn btn-hero">Login/Register</button>
        </div>
        <img src={main} alt="main logo" className="img main-img" />
      </div>
    </Wrapper>
  );
};

export default Landing;
