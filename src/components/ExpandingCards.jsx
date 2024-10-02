import React, { useState } from "react";
import "./ExpandingCards.css";

const expandingCards = [
  {
    title: "Paris",
    description: "Experience the romance of Paris with its stunning architecture, art, and cuisine.",
    imageUrl: "https://img.freepik.com/foto-premium/torre-eiffel-con-vista-sul-fiume-senna_1308549-47157.jpg?w=740",
  },
  {
    title: "Tokyo",
    description: "Discover the vibrant culture, tech innovations, and history of Tokyo.",
    imageUrl:
      "https://img.freepik.com/foto-gratuito/la-fioritura-dei-ciliegi-in-primavera-la-pagoda-chureito-e-il-monte-fuji-in-giappone_335224-213.jpg?w=996",
  },
  {
    title: "New York",
    description: "The city that never sleeps, offering endless attractions, shopping, and shows.",
    imageUrl:
      "https://img.freepik.com/foto-gratuito/statua-della-liberta-e-skyline-di-new-york-city-usa_268835-777.jpg?w=996",
  },
  {
    title: "Rome",
    description: "Explore the ancient ruins and rich culture of the eternal city.",
    imageUrl:
      "https://img.freepik.com/foto-gratuito/bello-scatto-del-famoso-anfiteatro-del-colosseo-romano-sotto-il-cielo-mozzafiato-all-alba_181624-6998.jpg?w=826",
  },
];

const ExpandingCards = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const visibleCards = 3; // Number of visible cards in the viewport

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const handleNext = () => {
    if (currentIndex < expandingCards.length - visibleCards) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  return (
    <div className="expanding-cards-wrapper">
      {/* Search section */}
      <div className="search-section">
        <h1>Discover the most engaging places</h1>
        <p>Explore destinations like Paris, Tokyo, New York, and Rome.</p>
      </div>

      {/* Navigation arrows */}
      <button className="slider-btn prev-btn" onClick={handlePrev} disabled={currentIndex === 0}>
        &#10094;
      </button>

      {/* Expanding cards slider */}
      <div className="expanding-cards-slider">
        <div
          className="expanding-cards-container"
          style={{ transform: `translateX(-${currentIndex * (100 / visibleCards)}%)` }}
        >
          {expandingCards.map((card, index) => (
            <div className="expanding-card" key={index}>
              <img src={card.imageUrl} alt={card.title} className="card-image" />
              <div className="card-content">
                <div className="info">
                  <h2>{card.title}</h2>
                  <p>{card.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <button
        className="slider-btn next-btn"
        onClick={handleNext}
        disabled={currentIndex >= expandingCards.length - visibleCards}
      >
        &#10095;
      </button>
    </div>
  );
};

export default ExpandingCards;
