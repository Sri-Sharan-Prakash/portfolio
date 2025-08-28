import { motion } from 'framer-motion';

const Experience = () => {
  const experience = [
    {
      name: "Full Stack Developer Intern",
      image: "https://media.licdn.com/dms/image/v2/D4D0BAQH_IP1079LmJw/company-logo_200_200/B4DZfJ4.i.GgAM-/0/1751438846907/skillminetech_logo?e=2147483647&v=beta&t=KDX34xzIxdJ6Q20ZKvWoEmtqu4xN5hLJ_SJZ21ODpRI",
      description: "Worked in their major product comPLYment where I have contributed to the development of key features and improvements. Had developed admin-side functionalities like CRUD in both frontend and backend.",
      company: "Skillmine Technologies Pvt Ltd",
      duration: "Jan 2025 - July 2025",
      stipend: "7500",
      skills: "• React • Mongo DB • Node Js • Express • Nest Js • Tailwind CSS"
    },
    {
      name: "Frontend Developer Intern",
      company: "Urtripo Aviation",
      duration: "Jan 2023 -Jan 2024",
      image: "https://urtripo-aviation.com/public/assets/images/resources/logo-small.png",
      description: "Worked on the development of the company website, where I was responsible for creating and maintaining the frontend components using React.js and Tailwind CSS. I also collaborated with the design team to ensure a responsive and user-friendly interface.",
      skills: "• React • Tailwind css • Html • Javascript • Bootstrap"
    }
  ];

  return (
    <div className='mt-16 md:mt-24 flex flex-col px-4'> {/* Adjusted top margin and added horizontal padding */}
      <div>
        <h1 className='text-2xl md:text-3xl font-medium text-white text-center'>Experience</h1> {/* Responsive text size */}
        <h1 className='text-white text-center text-base md:text-lg mt-2'>Here are some of my recent experiences</h1> {/* Responsive text size */}
      </div>
      <div className='mt-10 max-w-4xl mx-auto w-full'> {/* Centered the timeline and controlled max width */}
        {experience.map((exp, index) => (
          <motion.div
            initial={{ opacity: 0, translateX: "-100%" }} // Adjusted initial animation for better flow
            whileInView={{ opacity: 1, translateX: "0%" }}
            transition={{ duration: 0.8, delay: index * 0.2 }} // Slightly faster transition
            key={index}
            className='relative mb-8 pl-8 md:pl-12 lg:pl-16' // Added left padding for timeline elements
          >
            {/* Timeline Dot */}
            <span className='absolute left-0 top-5 z-10 rounded-full h-3 w-3 bg-purple-500'></span>
            {/* Conditional rendering for the vertical line */}
            {index < experience.length - 1 && ( // Only render if it's not the last item
              <span className='absolute left-[4.5px] rounded-full top-8 h-[calc(100%+20px)] w-1 bg-purple-500 transition-all duration-300'></span>
            )}

            {/* Content Card with Blur Effect */}
            <div className='relative'>
              <div className='absolute inset-0 bg-blue-500 rounded-lg blur opacity-50 z-0'></div> {/* z-0 to ensure content is above */}
              <div key={index} className='flex flex-col md:flex-row mb-4 bg-gray-900 gap-4 p-4 rounded-lg relative z-10 items-start'> {/* Changed gap and added z-10 */}
                <img src={exp.image} className='w-12 h-12 md:w-16 md:h-16 object-contain rounded flex-shrink-0' alt={`${exp.company} logo`} /> {/* Responsive image size, prevent shrinking */}
                <div>
                  <h2 className='text-lg md:text-xl font-semibold text-white'>{exp.name}</h2> {/* Responsive text size */}
                  <p className='text-gray-400 text-sm md:text-base'>{exp.company}</p> {/* Responsive text size */}
                  <p className='text-gray-400 text-sm md:text-base'>{exp.duration}</p> {/* Responsive text size */}
                  <div className='mt-2'>
                    <h2 className='text-gray-400 text-sm md:text-base'>{exp.description}</h2> {/* Responsive text size */}
                    <h2 className='text-gray-400 text-sm md:text-base mt-1'>
                      <span className='font-medium'>Skills</span> : <span className='ml-2'>{exp.skills}</span>
                    </h2>
                    {exp.stipend && (
                      <p className='text-gray-100 bg-purple-500 rounded w-fit font-medium px-3 py-0.5 mt-2 text-sm'> {/* Adjusted padding and font size for stipend */}
                        Stipend: ₹ {exp.stipend} per/month
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Experience;