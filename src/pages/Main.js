import "../styles/App.css";
import Footer from "../components/Footer";
import Navigation from "../components/Navigation";
import Welcome from "../components/Welcome";
import Tile from "../components/Tile";
import Block from "../components/Block";
import NavigationSearch from "../components/NavigationSearch";
import NavigationAccordion from "../components/NavigationAccordion";

function Main() {
  return (
    <div className="container mx-auto">
      <Navigation />
      <Welcome />
      <NavigationSearch />
      <NavigationAccordion />
      <Tile
        emoji="🛣"
        title="Tech Career Roadmap"
        tag="Upcoming"
        paragraph="Pursue your career in tech with actionable steps from newbie to pro, with tips for steady growth."
      />
      <Block />

      <Footer />
    </div>
  );
}

export default Main;
