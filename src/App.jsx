import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/shared/Footer';
import Navbar from './components/shared/Navbar';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<div className="p-8 text-center">Home Page Content</div>} />
            <Route path="/about" element={<div className="p-8 text-center">About Page Content</div>} />
            <Route path="/services" element={<div className="p-8 text-center">Services Page Content</div>} />
            <Route path="/contact" element={<div className="p-8 text-center">Contact Page Content</div>} />
            {/* Add more routes as needed */}
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
