import "../styles/App.css";
import Footer from "../components/Footer";
import Navigation from "../components/Navigation";
import Home from "./Home";
import { Routes, Route } from "react-router-dom";
import TechCareerRoadmap from "./TechCareerRoadmap";

function Main() {
  return (
    <div className="container mx-auto">
      <Navigation />
      <Home />
      <Footer />

      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="/career-road-maps" element={<TechCareerRoadmap />} />
      </Routes>
    </div>
  );
}

export default Main;
