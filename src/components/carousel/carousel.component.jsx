import React from "react";
import { useEffect } from "react";

import "./carousel.styles.scss";

const Carousel = () => {
  useEffect(() => {
    const M = window.M;

    document.addEventListener("DOMContentLoaded", function () {
      var elems = document.querySelectorAll(".carousel");
      // eslint-disable-next-line
      var instances = M.Carousel.init(elems, {
        fullWidth: true,
        indicators: true
      });
    });
  }, []);

  return (
    <div className="carousel carousel-slider center">
      <a className="carousel-item" href="#one!">
        <img
          alt="banner-img-1"
          src="https://images.unsplash.com/photo-1512436991641-6745cdb1723f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
        />
      </a>
      <a className="carousel-item" href="#two!">
        <img
          alt="banner-img-2"
          src="https://images.unsplash.com/photo-1523199455310-87b16c0eed11?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
        />
      </a>
      <a className="carousel-item" href="#three!">
        <img
          alt="banner-img-3"
          src="https://images.unsplash.com/photo-1505022610485-0249ba5b3675?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
        />
      </a>
      <a className="carousel-item" href="#four!">
        <img
          alt="banner-img-4"
          src="https://images.unsplash.com/photo-1485230895905-ec40ba36b9bc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
        />
      </a>
    </div>
  );
};

export default Carousel;
