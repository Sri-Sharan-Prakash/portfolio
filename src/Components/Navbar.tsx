import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion'; // Import motion for animations
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // State to manage mobile menu visibility

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Education", href: "#education" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
  ];

  return (
    <nav className='fixed top-0 left-0 right-0 z-50 backdrop-blur-lg bg-gray-900/80 py-4 px-4 md:px-10 lg:px-20'> {/* Added bg-color for better contrast */}
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        <Link to="/"><h1 className="text-2xl font-medium text-white">Portfolio</h1></Link>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex gap-6 lg:gap-8 text-white font-medium"> {/* Hidden on small, flex on md and up */}
          {navLinks.map((link) => (
            <li key={link.name}>
              <a href={link.href} className="hover:text-purple-500 cursor-pointer transition duration-300">
                {link.name}
              </a>
            </li>
          ))}
        </ul>
          <Link to="https://github.com/sri-sharan-prakash">
        <button className="hidden md:block border border-purple-500 rounded-full px-4 py-2 text-purple-500 cursor-pointer hover:bg-purple-500 font-medium hover:text-white transition duration-400">
          Github Profile
        </button>
          </Link>

        {/* Hamburger Icon for Mobile */}
        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu} className="text-white focus:outline-none">
            {isOpen ? (
              // Close Icon (X)
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            ) : (
              // Hamburger Icon
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu (conditionally rendered) */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.2 }}
            className="md:hidden absolute top-[72px] left-0 w-full bg-gray-800 backdrop-blur-md pb-4 pt-2 shadow-lg"
          >
            <ul className="flex flex-col items-center gap-4 text-white font-medium">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={() => setIsOpen(false)} // Close menu on link click
                    className="block py-2 hover:text-purple-500 cursor-pointer transition duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
              <li>
                <button className="border border-purple-500 rounded-full px-4 py-2 text-purple-500 cursor-pointer hover:bg-purple-500 font-medium hover:text-white transition duration-400 mt-2">
                  Github Profile
                </button>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;