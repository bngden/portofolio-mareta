import { Routes, Route } from 'react-router';
import CustomCursor from './components/CustomCursor';
import Navbar from './sections/Navbar';
import Hero from './sections/Hero';
import About from './sections/About';
import PortfolioMap from './sections/PortfolioMap';
import Contact from './sections/Contact';
import Login from './pages/Login';

function HomePage() {
  return (
    <>
      <CustomCursor />
      <Navbar />
      <main>
        <Hero />
        <About />
        <PortfolioMap />
        <Contact />
      </main>
    </>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="*" element={<HomePage />} />
    </Routes>
  );
}

export default App;
