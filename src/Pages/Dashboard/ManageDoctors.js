import React, { useState } from "react";
import { useQuery } from "react-query";
import Loading from "../Shared/Loading";
import DoctorDeletingModel from "./DoctorDeletingModel";
import DoctorRow from "./DoctorRow";

const ManageDoctors = () => {
  const [deletedDoctor, setDeletedDoctor] = useState(null);

  const {
    data: doctors,
    isLoading,
    refetch,
  } = useQuery("doctors", () =>
    fetch("https://obscure-harbor-59547.herokuapp.com/doctor", {
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
      <h1 className="text-2xl font-bold mb-5">Manage Doctors</h1>
      <div className="overflow-x-auto">
        <table className="table table-compact w-full">
          <thead>
            <tr>
              <th>#</th>
              <th>Avatar</th>
              <th>Doctor's Name</th>
              <th>Doctor's Email</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {doctors.map((doctor, index) => (
              <DoctorRow
                key={doctor._id}
                doctor={doctor}
                index={index}
                setDeletedDoctor={setDeletedDoctor}
              ></DoctorRow>
            ))}
          </tbody>
          <tfoot>
            <tr>
              <th>#</th>
              <th>Avatar</th>
              <th>Doctor's Name</th>
              <th>Doctor's Email</th>
              <th>Action</th>
            </tr>
          </tfoot>
        </table>
      </div>
      {deletedDoctor && (
        <DoctorDeletingModel
          deletedDoctor={deletedDoctor}
          refetch={refetch}
          setDeletedDoctor={setDeletedDoctor}
        ></DoctorDeletingModel>
      )}
    </div>
  );
};

export default ManageDoctors;
