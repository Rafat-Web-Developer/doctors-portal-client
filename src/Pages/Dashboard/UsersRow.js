import React from "react";

const UsersRow = ({ user, index }) => {
  return (
    <tr>
      <th>{index + 1}</th>
      <td>{user?.email}</td>
    </tr>
  );
};

export default UsersRow;
