import { motion } from 'framer-motion'

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
    <div className='mt-23 flex flex-col'>
      <div>
        <h1 className='text-3xl font-medium text-white text-center'>Education</h1>
        <h1 className='text-white text-center text-lg mt-2'>My academic journey</h1>
      </div>
      <div className='mt-10 ml-40 mr-40'>
        {education.map((edu, index) => (
            <motion.div
            initial={{ opacity: 0, translateY: "60%" }}
            whileInView={{ opacity: 1, translateY: "0%" }}
            transition={{ duration: 1, delay: index * 0.3 }}
            key={index}
            className='relative'>
            <div className='absolute inset-0 bg-blue-500 rounded-lg blur opacity-50'></div>
            <div className='flex flex-col mb-8 bg-gray-900 gap-5 p-4 rounded-lg relative'>
              {/* This span creates the timeline point */}
              <span className='absolute right-[-30px] top-5 z-10 rounded-full h-3 w-3 bg-purple-500'></span>
              {/* Conditional rendering for the vertical line */}
              {index < education.length - 1 && ( // Only render if it's not the last item
                <span className='absolute right-[-26px] rounded-full top-10 h-48 w-1 bg-purple-500 transition-all duration-300'></span>
              )}
              <div className='flex gap-5 items-start'>
                <img src={edu.image} className='w-15 h-15 object-contain rounded' alt={`${edu.institution} logo`} />
                <div>
                  <h2 className='text-xl font-semibold text-white'>{edu.degree}</h2>
                  <p className='text-gray-400'>{edu.institution}</p>
                  <p className='text-gray-400'>{edu.duration}</p>
                  <div>
                    <h2 className='text-gray-400'>{edu.description}</h2>
                    <h2 className='text-gray-400 mt-1'><span className='font-medium'>Skills</span> : <span className='ml-2'>{edu.skills}</span></h2>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default Education;