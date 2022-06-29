import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useRef, useState } from "react";
import "./TestimonialCarousel.css";
export default function TestimonialCarousel() {
  const [current, setCurrent] = useState(0);
  const activeItemRef = useRef(null);
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
      name: "Muhsin N",
    },
    {
      id: 3,
      image: "/images/Profile-Ellipse.png",
      content: "this is third",
      title: "Software Developer",
      name: "Sunny Kumar",
    },
    {
      id: 4,
      image: "/images/Profile-Ellipse.png",
      content: "This is fourth",
      title: "Software Developer",
      name: "Sakshi Pawan",
    },
    {
      id: 5,
      image: "/images/Profile-Ellipse.png",
      content: "this is fifth",
      title: "Software Developer",
      name: "Deepak",
    },
  ];

  const expandTheCard = (event, index) => {
    let activeCard = document.querySelector('.active--carousel')
    if (activeCard) {
      activeCard.classList.remove('active--carousel')
    }
    event.target.classList.add("active--carousel")
    setCurrent(index)
  }

  const handleSlide = (dir) => {
    
    if(dir === 1 && current < 4){
      setCurrent((prev) => prev + 1);
      activeItemRef.current.style.opacity = "0";
      setTimeout(()=>{
        activeItemRef.current.style.opacity = "1";
      },300)
    }
    if(dir === -1 && current > 0){
      setCurrent((prev) => prev - 1)
      activeItemRef.current.style.opacity = "0";
      setTimeout(()=>{
        activeItemRef.current.style.opacity = "1";
      },300)
    }
    
  }

  return (
    <div className="testimonial-carousel-container">
      <h1>Testimonials</h1>
      <h2>Our Success Story</h2>
      <div className="dailogue-box">
        <img src="/icons/quotes.png" className="quotes-icon" alt="" />
        <p>{list[current].content}</p>
      </div>
      <div className="carousel-items-container">
        <div className="left-slide-icon" onClick={() => handleSlide(-1)}>
          <FontAwesomeIcon icon={faChevronLeft} />
        </div>
        {
          window.innerWidth > 500 ?
            <div className="carousel-items-wrapper">
              {
                list.map((item, index) => (
                  <div className={"carousel--item " + (index == 2 ? "active--carousel" : null)} key={index} onClick={(event) => expandTheCard(event, index)}>
                    <img src="/icons/dailogue.png" alt="" className="dailogue-icon" />
                    <div className="carousel--item-body">
                      <img src={item.image} className="profile-img" alt="" />
                      <div className="profile-details">
                        <h3 className="profile-name">{item.name}</h3>
                        <p className="profile-designation">{item.title}</p>
                      </div>
                    </div>
                  </div>
                ))
              }
            </div>
            :
            <div className="carousel-items-wrapper">
                  <div className="carousel--item active--carousel" ref={activeItemRef}>
                    <img src="/icons/dailogue.png" alt="" className="dailogue-icon" />
                    <div className="carousel--item-body">
                      <img src={list[current].image} className="profile-img" alt="" />
                      <div className="profile-details">
                        <h3 className="profile-name">{list[current].name}</h3>
                        <p className="profile-designation">{list[current].title}</p>
                      </div>
                    </div>
                  </div>
            </div>
        }
        <div className="right-slide-icon" onClick={() => handleSlide(1)}>
          <FontAwesomeIcon icon={faChevronRight} />
        </div>
      </div>
    </div>
  );
}
