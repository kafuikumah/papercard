import "../styles/App.css";
import Footer from "../components/Footer";
import Navigation from "../components/Navigation";
import Welcome from "../components/Welcome";
import Tile from "../components/Tile";
import Block from "../components/Block";
import LinkCard from "../components/LinkCard";
import SideNavigation from "../components/SideNavigation";
import Home from "./Home";

function Main() {
  return (
    <div className="container mx-auto">
      <Navigation />
      <Home />
      <Footer />
    </div>
  );
}

export default Main;
