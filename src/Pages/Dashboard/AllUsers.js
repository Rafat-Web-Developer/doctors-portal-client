import React from "react";
import { useQuery } from "react-query";
import Loading from "../Shared/Loading";
import UsersRow from "./UsersRow";

const AllUsers = () => {
  const { data: users, isLoading } = useQuery("users", () =>
    fetch("http://localhost:5000/users").then((res) => res.json())
  );
  if (isLoading) {
    return <Loading></Loading>;
  }
  return (
    <div>
      <h1 className="text-2xl font-bold mb-5">All Users {users.length}</h1>
      <div class="overflow-x-auto">
        <table class="table table-compact w-full">
          <thead>
            <tr>
              <th>#</th>
              <th>User's Email</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <UsersRow key={user._id} user={user} index={index}></UsersRow>
            ))}
          </tbody>
          <tfoot>
            <tr>
              <th>#</th>
              <th>User's Email</th>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
};

export default AllUsers;
