import React from "react";

const Service = ({ service }) => {
  const { name, slot } = service;
  return (
    <div class="card lg:max-w-lg bg-base-100 shadow-xl">
      <div class="card-body text-center">
        <h2 class="text-secondary text-xl font-bold">{name}</h2>
        <p>Slot</p>
        <div class="card-actions justify-center">
          <button class="btn btn-secondary text-white">Book Appointment</button>
        </div>
      </div>
    </div>
  );
};

export default Service;
