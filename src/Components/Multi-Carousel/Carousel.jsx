import React from "react";
import "./Carousel.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
export default function MultiCarousel() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <div className="Multi-Card-Carousel">
      <Carousel responsive={responsive}>
        <div className="Multi-Card-Slide">
          <div className="Slide-Image">
            <iframe
              src="https://www.youtube.com/embed/_ExsJZxhvDY"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
          <div className="Slide-Content">
            <h3>Akash Singh</h3>
            <p>Keep the good work</p>
            <p>Keep the good work</p>
            <p>Keep the good work</p>
          </div>
        </div>
        <div className="Multi-Card-Slide">
          <div className="Slide-Image">
            <iframe
              src="https://www.youtube.com/embed/_ExsJZxhvDY"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
          <div className="Slide-Content">
            <h3>Akash Singh</h3>
            <p>Keep the good work</p>
            <p>Keep the good work</p>
            <p>Keep the good work</p>
          </div>
        </div>
        <div className="Multi-Card-Slide">
          <div className="Slide-Image">
            <iframe
              src="https://www.youtube.com/embed/_ExsJZxhvDY"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
          <div className="Slide-Content">
            <h3>Akash Singh</h3>
            <p>Keep the good work</p>
            <p>Keep the good work</p>
            <p>Keep the good work</p>
          </div>
        </div>
        <div className="Multi-Card-Slide">
          <div className="Slide-Image">
            <iframe
              src="https://www.youtube.com/embed/_ExsJZxhvDY"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
          <div className="Slide-Content">
            <h3>Akash Singh</h3>
            <p>Keep the good work</p>
            <p>Keep the good work</p>
            <p>Keep the good work</p>
          </div>
        </div>
        <div className="Multi-Card-Slide">
          <div className="Slide-Image">
            <iframe
              src="https://www.youtube.com/embed/_ExsJZxhvDY"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
          <div className="Slide-Content">
            <h3>Akash Singh</h3>
            <p>Keep the good work</p>
            <p>Keep the good work</p>
            <p>Keep the good work</p>
          </div>
        </div>
        <div className="Multi-Card-Slide">
          <div className="Slide-Image">
            <iframe
              src="https://www.youtube.com/embed/_ExsJZxhvDY"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
          <div className="Slide-Content">
            <h3>Akash Singh</h3>
            <p>Keep the good work</p>
            <p>Keep the good work</p>
            <p>Keep the good work</p>
          </div>
        </div>
      </Carousel>
    </div>
  );
}
