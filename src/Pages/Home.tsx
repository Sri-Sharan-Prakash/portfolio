import About from '../Components/About'
import Experience from '../Components/Experience'
import Navbar from '../Components/Navbar'
import Projects from '../Components/Projects'
import Skills from '../Components/Skills'
import {motion} from 'framer-motion'

const Home = () => {
  return (
    <div className='py-5 px-30 bg-[#00001F] flex flex-col gap-10'>
        <Navbar/>
      <motion.div
        initial={{opacity:0,translateY:"100%"}}
        whileInView={{opacity:1,translateY:"0%"}}
        transition={{duration:0.5}}
      >
        <About/>
      </motion.div>
        <Skills/>
        <Experience/>
        <Projects/>
    </div>
  )
}

export default Home