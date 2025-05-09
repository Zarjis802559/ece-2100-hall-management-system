import { FaEnvelope, FaFacebook, FaInstagram, FaLinkedin, FaMapMarkerAlt, FaPhone, FaTwitter } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#384959] text-[#BDDDFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex lg:flex-row sm:flex-col gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-xl font-bold mb-4">Hall Management</h3>
            <p className="text-sm mb-4">
              Providing quality accommodation and services for students with comfort and convenience.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-[#BDDDFC] hover:text-white transition-colors">
                <FaFacebook size={20} />
              </a>
              <a href="#" className="text-[#BDDDFC] hover:text-white transition-colors">
                <FaTwitter size={20} />
              </a>
              <a href="#" className="text-[#BDDDFC] hover:text-white transition-colors">
                <FaInstagram size={20} />
              </a>
              <a href="#" className="text-[#BDDDFC] hover:text-white transition-colors">
                <FaLinkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-sm hover:text-white transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/about" className="text-sm hover:text-white transition-colors">About Us</Link>
              </li>
              <li>
                <Link to="/token" className="text-sm hover:text-white transition-colors">Token</Link>
              </li>
              <li>
                <Link to="/wash" className="text-sm hover:text-white transition-colors">Wash</Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm hover:text-white transition-colors">Contact Us</Link>
              </li>
            </ul>
          </div>

          {/* User Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">User</h3>
            <ul className=" flex space-x-2">
              <li>
                <Link to="/login" className="text-sm hover:text-white transition-colors">Login</Link>
              </li>
              <li>
                <Link to="/signup" className="text-sm hover:text-white transition-colors">Signup</Link>
              </li>
              <li>
                <Link to="/profile" className="text-sm hover:text-white transition-colors">Profile</Link>
              </li>
              <li>
                <Link to="/dashboard" className="text-sm hover:text-white transition-colors">Dashboard</Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li className="flex items-center space-x-2">
                <FaMapMarkerAlt className="text-[#BDDDFC]" />
                <span className="text-sm">123 University Avenue, City</span>
              </li>
              <li className="flex items-center space-x-2">
                <FaPhone className="text-[#BDDDFC]" />
                <span className="text-sm">+1 234 567 8901</span>
              </li>
              <li className="flex items-center space-x-2">
                <FaEnvelope className="text-[#BDDDFC]" />
                <span className="text-sm">info@hallmanagement.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-[#BDDDFC] mt-6 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-center md:text-left">
              &copy; {currentYear} Hall Management System. All rights reserved.
            </p>
            <div className="mt-4 md:mt-0">
              <ul className="flex space-x-4 text-sm">
                <li>
                  <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
                </li>
                <li>
                  <Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
