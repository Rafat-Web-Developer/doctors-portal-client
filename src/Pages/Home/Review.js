import React from "react";

const Review = ({ reviewData }) => {
  const { name, location, img, review } = reviewData;
  return (
    <div className="card lg:mx-w-96 bg-base-100 shadow-xl">
      <div className="card-body">
        <h2 className="card-title">{review}</h2>
        <div className="flex items-center mt-5">
          <div className="avatar">
            <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 mr-3">
              <img src={img} alt="People_img" />
            </div>
          </div>
          <div>
            <h3 className="font-bold">{name}</h3>
            <p>{location}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
