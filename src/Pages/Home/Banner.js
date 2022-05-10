import React from "react";
import chair from "../../assets/images/chair.png";
import PrimaryButton from "../Shared/PrimaryButton";
import bg from "../../assets/images/bg.png";

const Banner = () => {
  return (
    <section
      style={{ backgroundImage: `url(${bg})` }}
      className="hero min-h-screen mb-20"
    >
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img
          src={chair}
          className="max-w-sm rounded-lg shadow-2xl"
          alt="Banner_image"
        />
        <div>
          <h1 className="text-5xl font-bold">Your New Smile Start Here</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi.
          </p>
          <PrimaryButton>Get Started</PrimaryButton>
        </div>
      </div>
    </section>
  );
};

export default Banner;
