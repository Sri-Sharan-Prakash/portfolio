import React from 'react'

const Experience = () => {
  const experience = [{name:"Full Stack Developer Intern",image:"https://media.licdn.com/dms/image/v2/D4D0BAQH_IP1079LmJw/company-logo_200_200/B4DZfJ4.i.GgAM-/0/1751438846907/skillminetech_logo?e=2147483647&v=beta&t=KDX34xzIxdJ6Q20ZKvWoEmtqu4xN5hLJ_SJZ21ODpRI",description:"Worked in their major product comPLYment where I have contributed to the development of key features and improvements. Had developed admin-side functionalities like CRUD in both frontend and backend.", company:"Skillmine Technologies Pvt Ltd", duration:"Jan 2025 - July 2025",stipend:"7500"}]
  return (
    <div className='mt-23'>
        <div>
            <h1 className='text-3xl font-medium text-white text-center'>Experience</h1> 
        </div>
        <div className='mt-10'>
            {experience.map((exp, index) => (
                <div key={index} className='flex mb-5 bg-gray-900 gap-5 p-4 rounded-lg'>
                  <div>
                    <img src={exp.image} className='w-15 rounded-2xl' alt="" />
                  </div>
                  <div>
                    <h2 className='text-xl font-semibold text-white'>{exp.name}</h2>
                    <h2 className='text-white'>{exp.description}</h2>
                    <p className='text-gray-400'>{exp.company}</p>
                    <p className='text-gray-400'>{exp.duration}</p>
                    <p className='text-gray-100 bg-purple-500 rounded w-fit font-medium px-4 mt-2 py-1'>Stipend: ₹ {exp.stipend}</p>
                  </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Experience