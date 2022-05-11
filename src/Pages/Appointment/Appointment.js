import React, { useState } from "react";
import Footer from "../Shared/Footer";
import AppointmentBanner from "./AppointmentBanner";
import AvailableAppointment from "./AvailableAppointment";

const Appointment = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  return (
    <div>
      <main className="lg:px-12 md:px-12">
        <AppointmentBanner
          selectedDate={selectedDate}
          setSelectedDate={setSelectedDate}
        ></AppointmentBanner>
        <AvailableAppointment date={selectedDate}></AvailableAppointment>
      </main>
      <Footer></Footer>
    </div>
  );
};

export default Appointment;
