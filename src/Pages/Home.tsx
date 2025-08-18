import About from '../Components/About'
import Navbar from '../Components/Navbar'
import Skills from '../Components/Skills'

const Home = () => {
  return (
    <div className='py-5 px-30 bg-[#00001F] flex flex-col gap-10'>
        <Navbar/>
        <About/>
        <Skills/>
    </div>
  )
}

export default Home