import React from "react";

const PrimaryButton = ({ btnText }) => {
  return (
    <button className="btn btn-primary uppercase text-white font-bold bg-gradient-to-r from-secondary to-primary">
      {btnText}
    </button>
  );
};

export default PrimaryButton;
