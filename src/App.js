import './App.css';
import Footer from './components/Footer';
import Navigation from './components/Navigation';
import Waitlist from './components/Waitlist';
import Card from './components/Card';



function App() {
  return (

    <div className='container mx-auto'>

      <Navigation />


      {/* <Waitlist
        heroHeading="Your Ultimate Tech Starter Pack"
        heroDescription="We are building a tech career toolbox filled with resources to help
        tech professionals who are new, old or freelancers to get their documents and career progression right!"
        joinWaitlistButton="Join Waitlist"
        learnMoreButton="Learn More"
      /> */}

      <Waitlist />

      <Card />
      <Footer />

    </div>
  );
}

export default App;