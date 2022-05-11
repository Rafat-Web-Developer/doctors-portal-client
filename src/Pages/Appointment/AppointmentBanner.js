import React, { useState } from "react";
import "react-day-picker/dist/style.css";
import { DayPicker } from "react-day-picker";
import chair from "../../assets/images/chair.png";

const AppointmentBanner = () => {
  const [selected, setSelected] = useState("");

  return (
    <section class="hero min-h-screen">
      <div class="hero-content flex-col lg:flex-row-reverse">
        <img
          src={chair}
          className="max-w-sm rounded-lg shadow-2xl lg:ml-10"
          alt="Banner_img"
        />
        <div className="mt-10">
          <DayPicker mode="single" selected={selected} onSelect={setSelected} />
        </div>
      </div>
    </section>
  );
};

export default AppointmentBanner;
