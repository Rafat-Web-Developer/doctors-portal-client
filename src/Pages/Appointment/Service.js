import React from "react";

const Service = ({ service }) => {
  const { name, slots } = service;
  return (
    <div class="card lg:max-w-lg bg-base-100 shadow-xl">
      <div class="card-body text-center">
        <h2 class="text-secondary text-xl font-bold">{name}</h2>
        {slots.length ? (
          <span>{slots[0]}</span>
        ) : (
          <span className="text-error font-bold">Try Next Day</span>
        )}
        <span>
          {slots.length} {slots.length > 1 ? "spaces" : "space"} available
        </span>
        <div class="card-actions justify-center">
          <button
            class="btn btn-secondary text-white"
            disabled={slots.length === 0}
          >
            Book Appointment
          </button>
        </div>
      </div>
    </div>
  );
};

export default Service;
