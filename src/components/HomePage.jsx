// import React, { useState, useRef } from "react";
// import "./HomePage.css";
// import HeroSection from "./HeroSection";

// const videoSlides = [
//   {
//     videoSrc: "media/mare1.mp4",
//     title: "Happiness comes in waves",
//     text: "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born.",
//   },
//   {
//     videoSrc: "media/mountains.mp4",
//     title: "Mountains are calling",
//     text: "The beauty of the mountains is unmatched, a perfect escape from the everyday rush.",
//   },
//   {
//     videoSrc: "media/forest.mp4",
//     title: "Find peace in the woods",
//     text: "Walking through the woods brings tranquility and calm like no other.",
//   },
// ];

// const HomePage = () => {
//   const [currentSlide, setCurrentSlide] = useState(0);
//   const [destination, setDestination] = useState("");
//   const [checkIn, setCheckIn] = useState("");
//   const [checkOut, setCheckOut] = useState("");
//   const [travelers, setTravelers] = useState(1);
//   const heroSectionRef = useRef(null); // Create ref for HeroSection

//   const handleNext = () => {
//     setCurrentSlide((prevSlide) => (prevSlide + 1) % videoSlides.length);
//   };

//   const handlePrev = () => {
//     setCurrentSlide((prevSlide) => (prevSlide === 0 ? videoSlides.length - 1 : prevSlide - 1));
//   };

//   const handleSearch = (e) => {
//     e.preventDefault();
//     alert(`Searching for: ${destination} from ${checkIn} to ${checkOut} for ${travelers} travelers`);
//   };

//   const scrollToSection = () => {
//     if (heroSectionRef.current) {
//       heroSectionRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
//     }
//   };

//   return (
//     <div className="homepage">
//       <video key={videoSlides[currentSlide].videoSrc} autoPlay loop muted className="background-video">
//         <source src={videoSlides[currentSlide].videoSrc} type="video/mp4" />
//         Your browser does not support the video tag.
//       </video>

//       <div className="content">
//         <div className="text-content">
//           <h1>{videoSlides[currentSlide].title}</h1>
//           <p>{videoSlides[currentSlide].text}</p>

//           {/* Custom search bar */}
//           <form onSubmit={handleSearch} className="search-bar">
//             <div className="search-option">
//               <label htmlFor="destination">Destination</label>
//               <input
//                 type="text"
//                 id="destination"
//                 placeholder="City or Destination"
//                 value={destination}
//                 onChange={(e) => setDestination(e.target.value)}
//               />
//             </div>
//             <div className="search-option">
//               <label htmlFor="check-in">Check-In</label>
//               <input type="date" id="check-in" value={checkIn} onChange={(e) => setCheckIn(e.target.value)} />
//             </div>
//             <div className="search-option">
//               <label htmlFor="check-out">Check-Out</label>
//               <input type="date" id="check-out" value={checkOut} onChange={(e) => setCheckOut(e.target.value)} />
//             </div>
//             <div className="search-option">
//               <label htmlFor="travelers">Travelers</label>
//               <input
//                 type="number"
//                 id="travelers"
//                 min="1"
//                 value={travelers}
//                 onChange={(e) => setTravelers(e.target.value)}
//               />
//             </div>
//             <button type="submit" className="search-btn">
//               Search
//             </button>
//           </form>
//         </div>

//         <div className="right-section">
//           <h1 className="large-text">
//             FLOW
//             <br />
//             WITH
//             <br />
//             IT
//           </h1>
//         </div>
//       </div>

//       {/* Scroll arrow */}
//       <div className="scroll-arrow" onClick={scrollToSection}>
//         &#x2193;
//       </div>

//       <div ref={heroSectionRef} style={{ minHeight: "100vh", marginTop: "50px" }}>
//         <HeroSection />
//       </div>

//       {/* Buttons to navigate slides */}
//       <button className="prev-btn" onClick={handlePrev}>
//         &#10094;
//       </button>
//       <button className="next-btn" onClick={handleNext}>
//         &#10095;
//       </button>
//     </div>
//   );
// };

// export default HomePage;
import React, { useState, useRef } from "react";
import "./HomePage.css";
import HeroSection from "./HeroSection";

const videoSlides = [
  {
    videoSrc: "media/mare1.mp4",
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
  const [destination, setDestination] = useState("");
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [travelers, setTravelers] = useState(1);
  const heroSectionRef = useRef(null); // Create ref for HeroSection

  const handleNext = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % videoSlides.length);
  };

  const handlePrev = () => {
    setCurrentSlide((prevSlide) => (prevSlide === 0 ? videoSlides.length - 1 : prevSlide - 1));
  };

  const handleSearch = (e) => {
    e.preventDefault();
    alert(`Searching for: ${destination} from ${checkIn} to ${checkOut} for ${travelers} travelers`);
  };

  const scrollToSection = () => {
    if (heroSectionRef.current) {
      heroSectionRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
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

          {/* Custom search bar in horizontal layout */}
          <form onSubmit={handleSearch} className="search-bar">
            <div className="search-option">
              <input
                type="text"
                id="destination"
                placeholder="Destination"
                value={destination}
                onChange={(e) => setDestination(e.target.value)}
              />
            </div>
            <div className="search-option">
              <input type="date" id="check-in" value={checkIn} onChange={(e) => setCheckIn(e.target.value)} />
            </div>
            <div className="search-option">
              <input type="date" id="check-out" value={checkOut} onChange={(e) => setCheckOut(e.target.value)} />
            </div>
            <div className="search-option">
              <input
                type="number"
                id="travelers"
                min="1"
                placeholder="Travelers"
                value={travelers}
                onChange={(e) => setTravelers(e.target.value)}
              />
            </div>
            <button type="submit" className="search-btn">
              Search
            </button>
          </form>
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

      <div className="scroll-arrow" onClick={scrollToSection}>
        &#x2193;
      </div>

      <div ref={heroSectionRef} style={{ minHeight: "100vh", marginTop: "50px" }}>
        <HeroSection />
      </div>

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
