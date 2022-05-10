import React from "react";
import quote from "../../assets/icons/quote.svg";
import people1 from "../../assets/images/people1.png";
import people2 from "../../assets/images/people2.png";
import people3 from "../../assets/images/people3.png";
import Review from "./Review";

const Testimonials = () => {
  const reviews = [
    {
      _id: 1,
      name: "Shahadat Hossain",
      review:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero pariatur fuga aliquid. Voluptates, magnam explicabo inventore facilis deserunt eum repellat.",
      location: "Bangladesh",
      img: people1,
    },
    {
      _id: 2,
      name: "Rafat Hossain",
      review:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero pariatur fuga aliquid. Voluptates, magnam explicabo inventore facilis deserunt eum repellat.",
      location: "Bangladesh",
      img: people2,
    },
    {
      _id: 3,
      name: "Nusrat Hossain",
      review:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero pariatur fuga aliquid. Voluptates, magnam explicabo inventore facilis deserunt eum repellat.",
      location: "Bangladesh",
      img: people3,
    },
  ];

  return (
    <section className="mb-20">
      <div className="flex justify-between">
        <div>
          <h4 className="text-primary text-xl font-bold">Testimonials</h4>
          <p className="text-3xl">What our patients says</p>
        </div>
        <div>
          <img src={quote} className="w-24 lg:w-48" alt="quote_img" />
        </div>
      </div>
      <div className="mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {reviews.map((review) => (
          <Review key={review._id} reviewData={review}></Review>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
