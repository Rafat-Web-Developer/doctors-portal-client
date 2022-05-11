import { format } from "date-fns";
import React from "react";

const BookingModal = ({ date, treatment, setTreatment }) => {
  const { _id, name, slots } = treatment;

  const handleSubmit = (e) => {
    e.preventDefault();
    const appointmentDate = e.target.appointmentDate.value;
    const appointmentSlotTime = e.target.appointmentSlotTime.value;
    const data = {
      _id,
      name,
      appointmentDate,
      appointmentSlotTime,
    };
    console.log(data);
    setTreatment(null);
  };

  return (
    <div>
      <input type="checkbox" id="booking-modal" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <label
            htmlFor="booking-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="font-bold text-lg text-secondary">
            Booking On : {name}
          </h3>
          <div className="py-4">
            <form
              onSubmit={handleSubmit}
              className="grid grid-cols-1 gap-4 justify-items-center"
            >
              <input
                disabled
                type="text"
                name="appointmentDate"
                value={format(date, "PP")}
                className="input input-bordered w-full max-w-xs"
              />
              <select
                name="appointmentSlotTime"
                className="select select-bordered w-full max-w-xs"
              >
                {slots?.map((slot, index) => (
                  <option key={index} value={slot}>
                    {slot}
                  </option>
                ))}
              </select>
              <input
                type="text"
                name="yourName"
                placeholder="Enter your name"
                className="input input-bordered w-full max-w-xs"
              />
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                className="input input-bordered w-full max-w-xs"
              />
              <input
                type="text"
                name="number"
                placeholder="Enter your mobile number"
                className="input input-bordered w-full max-w-xs"
              />
              <input
                type="submit"
                value="Submit"
                className="btn btn-secondary text-white font-bold w-full max-w-xs"
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;
