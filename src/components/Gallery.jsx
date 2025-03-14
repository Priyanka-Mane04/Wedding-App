import React from "react";
import OwlCarousel from "react-owl-carousel3"; // Ensure this package is installed
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

// Carousel options
const options = {
  loop: true,
  margin: 0,
  nav: true,
  autoplay: true,
  autoplayTimeout: 3000,
  dots: false,
  navText: ["<", ">"], // Custom navigation arrows
  responsive: {
    0: { items: 1 },
    600: { items: 2 },
    1000: { items: 3 },
  },
};

function Gallery() {
  return (
    <div>
      {/* Gallery Start */}
      <div
        className="container-fluid bg-gallery"
        id="gallery"
        style={{ padding: "120px 0", margin: "90px 0" }}
      >
        <div
          className="section-title position-relative text-center"
          style={{ marginBottom: "120px" }}
        >
          <h6
            className="text-uppercase text-primary mb-3"
            style={{ letterSpacing: "3px" }}
          >
            Gallery
          </h6>
          <h1 className="font-secondary display-4 text-white">
            Our Photo Gallery
          </h1>
          <i className="far fa-heart text-white"></i>
        </div>

        {/* OwlCarousel Wrapper */}
        <OwlCarousel className="owl-theme" {...options}>
          {["gallery-1", "gallery-2", "gallery-3", "gallery-4", "gallery-5", "gallery-6"].map(
            (img, index) => (
              <div className="gallery-item text-center" key={index}>
                <img
                  className="img-fluid"
                  src={`/assets/img/${img}.jpg`}
                  alt={`Gallery ${index + 1}`}
                  style={{ width: "800px", height: "450px", objectFit: "cover" }} // Fixed style
                />
                <a href={`/assets/img/${img}.jpg`} data-lightbox="gallery">
                  <i className="fa fa-2x fa-plus text-white"></i>
                </a>
              </div>
            )
          )}
        </OwlCarousel>
      </div>
      {/* Gallery End */}
    </div>
  );
}

export default Gallery;
