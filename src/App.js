import logo from "./logo.svg";
import "./App.css";
import HomePage from "./components/HomePage";
import NavBar from "./components/NavBar";
import ExpandingCards from "./components/ExpandingCards";
import HeroSection from "./components/HeroSection";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <NavBar />

      <HomePage />
      <HeroSection />
      <ExpandingCards />
      <Footer />
    </div>
  );
}

export default App;
