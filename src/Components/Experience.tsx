import React from 'react'

const Experience = () => {
  const experience = [{name:"Full Stack Developer Intern",image:"https://media.licdn.com/dms/image/v2/D4D0BAQH_IP1079LmJw/company-logo_200_200/B4DZfJ4.i.GgAM-/0/1751438846907/skillminetech_logo?e=2147483647&v=beta&t=KDX34xzIxdJ6Q20ZKvWoEmtqu4xN5hLJ_SJZ21ODpRI",description:"Worked in their major product comPLYment where I have contributed to the development of key features and improvements. Had developed admin-side functionalities like CRUD in both frontend and backend.", company:"Skillmine Technologies Pvt Ltd", duration:"Jan 2025 - July 2025",stipend:"7500",skills:" • React • Mongo DB • Node Js • Express • Nest Js • Tailwind CSS"},{name:"Frontend Developer Intern",company:"Urtripo Aviation",duration:"Jan 2023 -Jan 2024",image:"https://urtripo-aviation.com/public/assets/images/resources/logo-small.png",description:"Worked on the development of the company website, where I was responsible for creating and maintaining the frontend components using React.js and Tailwind CSS. I also collaborated with the design team to ensure a responsive and user-friendly interface.",skills:"• React • Tailwind css • Html • Javascript • Bootstrap"}];
  return (
    <div className='mt-23 flex flex-col'>
        <div>
            <h1 className='text-3xl font-medium text-white text-center'>Experience</h1>
            <h1 className='text-white text-center text-lg mt-2'>Here are some of my recent experiences</h1> 
        </div>
        <div className='mt-10 ml-40 mr-40'>
            {experience.map((exp, index) => (
              <div className='relative'>
                  <div className='absolute inset-0 bg-blue-500 rounded-lg blur opacity-50'></div>
                <div key={index} className='flex flex-col mb-8 bg-gray-900 gap-5 p-4 rounded-lg relative'>
                  <span className='absolute left-[-30px] top-5 z-10 rounded-full h-3 w-3 bg-purple-500'></span>
                  <span className={`absolute left-[-26px] rounded-full top-10 ${exp.stipend ? "h-56":""} w-1 bg-purple-500 transition-all duration-300`}></span>
                  <div className='flex gap-5 items-start'>
                    <img src={exp.image} className='w-15 rounded' alt="" />
                    <div>
                    <h2 className='text-xl font-semibold text-white'>{exp.name}</h2>
                    <p className='text-gray-400'>{exp.company}</p>
                    <p className='text-gray-400'>{exp.duration}</p>
                  <div>
                    <h2 className='text-gray-400'>{exp.description}</h2>
                    <h2 className='text-gray-400 mt-1'><span className='font-medium'>Skills</span> : <span className='ml-2'>{exp.skills}</span></h2>
                    {exp.stipend && <p className='text-gray-100 bg-purple-500 rounded w-fit font-medium px-4 mt-2 py-1'>Stipend: ₹ {exp.stipend} per/month</p>}
                  </div>
                    </div>
                  </div>
                </div>
            </div>
            ))}
        </div>
    </div>
  )
}

export default Experience