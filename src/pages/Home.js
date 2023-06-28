import "../styles/App.css";
import Welcome from "../components/Welcome";
import Tile from "../components/Tile";
import SideNavigation from "../components/SideNavigation";

function Home() {
  return (
    <div className="">
      <div className="nav"></div>
      <div className="container grid grid-cols-4 gap-10">
        <div className="side bar col-span-1">
          <SideNavigation />
        </div>
        <div className="main-content col-span-3">
          <Welcome
            heading="Hi there!👋"
            paragraph="We are building a tech career toolbox filled with resources to help
          tech professionals who are new, old or freelancers to get their
          documents and career progression right!"
          />
          <div className="tile-section grid grid-cols-3 gap-10">
            <Tile
              emoji="🛣"
              title="Tech Career Roadmap"
              paragraph="Pursue your career in tech with actionable steps from newbie to pro, with tips for steady growth."
            />
            <Tile
              emoji="🛣"
              title="Tech Career Roadmap"
              paragraph="Pursue your career in tech with actionable steps from newbie to pro, with tips for steady growth."
            />
            <Tile
              emoji="🛣"
              title="Tech Career Roadmap"
              paragraph="Pursue your career in tech with actionable steps from newbie to pro, with tips for steady growth."
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
