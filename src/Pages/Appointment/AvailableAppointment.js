import { format } from "date-fns";
import React from "react";

const AvailableAppointment = ({ date }) => {
  return (
    <section>
      <h4 className="text-xl text-secondary font-bold text-center">
        Available Appointment On {format(date, "PP")}
      </h4>
    </section>
  );
};

export default AvailableAppointment;
