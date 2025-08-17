import About from '../Components/About'
import Navbar from '../Components/Navbar'

const Home = () => {
  return (
    <div className='py-5 px-30 h-screen bg-[#00001F] flex flex-col gap-10'>
        <Navbar/>
        <About/>
    </div>
  )
}

export default Home