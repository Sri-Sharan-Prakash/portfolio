import About from '../Components/About'
import Experience from '../Components/Experience'
import Education from '../Components/Education' 
import { motion, type Variants } from 'framer-motion'
import Skills from '../Components/Skills';
import Projects from '../Components/Projects';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer'; 

// --- Animation Variants (No changes here) ---
const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 80 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { type: 'spring', duration: 1.3 }
  }
};

const fadeInLeft: Variants = {
  hidden: { opacity: 0, x: -80 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { type: 'spring', duration: 1.3 }
  }
};

const fadeInRight: Variants = {
  hidden: { opacity: 0, x: 80 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { type: 'spring', duration: 1.3 }
  }
};


const Home = () => {
  return (
    <div className='relative min-h-screen bg-[#00001F]'>
      
      {/* Animated Background Gradient */}
      <motion.div
        className="fixed inset-0 -z-20" 
        style={{
          background: 'linear-gradient(180deg, #00001F 0%, #0c1a4b 100%)',
        }}
        animate={{
          background: [
            'linear-gradient(180deg, #00001F 0%, #0c1a4b 100%)',
            'linear-gradient(180deg, #020024 0%, #090979 50%, #002b36 100%)',
            'linear-gradient(180deg, #00001F 0%, #0c1a4b 100%)',
          ],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          repeatType: 'reverse',
          ease: 'easeInOut',
        }}
      />

      {/* --- ADDED SEMI-TRANSPARENT OVERLAY --- */}
      <div className="fixed inset-0 -z-10" />

      {/* Navbar is rendered directly here, at the top level of the Home component */}
      <Navbar/> 

      {/* Main content container. 
          ADD pt-20 (or pt-16, pt-24 depending on your Navbar's height)
          to prevent content from being covered by the fixed navbar.
          `pt-20` is usually a good starting point for a Navbar with `py-5`.
      */}
      <div className='relative z-10 pt-20 pb-5 px-4 md:px-10 lg:px-20 flex flex-col gap-10 md:gap-20'>
        {/* The Navbar motion.div was removed from here as it's now fixed and directly rendered */}

        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <About/>
        </motion.div>

        <motion.div
          variants={fadeInLeft}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <Skills/>
        </motion.div>
        
        <motion.div
          variants={fadeInRight} 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <Education/>
        </motion.div>

        <motion.div
          variants={fadeInRight}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <Experience/>
        </motion.div>
        
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <Projects/>
        </motion.div>
      </div>
      
      <Footer /> 
    </div>
  )
}

export default Home;