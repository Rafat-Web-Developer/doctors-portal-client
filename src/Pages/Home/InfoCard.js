import React from "react";

const InfoCard = ({ icon, infoTitle, bgClass }) => {
  return (
    <div
      className={`card lg:card-side bg-base-100 shadow-xl text-white pl-5 ${bgClass}`}
    >
      <figure>
        <img src={icon} alt="icon_img" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{infoTitle}</h2>
        <p>Click the button to listen on Spotiwhy app.</p>
      </div>
    </div>
  );
};

export default InfoCard;
