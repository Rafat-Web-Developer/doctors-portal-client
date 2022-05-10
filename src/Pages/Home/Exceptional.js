import React from "react";
import treatment from "../../assets/images/treatment.png";
import PrimaryButton from "../Shared/PrimaryButton/PrimaryButton";

const Exceptional = () => {
  return (
    <div class="mb-20 card card-side bg-base-100 shadow-xl grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-4">
      <figure>
        <img src={treatment} alt="treatment_img" style={{ height: "476px" }} />
      </figure>
      <div class="card-body">
        <div>
          <h2 class="card-title text-5xl mb-10">
            Exceptional Dental Care, on Your Terms
          </h2>
          <p className="mb-10">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsumis that it has a more-or-less normal
            distribution of letters,as opposed to using 'Content here, content
            here', making it look like readable English. Many desktop publishing
            packages and web page
          </p>
          <PrimaryButton btnText="Get Started"></PrimaryButton>
        </div>
      </div>
    </div>
  );
};

export default Exceptional;
