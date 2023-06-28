import "../styles/App.css";
import Welcome from "../components/Welcome";
import SideNavigation from "../components/SideNavigation";
import Block from "../components/Block";

const DOCUMENTCARD = [
  {
    heading: "CVs and Resumes",
    paragraph: "Choose from many CV and resume templates",
  },
  {
    heading: "Project Proposal Templates",
    paragraph: "Choose from many project proposal templates",
  },
  {
    heading: "Contract Templates",
    paragraph:
      "Choose from many contract templates for your projects between you and your client",
  },
  {
    heading: "Price Quotation Templates",
    paragraph: "Choose from many professional price quotation templates",
  },
];

function UltimateDocuments() {
  const documentCards = DOCUMENTCARD.map((entry) => (
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
            heading="Ultimate Documents"
            paragraph="Curated professional documents at your disposal for your projects."
          />
          <div className="tile-section grid grid-cols-3 gap-10">
            {documentCards}
          </div>
        </div>
      </div>
    </div>
  );
}

export default UltimateDocuments;
