import "../styles/App.css";
import Welcome from "../components/Welcome";
import SideNavigation from "../components/SideNavigation";
import Block from "../components/Block";

const ROADMAPCARD = [
  {
    heading: "Software Engineer",
    paragraph:
      "A professional who designs, develops, and maintains software systems using software engineering principles and practices",
  },
  {
    heading: "UI/UX Designer",
    paragraph:
      "You design interfaces and craft digital experiences while keeping in mind user interests and business goals",
  },
  {
    heading: "Product Manager",
    paragraph:
      "You plan and manage the life cycle of a product, from the start to the end of a project",
  },
  {
    heading: "Data Scientist",
    paragraph: "You analyze raw data, simplify it and make sense out of it.",
  },
  {
    heading: "Data Analyst",
    paragraph:
      "Collect, organize, and analyze large sets of data to derive insights and inform decision-making processes.",
  },
  {
    heading: "Product Marketing",
    paragraph:
      "Strategize and execute marketing plans to promote and drive the success of a product in a domain or market",
  },
  {
    heading: "Cybersecurity",
    paragraph:
      "Protect computer systems and data from unauthorized access and attacks through security measures and technologies.",
  },
];

function TechCareerRoadmap() {
  const roadmapCards = ROADMAPCARD.map((entry) => (
    <Block heading={entry.heading} paragraph={entry.paragraph} />
  ));

  return (
    <div className="">
      <div className="nav"></div>
      <div className="container grid grid-cols-4 gap-10">
        <div className="side bar col-span-1">
          <SideNavigation />
        </div>
        <div className="main-content col-span-3">
          <Welcome
            heading="Tech Career Roadmap"
            paragraph="Select your tech role and explore the steps it takes to get started and grow."
          />
          <div className="tile-section grid grid-cols-3 gap-10">
            {roadmapCards}
          </div>
        </div>
      </div>
    </div>
  );
}

export default TechCareerRoadmap;
