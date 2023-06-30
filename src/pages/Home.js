import "../styles/App.css";
import Welcome from "../components/Welcome";
import Tile from "../components/Tile";
import SideNavigation from "../components/SideNavigation";

const HOMECARD = [
  {
    emoji: "🛣",
    heading: "Tech Career Roadmap",
    paragraph:
      "Pursue your career in tech with actionable steps from newbie to pro, with tips for steady growth.",
  },
  {
    emoji: "📂",
    heading: "Ultimate Documents",
    paragraph:
      "The only templates you’ll ever need for your contracts, proposals, invoices, and more. ",
  },
  {
    emoji: "📄",
    heading: "Letters & Applications",
    paragraph:
      "Well structure templates and tips on how to write applications, cover letters, cold emails, social bios, and other tricks on how to get your dream job.",
  },
  {
    emoji: "🛠",
    heading: "Tools & Resources",
    paragraph:
      "These tools and resources will 10x your process as a digital nomad. They range from tools for business to design, to development to general internet hacks!",
  },
  {
    emoji: "💻",
    heading: "Job Boards",
    paragraph:
      "Looking for a job or gig? Whether remote, hybrid, in-house, this spacewas created for you.",
  },
  {
    emoji: "👥",
    heading: "Tech Communities",
    paragraph:
      "Join various tech communities to grow your network. Share your work,  meet new poeple, assist others as an active member of these tech communities around the world.",
  },
  {
    emoji: "🤖",
    heading: "AI Tools",
    paragraph:
      "Explore AI Tools in various categories and leverage them to increase productivity adn improve your efficiency while savign a ton of time.",
  },
];

function Home() {
  const homeCards = HOMECARD.map((entry) => (
    <Tile
      emoji={entry.emoji}
      heading={entry.heading}
      paragraph={entry.paragraph}
    />
  ));

  return (
    <div className="">
      <div className="nav"></div>
      <div className="container">
        {/* <div className="side bar col-span-1">
          <SideNavigation />
        </div> */}
        <div className="main-content">
          <Welcome
            heading="Hi there!👋"
            paragraph="We are building a tech career toolbox filled with resources to help
          tech professionals who are new, old or freelancers to get their
          documents and career progression right!"
          />
          <div className="tile-section grid grid-cols-3 gap-16">
            {homeCards}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
