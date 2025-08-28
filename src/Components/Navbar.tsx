const Navbar = () => {
  return (
    <nav className='fixed top-0 left-0 right-0 z-50 backdrop-blur-lg py-5 px-4 md:px-10 lg:px-20'>
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        <h1 className="text-2xl font-medium text-white">Portfolio</h1>
        <ul className="flex gap-8 text-white font-medium">
          <li><a href="#about" className="hover:text-purple-500 cursor-pointer transition duration-300">About</a></li>
          <li><a href="#skills" className="hover:text-purple-500 cursor-pointer transition duration-300">Skills</a></li>
          <li><a href="#education" className="hover:text-purple-500 cursor-pointer transition duration-300">Education</a></li> {/* Added this link */}
          <li><a href="#experience" className="hover:text-purple-500 cursor-pointer transition duration-300">Experience</a></li>
          <li><a href="#projects" className="hover:text-purple-500 cursor-pointer transition duration-300">Projects</a></li>
        </ul>
        <button className="border-1 border-purple-500 rounded-full px-4 py-2 text-purple-500 cursor-pointer hover:bg-purple-500 font-medium hover:text-white transition duration-400">Github Profile</button>
      </div>
    </nav>
  )
}

export default Navbar;