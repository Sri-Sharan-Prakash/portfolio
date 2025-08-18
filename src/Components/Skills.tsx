const Skills = () => {

  const skills=[
    {name:"frontend",tools:[{name:"React",image:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"},{name:"HTML",image:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"},{name:"Tailwind CSS",image:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg"},{name:"CSS",image:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"},{name:"JavaScript",image:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"}]},
    {name:"backend",tools:[{name:"Node.js",image:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"},{name:"Express",image:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg"},{name:"MongoDB",image:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg"}]},
    {name:"Others",tools:[{name:"Git",image:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"},{name:"Docker",image:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg"},{name:"Figma",image:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg"}]}
  ]
  return (
    <div>
        <div className='flex flex-col items-center gap-5 font-medium'>
            <h1 className='text-4xl text-white'>Skills</h1>
            <h1 className='text-white font-medium text-xl'>I am proficient in:</h1>
        </div>
    </div>
  )
}

export default Skills