import { FaArrowRight, FaChartBar, FaKey, FaShieldAlt, FaTicketAlt, FaTshirt } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className="bg-white">
      {/* Hero Section with gradient background */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#384959] to-[#6A89A7]">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10">
          <div className="absolute -top-24 -left-24 w-96 h-96 bg-[#BDDDFC] rounded-full"></div>
          <div className="absolute top-1/2 -right-24 w-64 h-64 bg-[#88BDF2] rounded-full"></div>
          <div className="absolute -bottom-16 left-1/3 w-72 h-72 bg-[#6A89A7] rounded-full"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 relative lg:gap-20 z-10">
          <div className="flex lg:flex-row md:flex-col items-center p-10">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <span className="inline-block px-4 py-1 bg-[#88BDF2] text-[#384959] font-semibold rounded-full text-sm mb-6">Welcome to ECE Hall</span>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                The Modern <span className="text-[#BDDDFC]">Hall Management System</span>
              </h1>
              <p className="text-lg mb-8 text-gray-200">
                Providing convenient accommodation and services for students with comfort and quality. Experience hassle-free hall living.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  to="/login"
                  className="group flex items-center bg-transparent border-2 border-[#BDDDFC] hover:bg-[#BDDDFC] text-[#BDDDFC] hover:text-[#384959] px-6 py-3 rounded-md font-medium transition-colors"
                >
                  <span>Login</span>
                  <FaArrowRight className="ml-2 transform transition-transform group-hover:translate-x-1" />
                </Link>
                <Link
                  to="/signup"
                  className="flex items-center bg-[#BDDDFC] hover:bg-white text-[#384959] px-6 py-3 rounded-md font-medium transition-colors"
                >
                  <span>Get Started</span>
                  <FaArrowRight className="ml-2" />
                </Link>
              </div>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <div className="relative">
                <div className="absolute -top-4 -left-4 bg-[#88BDF2] w-full h-full rounded-lg"></div>
                <img
                  src="https://your-campus.com/_next/static/media/Zia%20hall.4dfbc56a.jpg"
                  alt="Student Accommodation"
                  className="rounded-lg shadow-xl max-w-full h-auto object-cover relative z-10 border-4 border-white"
                  style={{ maxHeight: '400px' }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-8 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="p-4">
              <p className="text-3xl font-bold text-[#384959]">500+</p>
              <p className="text-gray-600">Students</p>
            </div>
            <div className="p-4">
              <p className="text-3xl font-bold text-[#384959]">10</p>
              <p className="text-gray-600">Halls</p>
            </div>
            <div className="p-4">
              <p className="text-3xl font-bold text-[#384959]">24/7</p>
              <p className="text-gray-600">Support</p>
            </div>
            <div className="p-4">
              <p className="text-3xl font-bold text-[#384959]">98%</p>
              <p className="text-gray-600">Satisfaction</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1 bg-[#88BDF2] text-[#384959] font-semibold rounded-full text-sm mb-4">HALL SERVICES</span>
            <h2 className="text-3xl font-bold text-[#384959] mb-4">Everything You Need in One Place</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our hall management system provides all the services you need for a comfortable and productive university experience
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow border-t-4 border-[#384959]">
              <div className="bg-[#384959] w-14 h-14 rounded-full flex items-center justify-center mb-6">
                <FaKey className="text-[#BDDDFC] text-2xl" />
              </div>
              <h3 className="text-xl font-semibold text-[#384959] mb-3">Secure Access</h3>
              <p className="text-gray-600">
                24/7 secure access to your accommodation with state-of-the-art security measures to keep you safe.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow border-t-4 border-[#6A89A7]">
              <div className="bg-[#6A89A7] w-14 h-14 rounded-full flex items-center justify-center mb-6">
                <FaTshirt className="text-white text-2xl" />
              </div>
              <h3 className="text-xl font-semibold text-[#384959] mb-3">Washing Facilities</h3>
              <p className="text-gray-600">
                Modern laundry facilities available for all residents with convenient token system.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow border-t-4 border-[#88BDF2]">
              <div className="bg-[#88BDF2] w-14 h-14 rounded-full flex items-center justify-center mb-6">
                <FaTicketAlt className="text-white text-2xl" />
              </div>
              <h3 className="text-xl font-semibold text-[#384959] mb-3">Token System</h3>
              <p className="text-gray-600">
                Easy-to-use token system for accessing various facilities including laundry and dining.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Token System Section */}
      <section className="py-16 bg-gradient-to-r from-[#384959] to-[#6A89A7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <span className="inline-block px-4 py-1 bg-[#BDDDFC] text-[#384959] font-semibold rounded-full text-sm mb-4">EASY TO USE</span>
              <h2 className="text-3xl font-bold text-white mb-6">Digital Token System</h2>
              <p className="text-gray-200 mb-6">
                Our efficient token system for laundry and other facilities makes your life easier. No more hunting for change or waiting in line!
              </p>
              <ul className="space-y-4">
                <li className="flex items-start space-x-3 text-gray-200">
                  <div className="bg-[#BDDDFC] p-1 rounded-full mt-1 flex-shrink-0">
                    <FaChartBar className="text-[#384959]" />
                  </div>
                  <span>Easy to purchase and manage tokens through our app</span>
                </li>
                <li className="flex items-start space-x-3 text-gray-200">
                  <div className="bg-[#BDDDFC] p-1 rounded-full mt-1 flex-shrink-0">
                    <FaShieldAlt className="text-[#384959]" />
                  </div>
                  <span>Secure and convenient payment options</span>
                </li>
              </ul>
              <div className="mt-8">
                <Link
                  to="/token"
                  className="group flex items-center bg-[#BDDDFC] hover:bg-white text-[#384959] px-6 py-3 rounded-md font-medium transition-colors inline-block"
                >
                  <span>Learn More</span>
                  <FaArrowRight className="ml-2 transform transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
            <div className="md:w-1/2">
              <div className="relative">
                <div className="absolute -top-4 -right-4 bg-[#88BDF2] w-full h-full rounded-lg"></div>
                <img
                  src="https://images.unsplash.com/photo-1545173168-9f1c6e193857?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2671&q=80"
                  alt="Token System"
                  className="w-full h-auto rounded-lg object-cover relative z-10 border-4 border-white"
                  style={{ maxHeight: '350px' }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block px-4 py-1 bg-[#88BDF2] text-[#384959] font-semibold rounded-full text-sm mb-4">JOIN OUR COMMUNITY</span>
          <h2 className="text-3xl font-bold text-[#384959] mb-6">Ready to experience better hall living?</h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            Whether you're a new student or looking for better accommodation, we're here to help you find your perfect home away from home.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/contact"
              className="group flex items-center bg-[#384959] hover:bg-[#6A89A7] text-white px-6 py-3 rounded-md font-medium transition-colors"
            >
              <span>Contact Us</span>
              <FaArrowRight className="ml-2 transform transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              to="/about"
              className="group flex items-center bg-white text-[#384959] border border-[#384959] hover:bg-gray-100 px-6 py-3 rounded-md font-medium transition-colors"
            >
              <span>Learn More</span>
              <FaArrowRight className="ml-2 transform transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage; 