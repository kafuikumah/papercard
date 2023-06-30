import "../styles/App.css";
import Footer from "../components/Footer";
import Navigation from "../components/Navigation";
import Home from "./Home";
import { Routes, Route } from "react-router-dom";
import TechCareerRoadmap from "./TechCareerRoadmap";
import UltimateDocuments from "./UltimateDocuments";

function Main() {
  return (
    <div className="container mx-auto">
      <Navigation />
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <Home />
        <TechCareerRoadmap />
        <UltimateDocuments />
      </div>
      <Footer />

      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="/career-road-maps" element={<TechCareerRoadmap />} />
      </Routes>
    </div>
  );
}

export default Main;
