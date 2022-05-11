import React from "react";

const Service = ({ service, setTreatment }) => {
  const { name, slots } = service;
  return (
    <div className="card lg:max-w-lg bg-base-100 shadow-xl">
      <div className="card-body text-center">
        <h2 className="text-secondary text-xl font-bold">{name}</h2>
        {slots.length ? (
          <span>{slots[0]}</span>
        ) : (
          <span className="text-error font-bold">Try Next Day</span>
        )}
        <span>
          {slots.length} {slots.length > 1 ? "spaces" : "space"} available
        </span>
        <div className="card-actions justify-center">
          <label
            onClick={() => setTreatment(service)}
            htmlFor="booking-modal"
            className="btn btn-secondary text-white"
            disabled={slots.length === 0}
          >
            Book Appointment
          </label>
        </div>
      </div>
    </div>
  );
};

export default Service;
