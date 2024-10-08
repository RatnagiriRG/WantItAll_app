import React from "react";
import { NavLink, Link } from "react-router-dom";

import { BsSearch } from "react-icons/bs";
const Header = () => {
  return (
    <>
      <header className="header-top-strip py-2">
        <div className="container-xxl ">
          <div className="row d-flex align-items-center">
            <div className="col-6">
              <p className="text-white mb-2 mt-2">
                Free Shipping Over $5 & Free Return
              </p>
            </div>
            <div className="col-6">
              <p className="text-end text-white mb-2 mt-2">
                Hotline:
                <a className="text-white" href="tel:++1 (123) 654 9876 ">
                  +1 (123) 654 9876
                </a>
              </p>
            </div>
          </div>
        </div>
      </header>
      <header className="header-upper py-3">
        <div className="container-xxl">
          <div className="row align-items-center">
            <div className="col-2">
              <h2>
                <Link to="/" className="text-white">
                  WishItAll
                </Link>
              </h2>
            </div>
            <div className="col-5 ">
              <div className="input-group mb-3 ">
                <input
                  type="text"
                  className="form-control py-2"
                  placeholder="Search Product here..."
                  aria-label="Search Product here..."
                  aria-describedby="basic-addon2"
                />
                <span className="input-group-text p-3" id="basic-addon2">
                  <BsSearch className="fs-6"></BsSearch>{" "}
                </span>
              </div>
            </div>
            <div className="col-5">
              <div className="header-upper-links d-flex align-item-center justify-content-between">
                <div>
                  <Link className="d-flex align-items-center gap-10 text-white">
                    <img src="images/compare.svg" alt="compare"></img>
                    <p classname="mb-0">
                      Compare
                      <br />
                      Product
                    </p>
                  </Link>
                </div>
                <div>
                  <Link className="d-flex align-items-center gap-10 text-white">
                    <img src="images/wishlist.svg" alt="wishlist"></img>
                    <p classname="mb-0">
                      Favorite
                      <br />
                      Wishlist
                    </p>
                  </Link>
                </div>
                <div>
                  <Link className="d-flex align-items-center gap-10 text-white">
                    <img src="images/user.svg" alt="user"></img>
                    <p classname="mb-0">
                      Login
                      <br />
                      My Account
                    </p>
                  </Link>
                </div>
                <div>
                  <Link className="d-flex align-items-center gap-10 text-white">
                    <img src="images/cart.svg" alt="cart"></img>
                    <div className="d-flex flex-column">
                      <span className="badge  bg-white text-dark">0</span>
                      <p classname="mb-0">$500</p>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <header className="header-bottom py-3">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="menu-button d-flex align-items-center gap-30">
                <div>
                  <div class="dropdown">
                    <button
                      class="btn btn-secondary dropdown-toggle bg-transparent border-0 d-flex align-items-center gap-15 "
                      type="button"
                      id="dropdownMenuButton1"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <img src="images/menu.svg" alt=""></img>{" "}
                      <span className="me-5 d-inline-block">
                        Shopping Category
                      </span>
                    </button>
                    <ul
                      class="dropdown-menu"
                      aria-labelledby="dropdownMenuButton1"
                    >
                      <li>
                        <a class="dropdown-item text-white" to="">
                          Action
                        </a>
                      </li>
                      <li>
                        <a class="dropdown-item text-white" to="">
                          Another action
                        </a>
                      </li>
                      <li>
                        <a class="dropdown-item text-white" to="">
                          Something else here
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="menu-links">
                  <div className="d-flex align-items-center gap-15">
                    <NavLink to="/" className="text-white">
                      Home
                    </NavLink>
                    <NavLink to="/ourstore" className="text-white">
                      Our Store
                    </NavLink>
                    <NavLink to="/blog" className="text-white">
                      Blogs
                    </NavLink>
                    <NavLink to="/contact" className="text-white">
                      Contact
                    </NavLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
