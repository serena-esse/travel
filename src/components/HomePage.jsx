import React, { useState } from "react";
import "./HomePage.css";

const videoSlides = [
  {
    videoSrc: "media/mare.mp4",
    title: "Happiness comes in waves",
    text: "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born.",
  },
  {
    videoSrc: "media/mountains.mp4",
    title: "Mountains are calling",
    text: "The beauty of the mountains is unmatched, a perfect escape from the everyday rush.",
  },
  {
    videoSrc: "media/forest.mp4",
    title: "Find peace in the woods",
    text: "Walking through the woods brings tranquility and calm like no other.",
  },
];

const HomePage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleNext = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % videoSlides.length);
  };

  const handlePrev = () => {
    setCurrentSlide((prevSlide) => (prevSlide === 0 ? videoSlides.length - 1 : prevSlide - 1));
  };

  return (
    <div className="homepage">
      <video key={videoSlides[currentSlide].videoSrc} autoPlay loop muted className="background-video">
        <source src={videoSlides[currentSlide].videoSrc} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="content">
        <div className="text-content">
          <h1>{videoSlides[currentSlide].title}</h1>
          <p>{videoSlides[currentSlide].text}</p>
          <button className="read-more-btn">Read More</button>
        </div>

        <div className="right-section">
          <h1 className="large-text">
            FLOW
            <br />
            WITH
            <br />
            IT
          </h1>
        </div>
      </div>

      {/* Pulsanti per scorrere i video */}
      <button className="prev-btn" onClick={handlePrev}>
        &#10094;
      </button>
      <button className="next-btn" onClick={handleNext}>
        &#10095;
      </button>
    </div>
  );
};

export default HomePage;
