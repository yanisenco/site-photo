import './App.css';
import AboutUs from './pages/aboutUs';
import Contact from './pages/contact';
import Homepage from './pages/homepage';
import OurWork from './pages/ourWork';

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome in our website</h1>
      </header>
      <Homepage/>
      <OurWork/>
      <AboutUs/>
      <Contact/>
    </div>
  );
}

export default App;
