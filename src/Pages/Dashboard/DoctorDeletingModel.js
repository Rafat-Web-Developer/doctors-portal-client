import React from "react";
import { toast } from "react-toastify";

const DoctorDeletingModel = ({ deletedDoctor, refetch, setDeletedDoctor }) => {
  const { name, email } = deletedDoctor;

  const handleDeleteDoctor = () => {
    fetch(`https://obscure-harbor-59547.herokuapp.com/${email}`, {
      method: "DELETE",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.deletedCount) {
          toast.success(`Doctor: ${name} is deleted.`);
          setDeletedDoctor(null);
          refetch();
        }
      });
  };

  return (
    <div>
      <input type="checkbox" id="doctor-delete-model" class="modal-toggle" />
      <div class="modal modal-bottom sm:modal-middle">
        <div class="modal-box">
          <h3 class="font-bold text-lg text-error">
            Confirm to delete {name}!
          </h3>
          <p class="py-4">
            Are you sure to delete doctor, whose name is{" "}
            <span className="text-error font-bold">{name}</span> and email is{" "}
            <span className="text-error font-bold">{email}</span>. To delete
            doctor click Delete button.
          </p>
          <div class="modal-action">
            <label
              onClick={handleDeleteDoctor}
              for="doctor-delete-model"
              class="btn btn-error"
            >
              Delete
            </label>
            <label for="doctor-delete-model" class="btn btn-primary">
              Cancel
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorDeletingModel;
