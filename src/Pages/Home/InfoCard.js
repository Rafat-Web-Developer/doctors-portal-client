import React from "react";

const InfoCard = ({ icon }) => {
  return (
    <div class="card lg:card-side bg-base-100 shadow-xl bg-accent">
      <figure>
        <img src={icon} alt="icon_img" />
      </figure>
      <div class="card-body">
        <h2 class="card-title">New album is released!</h2>
        <p>Click the button to listen on Spotiwhy app.</p>
      </div>
    </div>
  );
};

export default InfoCard;
