import './App.css';
import Footer from './components/Footer';
import Navigation from './components/Navigation';
import Waitlist from './components/Waitlist';
import Card from './components/Card';

const WAITLISTCARD = [
  {header:"Your Tech Career Roadmap", paragraph:"Confused on how to get started in tech or what to learn. We are curating a raodmap for developers, product designers, data scientists, etc."},
  {header:"Professional Documents", paragraph:"Templates for your contracts, quotations, service agreements project proposals, invoices and more, all for FREE"},
  {header:"Letters and Applications", paragraph:"Well-structured templates and tips on how to write applications,cover letters, cold emails, social media bios, and trickson how to get that dream job!"},
  {header:"Tools and Resources", paragraph:"These tools and resources will 10x your process as a digital nomad.They range from tools for business to design to development to general internet hacks!"},
  {header:"Job Boards", paragraph:"Looking for a job or gig? Whether remote, hybrid, on-site, this space was created for you. Browse through numerous job boards. We even have an application tracker for you!"},
  {header:"Tech Communities", paragraph:"Join various tech communities to grow your network. Share your work, meet new poeple or assist others as an active member of these awesome tech communities around the world."},
]

function App() {

  const waitlistCards = WAITLISTCARD.map(entry => <Card header={entry.header} paragraph={entry.paragraph}/>)

  return (

    <div className='container mx-auto'>

      <Navigation />

      <Waitlist />

      {waitlistCards}
      
      <Footer />
    </div>
  );



}

export default App;