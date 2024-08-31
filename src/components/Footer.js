import React from "react";
import { Link } from "react-router-dom";
import { BsLinkedin, BsInstagram, BsTwitterX } from "react-icons/bs";

import { FaFacebookSquare, FaYoutube,FaGooglePlay  ,FaAppStore } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <footer className="py-4">
        <div className="container-xxl">
          <div className="row align-items-centre">
            <div className="col-5">
              <div className="footer-top-data  d-flex gap-30 align-items-center">
                <img src="images/newsletter.png" alt="newsletter"></img>
                <h2 className="mb-0 text-white">Sign Up for Newsletter</h2>
              </div>
            </div>
            <div className="col-7 ">
              <div className="input-group mb-3 ">
                <input
                  type="text"
                  className="form-control py-1"
                  placeholder="Email Address"
                  aria-label="Email Address"
                  aria-describedby="basic-addon2"
                />
                <span className="input-group-text p-2" id="basic-addon2">
                  Subscribe
                </span>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className="py-3">
        <div className="container-xxl">
          <div className="row">
            <div className="col-2">
              <h4 className="text-white mb-4"> Contact Us</h4>
              <address className="text-white  fs-9">
                Ho:121 Venjaramoodu,
                <br /> Tvm, Kerala <br /> 695610
              </address>
              <a
                href="tel: +1 (123) 654 9876 "
                className="mt-4 d-block mb-3 text-white  fs-9"
              >
                +1 (123) 654 9876
              </a>
              <a
                href="mailto: wishitall@gmail.com"
                className="mt-4 d-block mb-3 text-white  fs-9"
              >
                wishitall@gmail.com
              </a>
              <div className="social_icons d-flex align-items-center gap-15 mt-4 ">
                <a href="#">
                  <BsLinkedin className="text-white fs-8" />
                </a>
                <a href="#">
                  <BsInstagram className="text-white fs-8" />
                </a>
                <a href="#">
                  <BsTwitterX className="text-white fs-8" />
                </a>
                <a href="#">
                  <FaFacebookSquare className="text-white fs-8" />
                </a>
                <a href="#">
                  <FaYoutube className="text-white fs-8" />
                </a>
              </div>
            </div>
            <div className="col-2">
              <h4 className="text-white mb-4"> Information</h4>
              <div className="footer-links d-flex flex-column">
                <Link className="text-white py-2 mb-1 ">Privacy</Link>
                <Link className="text-white py-2 mb-1">Refund Policy</Link>
                <Link className="text-white py-2 mb-1">Shipping policy</Link>
                <Link className="text-white py-2 mb-1">
                  Terms and Conditions
                </Link>
                <Link className="text-white py-2 mb-1"> Blogs</Link>
              </div>
            </div>
            <div className="col-2">
              <h4 className="text-white mb-4"> Account</h4>
              <div className="footer-links d-flex flex-column">
                <Link className="text-white py-2 mb-1 ">About us</Link>
                <Link className="text-white py-2 mb-1">Faq</Link>
                <Link className="text-white py-2 mb-1">Contact</Link>
              </div>
            </div>
            <div className="col-2">
              <h4 className="text-white mb-4"> Quick Link</h4>
              <div className="footer-links d-flex flex-column">
                <Link className="text-white py-2 mb-1 ">Laptops</Link>
                <Link className="text-white py-2 mb-1">Tv</Link>
                <Link className="text-white py-2 mb-1">Watches</Link>
                <Link className="text-white py-2 mb-1">Tablets</Link>
              </div>
            </div>
            <div className="col-4">
              <h4 className="text-white mb-4"> Our App</h4>
              <div className="text-white">
                <h6>Download our app here and get Discount upto 30%</h6>
                <FaGooglePlay style={{ marginRight: "40px" }} />
                <FaAppStore />
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className="py-3">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <p className="text-center mb-0 text-white">
                {" "}
                &copy;{new Date().getFullYear()} powered by Ratna
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
