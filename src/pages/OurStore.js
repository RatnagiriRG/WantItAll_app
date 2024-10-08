import React, { useState } from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import ReactStars from "react-rating-stars-component";
import ProductCard from "../components/productCard";

const OurStore = () => {
  const [grid, setGrid] = useState(4);

  return (
    <>
      <Meta title="our store" />
      <BreadCrumb title="Our Store" />
      <div className="store-wrapper home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-3">
              <div className="filter-card mb-3">
                <h3 className="filter-title">Shop by Categories </h3>
                <div>
                  <ul className="ps-0">
                    <li>Watch</li>
                    <li>Tv</li>
                    <li>Camera</li>
                    <li>Laptop</li>
                  </ul>
                </div>
              </div>
              <div className="filter-card mb-3">
                <h3 className="filter-title">Filter By</h3>
                <div>
                  <h5 className="sub-title">Availability</h5>
                  <div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckIndeterminate"
                      />
                      <label
                        className="form-check-label"
                        for="flexCheckIndeterminate"
                      >
                        In Stock (15)
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckIndeterminate"
                      />
                      <label
                        className="form-check-label"
                        for="flexCheckIndeterminate"
                      >
                        Out Of Stock (2)
                      </label>
                    </div>
                  </div>
                  <h5 className="sub-title">Price</h5>
                  <div className="d-flex align-items-center gap-10">
                    <div className="form-floating mb-3">
                      <input
                        type="email"
                        className="form-control py-1"
                        id="floatingInput"
                        placeholder="From"
                      />
                      <label for="floatingInput">$</label>
                    </div>
                    <div className="form-floating mb-3">
                      <input
                        type="email"
                        className="form-control py-1"
                        id="floatingInput"
                        placeholder="to"
                      />
                      <label for="floatingInput">$</label>
                    </div>
                  </div>
                  <h5 className="sub-title">Color</h5>
                  <div>
                    <ul className="colors ps-0">
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                    </ul>
                  </div>
                  <h5 className="sub-title">Size</h5>
                  <div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="color-1"
                      />
                      <label
                        htmlFor="color-1"
                        className="form-check-label"
                        for="flexCheckIndeterminate"
                      >
                        S (2)
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="color-2"
                      />
                      <label
                        htmlFor="color-2"
                        className="form-check-label"
                        for="flexCheckIndeterminate"
                      >
                        M (5)
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="color-3"
                      />
                      <label
                        htmlFor="color-3"
                        className="form-check-label"
                        for="flexCheckIndeterminate"
                      >
                        L (2)
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="color-4"
                      />
                      <label
                        htmlFor="color-4"
                        className="form-check-label"
                        for="flexCheckIndeterminate"
                      >
                        Xl (8)
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="color-5"
                      />
                      <label
                        htmlFor="color-5"
                        className="form-check-label"
                        for="flexCheckIndeterminate"
                      >
                        XXL (4)
                      </label>
                    </div>
                  </div>
                </div>
              </div>
              <div className="filter-card mb-3">
                <h3 className="filter-title">Product Tags</h3>
                <div className="product-tags d-flex  flex-wrap align-items-center gap-10">
                  <span className="badge bg-light  text-secondary rounded-3 py-2  px-2">
                    HeadPhone
                  </span>
                  <span className="badge bg-light  text-secondary rounded-3 py-2  px-2">
                    Laptop
                  </span>
                  <span className="badge bg-light  text-secondary rounded-3 py-2  px-2">
                    Mobile
                  </span>
                  <span className="badge bg-light  text-secondary rounded-3 py-2  px-2">
                    Vivo
                  </span>
                </div>
              </div>
              <div className="filter-card mb-3">
                <h3 className="filter-title">Random Product</h3>
                <div className="random-products mb-3 d-flex">
                  <div className="w-50">
                    <img
                      src="images/watch.jpg"
                      alt="watch"
                      className="img-fluid"
                    />
                  </div>
                  <div className="w-50">
                    <h5>
                      Kids headphones bulk 10 packs multi color for students
                    </h5>
                    <ReactStars
                      count={5}
                      size={20}
                      value="4.5"
                      edit={false}
                      activeColor="#ffd700"
                    />
                    <b>$200</b>
                  </div>
                </div>{" "}
                <div className="random-products mb-3 d-flex">
                  <div className="w-50">
                    <img
                      src="images/watch.jpg"
                      alt="watch"
                      className="img-fluid"
                    />
                  </div>
                  <div className="w-50">
                    <h5>
                      Kids headphones bulk 10 packs multi color for students
                    </h5>
                    <ReactStars
                      count={5}
                      size={20}
                      value="4.5"
                      edit={false}
                      activeColor="#ffd700"
                    />
                    <b>$200</b>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-9">
              <div className="filter-sort-grid">
                <div className="d-flex justify-content-between align-items-center">
                  <div className="d-flex align-items-center gap-10">
                    <p className="mb-0 d-block " style={{ width: "100px" }}>
                      Sort By:
                    </p>
                    <select name="" className="form-control from-select" id="">
                      <option value="manual">Featured</option>
                      <option value="best-selling" selected="selected">
                        Best Selling
                      </option>
                      <option value="title-ascending">
                        Alphabetically, A-Z
                      </option>
                      <option value="title-descending">
                        Alphabetically, Z-A
                      </option>
                      <option value="price-ascending">Price, low-high</option>
                      <option value="price-descending">Price, high-low</option>
                      <option value="created-ascending">Date, old-new</option>
                      <option value="created-descending">Date, new-old</option>
                    </select>
                  </div>
                  <div className="d-flex align-items-center gap-10">
                    <p className="totalproducts mb-0">21 Products</p>
                    <div className="d-flex gap-10 align-items-center grid">
                      <img
                        onClick={() => {
                          setGrid(3);
                        }}
                        src="images/gr4.svg"
                        className="d-block img-fluid"
                        alt="grid"
                      />
                      <img
                        onClick={() => {
                          setGrid(4);
                        }}
                        src="images/gr3.svg"
                        className="d-block img-fluid"
                        alt="grid"
                      />
                      <img
                        onClick={() => {
                          setGrid(6);
                        }}
                        src="images/gr2.svg"
                        className="d-block img-fluid"
                        alt="grid"
                      />
                      <img
                        onClick={() => {
                          setGrid(12);
                        }}
                        src="images/gr.svg"
                        className="d-block img-fluid"
                        alt="grid"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="products-list py-3 ">
                <div className="d-flex    flex-wrap grid-product">
                  <ProductCard grid={grid} />
                  <ProductCard grid={grid} />
                  <ProductCard grid={grid} /> <ProductCard grid={grid} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurStore;
