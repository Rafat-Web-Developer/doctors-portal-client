import { signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import auth from "../../firebase.init";

const MyAppointments = () => {
  const [user] = useAuthState(auth);
  const [bookings, setBookings] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      fetch(
        `https://obscure-harbor-59547.herokuapp.com/bookings?patientEmail=${user?.email}`,
        {
          method: "GET",
          headers: {
            authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
        }
      )
        .then((res) => {
          if (res.status === 401 || res.status === 403) {
            signOut(auth);
            localStorage.removeItem("accessToken");
            navigate("/");
          }
          res.json();
        })
        .then((data) => setBookings(data));
    }
  }, []);

  return (
    <div className="overflow-x-auto">
      <table className="table table-compact w-full">
        <thead>
          <tr>
            <th>#</th>
            <th>Treatment Name</th>
            <th>Date</th>
            <th>Time</th>
          </tr>
        </thead>
        <tbody>
          {bookings?.map((b, index) => (
            <tr key={b._id}>
              <th>{index + 1}</th>
              <td>{b?.treatment_name}</td>
              <td>{b?.date}</td>
              <td>{b?.slot}</td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <th>#</th>
            <th>Treatment Name</th>
            <th>Date</th>
            <th>Time</th>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};

export default MyAppointments;
