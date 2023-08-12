import { Col, Row } from 'react-bootstrap';

import './App.scss';
import Navbar from './components/Navbar';
import Home from './sections/Home';
import About from './sections/About';
import Services from './sections/Services';
import Gallery from './sections/Gallery';
import Contact from './sections/Contact';
import Footer from './sections/Footer';

function App() {
  return (
    <div className='App'>
      <Navbar />
      <Home />
      <About />
      <Services />
      <Gallery />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
