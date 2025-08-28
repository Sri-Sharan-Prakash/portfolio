import { motion } from 'framer-motion';
import { BsGithub, BsLinkedin } from 'react-icons/bs';
import { CiMail } from 'react-icons/ci';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <motion.footer
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      viewport={{ once: true, amount: 0.5 }}
      className='bg-gray-900 mt-20 py-8 px-4 md:px-10 lg:px-20 text-white text-center flex flex-col items-center justify-center'
    >
      <div className='flex flex-col md:flex-row items-center gap-4 text-gray-400'>
        <p className='text-sm'>&copy; {currentYear} Your Name. All rights reserved.</p>
        <span className='hidden md:inline-block'>|</span> {/* Separator for larger screens */}
        <p className='text-sm'>Designed & Developed with ❤️</p>
      </div>

      {/* Optional: Add social media links here if you want them in the footer */}
      <div className='flex gap-6 mt-6'>
        <a href="https://linkedin.com/in/sri-sharan-prakash-s-898511373" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-purple-500 transition-colors duration-300">
          <i className="fab fa-linkedin text-2xl"><BsLinkedin/></i> {/* Requires Font Awesome */}
        </a>
        <a href="https://github.com/Sri-Sharan-Prakash" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-purple-500 transition-colors duration-300">
          <i className="fab fa-github text-2xl"><BsGithub/></i> {/* Requires Font Awesome */}
        </a>
        <a href="mailto:srisharanprakash2003@example.com" className="text-gray-400 hover:text-purple-500 transition-colors duration-300">
          <i className="fas fa-envelope text-2xl"><CiMail/></i> {/* Requires Font Awesome */}
        </a>
        {/* Add more social links as needed */}
      </div>

      <p className='text-xs text-gray-600 mt-4'>Built with React & Tailwind CSS</p>
    </motion.footer>
  );
};

export default Footer;