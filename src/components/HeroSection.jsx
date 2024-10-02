import React from "react";
import "./HeroSection.css";
import videoSrc from "../assets/videomare.mp4"; // Aggiungi il percorso del video

const HeroSection = () => {
  return (
    <div className="about-us-section">
      <div className="video-section">
        {/* Video al posto delle immagini */}
        <video src={videoSrc} autoPlay loop muted className="video" />
      </div>
      <div className="text-section">
        <h2>About Us</h2>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
          standard dummy text ever since the 1500s.
        </p>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
          standard dummy text ever since the 1500s.
        </p>
        <button className="details-button">View Details</button>
      </div>
    </div>
  );
};

export default HeroSection;
