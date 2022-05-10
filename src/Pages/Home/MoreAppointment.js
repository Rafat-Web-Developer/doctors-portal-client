import React from "react";
import PrimaryButton from "../Shared/PrimaryButton";
import doctor from "../../assets/images/doctor.png";
import appointment from "../../assets/images/appointment.png";

const MoreAppointment = () => {
  return (
    <section
      style={{ backgroundImage: `url(${appointment})` }}
      className="mb-20 flex justify-center items-center"
    >
      <div className="flex-1 hidden lg:block">
        <img src={doctor} alt="Doctor_image" className="mt-[-100px]" />
      </div>
      <div className="flex-1 text-white p-5">
        <h2 className="text-xl text-primary font-bold">Appointment</h2>
        <h3 className="text-3xl">Make An Appointment Today</h3>
        <p className="mb-5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic ab magnam
          sed minus cumque autem ipsam debitis illo illum culpa accusantium,
          eaque praesentium rem optio vero aspernatur expedita, esse maxime est
          aliquam, qui eius doloremque tenetur reiciendis. Nam, cum eos.
        </p>
        <PrimaryButton>Get Started</PrimaryButton>
      </div>
    </section>
  );
};

export default MoreAppointment;
