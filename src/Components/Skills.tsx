import { DotLottieReact } from "@lottiefiles/dotlottie-react";

const Skills = () => {
  const skills = [
    { name: "Frontend", svg: "https://lottie.host/b99b8bae-a6ad-442e-853a-6bae99b58818/Mocuf0Zm2J.lottie", tools: [{ name: "React", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" }, { name: "HTML", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" }, { name: "Tailwind CSS", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" }, { name: "CSS", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" }, { name: "JavaScript", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" }, { name: "Bootstrap", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" }, { name: "typescript", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" }] },
    { name: "Backend", svg: "https://lottie.host/db8694a0-9acd-4d8d-9e63-1813531d8f78/XMEja70kuW.lottie", tools: [{ name: "Node.js", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" }, { name: "Express", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" }, { name: "MongoDB", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" }, { name: "Java", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" }, { name: "Python", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" }, { name: "Nest JS", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nestjs/nestjs-original.svg" }] },
    { name: "Others", svg: "https://lottie.host/ee85dbf0-0c78-4c40-adb1-3dfb3f3f6ee0/M91tedvT5X.lottie", tools: [{ name: "Git", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" }, { name: "Visual Studio Code", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/visualstudio/visualstudio-original.svg" }, { name: "Figma", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" }, { name: "Postman", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg" }, { name: "Github", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" }, { name: "Git Lab", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gitlab/gitlab-original.svg" }] }
  ];

  return (
    <div className="mt-16 md:mt-24 px-4"> {/* Added top margin and horizontal padding */}
      <div className='flex flex-col items-center gap-3 md:gap-5 font-medium mb-10'> {/* Adjusted gap */}
        <h1 className='text-3xl md:text-4xl text-white'>Skills</h1> {/* Responsive text size */}
        <h1 className='text-white font-medium text-lg md:text-xl'>I am proficient in:</h1> {/* Responsive text size */}
      </div>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto'> {/* Responsive Grid Layout */}
        {skills.map((skill) => (
          <div
            key={skill.name}
            className='bg-[#1E1E2F] p-5 rounded-lg border border-purple-500/20 hover:border-purple-500 transition duration-300 flex flex-col justify-between h-full' // `h-full` to ensure cards have same height if content varies
          >
            <div> {/* Grouping for top content (title + lottie) */}
              <h2 className='text-white font-semibold text-lg text-center mb-2'>{skill.name}</h2>
              <div className="min-h-[150px] flex items-center justify-center"> {/* Added min-height to Lottie container */}
                <DotLottieReact
                  className="w-full h-auto max-h-[150px] object-contain" // Constrain Lottie height
                  src={skill.svg}
                  loop
                  autoplay
                />
              </div>
            </div>
            <div className='flex flex-wrap gap-2 mt-5'>
              {skill.tools.map((tool) => (
                <div key={tool.name} className='flex items-center bg-purple-500/40 rounded-full px-3 py-1'> {/* Adjusted padding */}
                  <img src={tool.image} alt={tool.name} className='w-4 h-4 mr-2' />
                  <span className='text-white text-xs'>{tool.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;