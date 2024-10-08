import React from "react";
import ReactStars from "react-rating-stars-component";
import { Link } from "react-router-dom";

const SpecialProduct = () => {
  return (
    <div className="col-6 mb-3">
      <div className="special-product-cart">
        <div className="d-flex justify-content-between">
          <div>
            <img src="images/watch.jpg" className="img-fluid" alt="" />
          </div>
          <div className="special-product-content">
            <h5 className="brand">Havels</h5>
            <h6 className="title">Pixel Watch ,Gps HeartRate Sensor...</h6>
            <ReactStars
              count={5}
              size={24}
              value="4.5"
              edit={false}
              activeColor="#ffd700"
            />
            <p className="price">
              <span className="red-p">$100 </span> &nbsp; <strike>$200</strike>
            </p>
            <div className="discount-till d-flex align-items-center">
              <p className="mb-0">
                <b>5 days</b>
              </p>
              <div className="d-flex gap-10 align-items-center">
                <span className="badge rounded-circle p-2 bg-danger">1</span>:
                <span className="badge rounded-circle p-2 bg-danger">1</span>:
                <span className="badge rounded-circle p-2 bg-danger">1</span>
              </div>
            </div>
            <div className="prod-count">
              <p>Product 5</p>
              <div class="progress my-3">
                <div
                  className="progress-bar"
                  role="progressbar"
                  style={{ width: "25%" }}
                  aria-valuenow="25"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
              <Link className="button">Add to Cart</Link>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SpecialProduct;
