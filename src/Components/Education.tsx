import { motion } from 'framer-motion';

const Education = () => {
  // Define your education data here
  const education = [
    {
      degree: "Bachelor of Engineering in Computer Science and Engineering",
      institution: "Kamaraj College Of Engineering And Technology",
      duration: "November 2021 - April 2025",
      image: "https://kamarajengg.edu.in/static/images/favicon.png",
      description: "Currently pursuing an B.E in Computer Science And Engineering with a focus on Software Development. Relevant coursework includes DSA,OOPS,Mobile app development,Web App development.",
      skills: "• Full Stack Development • Mobile Application • Python • Java • C • Javascript",
    },
    {
      degree: "Higher Secondary Education (Grade XII)",
      institution: "Velammal Bodhi Campus (CBSE)",
      duration: "Aug 2020 - July 2021",
      image: "https://velammalmedicalcollege.edu.in/college/wp-content/uploads/2021/08/2.png", // Replace with actual logo URL
      description: "Completed 12th grade with a focus on Science (Physics, Chemistry, Mathematics). Achieved 85% in CBSE Board Examinations. I have completed my 12th with Major in Computer Science .",
      skills: "• Physics • Chemistry • Mathematics • Problem Solving",
    },
    {
      degree: "Higher Secondary Education (Grade X)",
      institution: "Velammal Bodhi Campus (CBSE)",
      duration: "Aug 2020 - July 2021",
      image: "https://velammalmedicalcollege.edu.in/college/wp-content/uploads/2021/08/2.png", // Replace with actual logo URL
      description: "Completed 10th grade with a focus on Science (Physics, Chemistry, Mathematics). Achieved 83% in CBSE Board Examinations.",
      skills: "• Physics • Chemistry • Mathematics • Problem Solving",
    },
  ];

  return (
    <div className='mt-16 md:mt-24 flex flex-col px-4'> {/* Adjusted top margin and added horizontal padding */}
      <div>
        <h1 className='text-2xl md:text-3xl font-medium text-white text-center'>Education</h1> {/* Responsive text size */}
        <h1 className='text-white text-center text-base md:text-lg mt-2'>My academic journey</h1> {/* Responsive text size */}
      </div>
      <div className='mt-10 max-w-4xl mx-auto w-full'> {/* Centered the timeline and controlled max width */}
        {education.map((edu, index) => (
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
            {index < education.length - 1 && ( // Only render if it's not the last item
              <span className='absolute left-[4.5px] rounded-full top-8 h-[calc(100%+20px)] w-1 bg-purple-500 transition-all duration-300'></span> // Adjusted height to connect items
            )}

            {/* Content Card with Blur Effect */}
            <div className='relative'>
              <div className='absolute inset-0 bg-blue-500 rounded-lg blur opacity-50 z-0'></div> {/* z-0 to ensure content is above */}
              <div className='flex flex-col md:flex-row mb-4 bg-gray-900 gap-4 p-4 rounded-lg relative z-10 items-start'> {/* Changed gap and added z-10 */}
                <img
                  src={edu.image}
                  className='w-12 h-12 md:w-16 md:h-16 object-contain rounded flex-shrink-0' // Responsive image size, prevent shrinking
                  alt={`${edu.institution} logo`}
                />
                <div>
                  <h2 className='text-lg md:text-xl font-semibold text-white'>{edu.degree}</h2> {/* Responsive text size */}
                  <p className='text-gray-400 text-sm md:text-base'>{edu.institution}</p> {/* Responsive text size */}
                  <p className='text-gray-400 text-sm md:text-base'>{edu.duration}</p> {/* Responsive text size */}
                  <div className='mt-2'>
                    <h2 className='text-gray-400 text-sm md:text-base'>{edu.description}</h2> {/* Responsive text size */}
                    <h2 className='text-gray-400 text-sm md:text-base mt-1'>
                      <span className='font-medium'>Skills</span> : <span className='ml-2'>{edu.skills}</span>
                    </h2>
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

export default Education;