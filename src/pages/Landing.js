import React from "react";
import logo from "../assets/images/logo.svg";
import main from "../assets/images/main.svg";

export const Landing = () => {
  return (
    <main>
      <nav>
        <img src={logo} alt="jobsterlogo" className="logo" />
      </nav>
      <div className="container page">
        <div className="info">
          <h1>
            job<span>tracking</span>app
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
    </main>
  );
};
