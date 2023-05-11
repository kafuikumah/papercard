import './App.css';
import './components/Navigation';
import Navigation from './components/Navigation';
import Waitlist from './components/Waitlist';



function App() {
  return (
    
    <div className='container'>

      <Waitlist
        heroHeading="Your Ultimate Tech Starter Pack"
        heroDescription="We are building a tech career toolbox filled with resources to help
        tech professionals who are new, old or freelancers to get their documents and career progression right!"
        joinWaitlistButton="Join Waitlist"
        learnMoreButton="Learn More"
      />
      <Navigation />

    </div>
  );
}

export default App;