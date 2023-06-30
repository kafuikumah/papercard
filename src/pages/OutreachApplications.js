import "../styles/App.css";
import Welcome from "../components/Welcome";
import Block from "../components/Block";

const OUTREACHCARD = [
  {
    heading: "Cold Emails",
    paragraph:
      "Templates and guides on how to write an email outreach campaign for your job search",
  },
  {
    heading: "LinkedIn Inmails",
    paragraph:
      "Samples of winning LinkedIn messages to help you start a converstation",
  },
  {
    heading: "Twitter Direct Messaging",
    paragraph: "Reach emplyers and clients via Twitter Messaging",
  },
  {
    heading: "Job Application Tracker",
    paragraph:
      "Track all your applications in one place. Download the free resource now.",
  },
];

function OutReachApplications() {
  const outreachCards = OUTREACHCARD.map((entry) => (
    <Block heading={entry.heading} paragraph={entry.paragraph} />
  ));

  return (
    <div className="">
      <div className="nav"></div>
      <div className="container">
        <div className="main-content">
          <Welcome
            heading="Applications and Outreach"
            paragraph="Curated professional cold outreach and cover letter samples for your job search"
          />
          <div className="tile-section grid grid-cols-3 gap-10">
            {outreachCards}
          </div>
        </div>
      </div>
    </div>
  );
}

export default OutReachApplications;
