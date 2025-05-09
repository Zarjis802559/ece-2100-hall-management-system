import { useState } from 'react';
import { FaBars, FaBook, FaEnvelope, FaSignInAlt, FaTicketAlt, FaTimes, FaUserPlus, FaWater } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navLinks = [
    { name: 'Home', path: '/', icon: <FaBook /> },
    { name: 'About', path: '/about', icon: <FaBook /> },
    { name: 'Token', path: '/token', icon: <FaTicketAlt /> },
    { name: 'Wash', path: '/wash', icon: <FaWater /> },
    { name: 'Contact', path: '/contact', icon: <FaEnvelope /> },
  ];

  return (
    <nav className="bg-black shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <span className="text-[#BDDDFC] text-xl font-bold">Hall Management</span>
            </Link>
          </div>
          
          {/* Desktop menu */}
          <div className=" md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="flex items-center text-[#BDDDFC] hover:bg-[#6A89A7] hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors mx-1"
              >
                <span className="mr-1.5">{link.icon}</span>
                {link.name}
              </Link>
            ))}
            <div className="ml-4 flex items-center space-x-2">
              <Link
                to="/login"
                className="flex items-center bg-[#6A89A7] hover:bg-[#88BDF2] text-white px-4 py-2 rounded-md text-sm font-medium transition-colors"
              >
                <FaSignInAlt className="mr-1.5" />
                Login
              </Link>
              <Link
                to="/signup"
                className="flex items-center bg-[#88BDF2] hover:bg-[#BDDDFC] text-[#384959] px-4 py-2 rounded-md text-sm font-medium transition-colors"
              >
                <FaUserPlus className="mr-1.5" />
                Signup
              </Link>
            </div>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-[#BDDDFC] hover:text-white hover:bg-[#6A89A7] focus:outline-none"
            >
              {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-black border-t border-[#6A89A7]">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="flex items-center text-[#BDDDFC] hover:bg-[#6A89A7] hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                onClick={() => setIsOpen(false)}
              >
                <span className="mr-2">{link.icon}</span>
                {link.name}
              </Link>
            ))}
            <div className="pt-4 pb-2 border-t border-[#6A89A7]">
              <Link
                to="/login"
                className="flex items-center text-[#BDDDFC] hover:bg-[#6A89A7] hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                onClick={() => setIsOpen(false)}
              >
                <FaSignInAlt className="mr-2" />
                Login
              </Link>
              <Link
                to="/signup"
                className="flex items-center text-[#BDDDFC] hover:bg-[#6A89A7] hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                onClick={() => setIsOpen(false)}
              >
                <FaUserPlus className="mr-2" />
                Signup
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
