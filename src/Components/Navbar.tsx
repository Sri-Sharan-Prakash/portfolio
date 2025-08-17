const Navbar = () => {
  return (
    <div>
        <div className="flex justify-between items-center">
            <h1 className="text-2xl font-medium text-white">Portfolio</h1>
            <ul className="flex gap-8 text-white font-medium">
                <li className="hover:text-purple-500 cursor-pointer transition duration-300">About</li>
                <li className="hover:text-purple-500 cursor-pointer transition duration-300">Skills</li>
                <li className="hover:text-purple-500 cursor-pointer transition duration-300">Experience</li>
                <li className="hover:text-purple-500 cursor-pointer transition duration-300">Projects</li>
                <li className="hover:text-purple-500 cursor-pointer transition duration-300">Education</li>
            </ul>
            <button className="border-1 border-purple-500 rounded-full px-4 py-2 text-purple-500 cursor-pointer hover:bg-purple-500 font-medium hover:text-white transition duration-400">Github Profile</button>
        </div>
    </div>
  )
}

export default Navbar