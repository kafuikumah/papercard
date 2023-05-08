import './App.css';
import './components/Navigation';
import Navigation from './components/Navigation';
import Waitlist from './components/Waitlist';



function App() {
  return (
    <Waitlist heroText="This application does things" buttonType="join the waitlist" />
  );
}

export default App;