import React from "react";
import { Link } from "react-router-dom";

const BlogCard = () => {
  return (
    <div className="blog-card">
      <div className="card-images">
        <img src="images/blog-1.jpg" className="img-fluid w-100" alt="blog" />
      </div>
      <div className="blog-content p-4">
        <p className="date">1 Dec 2001 </p>
        <h5 className="title"> A beautiful sunday morning </h5>
        <p className="desc">
          It's a serene Sunday morning, and the world feels peaceful. The sun is
          just beginning to rise, casting a warm golden hue across the
          landscape. Birds are chirping softly, and there's a gentle breeze that
          carries the scent of blooming flowers.
        </p>
        <Link className="button" to="/">
          {" "}
          Read More
        </Link>
      </div>
    </div>
  );
};

export default BlogCard;
