import React from "react";
import appointment from "../../assets/images/appointment.png";
import PrimaryButton from "../Shared/PrimaryButton";

const ContactForm = () => {
  return (
    <section
      style={{ backgroundImage: `url(${appointment})` }}
      className="flex justify-center py-16 mb-20"
    >
      <div>
        <div className="text-center mb-10">
          <h4 className="text-primary font-bold text-xl">Contact Us</h4>
          <p className="text-white text-3xl">Stay connected with us</p>
        </div>
        <div>
          <input
            type="email"
            placeholder="Email Address"
            className="input w-full mb-5 w-96"
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Subject"
            className="input w-full mb-5 w-96"
          />
        </div>
        <div>
          <textarea
            className="textarea w-96"
            placeholder="Your Message"
          ></textarea>
        </div>
        <div className="text-center mt-5">
          <PrimaryButton>Submit</PrimaryButton>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
