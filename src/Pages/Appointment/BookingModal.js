import { format } from "date-fns";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { toast } from "react-toastify";

const BookingModal = ({ date, treatment, setTreatment, refetch }) => {
  const { _id, name, slots } = treatment;
  const [user] = useAuthState(auth);
  const formattedDate = format(date, "PP");

  const handleSubmit = (e) => {
    e.preventDefault();
    const slot = e.target.appointmentSlotTime.value;
    const phone = e.target.phone.value;
    const booking = {
      treatment_id: _id,
      treatment_name: name,
      date: formattedDate,
      slot,
      patientEmail: user.email,
      patientName: user.displayName,
      phone,
    };

    fetch("https://obscure-harbor-59547.herokuapp.com/booking", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(booking),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.success) {
          toast("Booking Successfully Alhamdulillah.");
        } else {
          toast.error(data.message);
        }
        setTreatment(null);
        refetch();
      });
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
                disabled
                type="text"
                name="yourName"
                value={user?.displayName}
                className="input input-bordered w-full max-w-xs"
              />
              <input
                disabled
                type="email"
                name="email"
                value={user?.email}
                className="input input-bordered w-full max-w-xs"
              />
              <input
                type="text"
                name="phone"
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
