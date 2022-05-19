import React from "react";

const DoctorRow = ({ doctor, index, setDeletedDoctor }) => {
  const { img, name, email } = doctor;
  return (
    <tr className="font-bold">
      <th>{index + 1}</th>
      <th>
        <div class="avatar">
          <div class="w-8 rounded">
            <img src={img} alt={name} />
          </div>
        </div>
      </th>
      <td>{name}</td>
      <td>{email}</td>
      <td>
        <label
          onClick={() => setDeletedDoctor(doctor)}
          for="doctor-delete-model"
          class="btn btn-xs btn-error font-bold text-white"
        >
          Delete
        </label>
      </td>
    </tr>
  );
};

export default DoctorRow;
