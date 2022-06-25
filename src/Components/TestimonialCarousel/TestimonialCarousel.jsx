import React, { useEffect, useState } from "react";
import "./TestimonialCarousel.css";
export default function TestimonialCarousel() {
  const [current, setCurrent] = useState(0);

  const list = [
    {
      id: 1,
      image: "/images/Profile-Ellipse.png",
      content:
        "Excellent Overall . They are very nicethe staff are very accomadating and Great experience, glad i came here",
      title: "Software Developer",
      name: "Alan Neupane",
    },
    {
      id: 2,
      image: "/images/Profile-Ellipse.png",
      content: "This is second",
      title: "Software Developer",
      name: "Alan Neupane",
    },
    {
      id: 3,
      image: "/images/Profile-Ellipse.png",
      content: "this is third",
      title: "Software Developer",
      name: "Alan Neupane",
    },
    {
      id: 4,
      image: "/images/Profile-Ellipse.png",
      content: "This is fourth",
      title: "Software Developer",
      name: "Alan Neupane",
    },
    {
      id: 5,
      image: "/images/Profile-Ellipse.png",
      content: "this is fifth",
      title: "Software Developer",
      name: "Alan Neupane",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      console.log(list.length);
      if (current < list.length - 1) {
        setCurrent(current + 1);
      } else {
        clearInterval();
        setCurrent(0);
      }
    }, 2000);
    return () => clearInterval(interval);
  }, [current]);

  return (
    <div className="TestimonialCarousel-Container">
      <div className="testimonial-container">
        <h1>Testimonials</h1>
        <h2>Our Success Story</h2>
        <div className="testimonial-card">
          <p>{list[current].content}</p>
        </div>
        <div className="people">
          {list.map((item) => (
            <div className={item.id === list[current].id && "big"}>
              <div className="People-Profile">
                <img
                  key={item.id}
                  src={item.image}
                  className={item.id === list[current].id}
                  alt=""
                />
              </div>

              {item.id === current + 1 && (
                <div className="info">
                  <h4>{item.name}</h4>
                  <p>{item.title}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
