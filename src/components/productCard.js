import React from "react";
import ReactStars from "react-rating-stars-component";
import { Link, useLocation } from "react-router-dom";

const ProductCard = (props) => {
  const { grid } = props;
  let location = useLocation();
  return (
    <div
      className={`${location.pathname == "/ourstore" ? `gr-${grid}` : "col-3"}`}
    >
      <Link className="product-card position-relative">
        <div className="wish-list-icons position-absolute">
          <Link>
            <img src="images/wish.svg" alt="wishlist" />
          </Link>
        </div>

        <div className="product-image">
          <img
            src="images/watch.jpg"
            className="img-fluid"
            alt="product image"
          />
          <img
            src="images/headphone.jpg"
            className="img-fluid"
            alt="product image"
          />
        </div>

        <div className="product-details">
          <h6 className="brand">Havels</h6>
          <h5 className="product-title">
            Kid headphone bulk 10 pack multi colored for students
          </h5>
          <ReactStars
            count={5}
            size={24}
            value="4.5"
            edit={false}
            activeColor="#ffd700"
          />
          {console.log(grid === 12)}
          {grid ===12|| grid===6?<p className={`description `}>
            Elevate your lifestyle with the SmartFit Pro, the ultimate
            smartwatch designed for those who want to stay connected and healthy
            on the go.
          </p>:""}
          <p className="price">$100.00</p>
        </div>

        <div className="action-bar position-absolute">
          <div className="d-flex flex-column gap-15">
            <Link>
              <img src="images/prodCompare.svg" alt="add-cart" />
            </Link>
            <Link>
              <img src="images/view.svg" alt="add-cart" />
            </Link>
            <Link>
              <img src="images/add-cart.svg" alt="add-cart" />
            </Link>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
