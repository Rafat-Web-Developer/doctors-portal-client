import React from "react";
import { useQuery } from "react-query";
import Loading from "../Shared/Loading";
import UsersRow from "./UsersRow";

const AllUsers = () => {
  const {
    data: users,
    isLoading,
    refetch,
  } = useQuery("users", () =>
    fetch("https://obscure-harbor-59547.herokuapp.com/users", {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => res.json())
  );
  if (isLoading) {
    return <Loading></Loading>;
  }
  return (
    <div>
      <h1 className="text-2xl font-bold mb-5">All Users</h1>
      <div className="overflow-x-auto">
        <table className="table table-compact w-full">
          <thead>
            <tr>
              <th>#</th>
              <th>User's Email</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <UsersRow
                key={user._id}
                user={user}
                index={index}
                refetch={refetch}
              ></UsersRow>
            ))}
          </tbody>
          <tfoot>
            <tr>
              <th>#</th>
              <th>User's Email</th>
              <th>Action</th>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
};

export default AllUsers;
