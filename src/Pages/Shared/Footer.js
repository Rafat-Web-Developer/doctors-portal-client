import React from "react";
import footerImg from "../../assets/images/footer.png";

const Footer = () => {
  return (
    <footer
      style={{ backgroundImage: `url(${footerImg})`, backgroundSize: "cover" }}
    >
      <div className="footer p-10">
        <div>
          <span className="footer-title">Services</span>
          <span className="link link-hover">Branding</span>
          <span className="link link-hover">Design</span>
          <span className="link link-hover">Marketing</span>
          <span className="link link-hover">Advertisement</span>
        </div>
        <div>
          <span className="footer-title">Company</span>
          <span className="link link-hover">About us</span>
          <span className="link link-hover">Contact</span>
          <span className="link link-hover">Jobs</span>
          <span className="link link-hover">Press kit</span>
        </div>
        <div>
          <span className="footer-title">Legal</span>
          <span className="link link-hover">Terms of use</span>
          <span className="link link-hover">Privacy policy</span>
          <span className="link link-hover">Cookie policy</span>
        </div>
      </div>
      <div className="py-10 text-center">
        <p>
          Copyright © 2022 - All right reserved by{" "}
          <span className="text-primary font-bold">Rafat Hossain</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
