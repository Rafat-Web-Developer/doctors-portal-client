import React from "react";
import InfoCard from "./InfoCard";
import clock from "../../assets/icons/clock.svg";
import marker from "../../assets/icons/marker.svg";
import phone from "../../assets/icons/phone.svg";

const Info = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 px-12">
      <InfoCard
        icon={clock}
        infoTitle="Opening Hours"
        bgClass="bg-gradient-to-r from-secondary to-primary"
      ></InfoCard>
      <InfoCard
        icon={marker}
        infoTitle="Our Location"
        bgClass="bg-accent"
      ></InfoCard>
      <InfoCard
        icon={phone}
        infoTitle="Contact Us"
        bgClass="bg-gradient-to-r from-secondary to-primary"
      ></InfoCard>
    </div>
  );
};

export default Info;
