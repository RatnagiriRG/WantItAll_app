import React from "react";
import { NavLink, Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <section className="home-wrapper-1 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-6">
              <div className="main-banner-content p-2">
                <img
                  src="images/main-banner-1.jpg"
                  className="img-fluid rounded-3"
                  alt="main banner"
                />
                <div className="main-banner-content position-absolute ">
                  <h4>SUPERCHARGED FOR PROS.</h4>
                  <h5>iPAD S134+ </h5>
                  <p>$29 to $99/mon</p>
                  <Link className="button">Buy Now</Link>
                </div>
              </div>
            </div>
            <div className="col-6">
              <div className="d-flex flex-wrap justify-content-between  align-items-center">
                <div className="small-banner position-relative p-2">
                  <img
                    src="images/catbanner-01.jpg"
                    className="img-fluid rounded-3"
                    alt="small banner"
                  />
                  <div className="small-banner-content position-absolute">
                    <h4>Best Sale</h4>
                    <h5>Laptop Max </h5>
                    <p>From $293 to $979/mon</p>
                  </div>
                </div>
                <div className="small-banner position-relative p-2">
                  <img
                    src="images/catbanner-02.jpg"
                    className="img-fluid rounded-3"
                    alt="small banner"
                  />
                  <div className="small-banner-content position-absolute">
                    <h4>15% off</h4>
                    <h5>Smart Watch 7 </h5>
                    <p>
                      shop the latest band <br /> style colors.
                    </p>
                  </div>
                </div>{" "}
                <div className="small-banner position-relative p-2">
                  <img
                    src="images/catbanner-03.jpg"
                    className="img-fluid rounded-3"
                    alt="small banner"
                  />
                  <div className="small-banner-content position-absolute">
                    <h4>15% off</h4>
                    <h5>Smart Watch 7 </h5>
                    <p>
                      shop the latest band <br /> style colors.
                    </p>
                  </div>
                </div>{" "}
                <div className="small-banner position-relative p-2">
                  <img
                    src="images/catbanner-04.jpg"
                    className="img-fluid rounded-3"
                    alt="small banner"
                  />
                  <div className="small-banner-content position-absolute">
                    <h4>15% off</h4>
                    <h5>Smart Watch 7 </h5>
                    <p>
                      shop the latest band <br /> style colors.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row ">
            <div className="col-12">
              <div className="services d-flex align-items-center justify-content-between">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
