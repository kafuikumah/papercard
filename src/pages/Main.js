import '../App.css';
import Footer from '../components/Footer';
import Navigation from '../components/Navigation';
import Welcome from '../components/Welcome';



function Main() {
  return (

    <div className='container mx-auto'>
      <Navigation />
        <Welcome />
      <Footer />
    </div>
  );
}

export default Main;