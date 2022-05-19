import React from "react";

const DoctorRow = ({ doctor, index, refetch }) => {
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
        <button className="btn btn-xs btn-secondary font-bold text-white">
          Delete
        </button>
      </td>
    </tr>
  );
};

export default DoctorRow;
