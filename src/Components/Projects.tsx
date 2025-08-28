import React from "react"; // Import React
import { motion } from "framer-motion";
import ParticleBackground from "./ParticleBackground";
import ProjectCard from "./ProjectCard";


// Placeholder Icons
const ReactIcon = () =>{
  return(
    <div>
    </div>
  )
} 
const NextJSIcon = () => <span style={{ fontSize: '24px' }}>▶️</span>;
const NodeJSIcon = () => <span style={{ fontSize: '24px' }}>📦</span>;
const TypeScriptIcon = () => <span style={{ fontSize: '24px' }}>🔵</span>;
const PythonIcon = () => <span style={{ fontSize: '24px' }}>🐍</span>;
const FirebaseIcon = () => <span style={{ fontSize: '24px' }}>🔥</span>;

// Project Data
const projects = [
  { id: 1, title: "E-Commerce Platform", description: "A full-stack e-commerce platform with user authentication, payment integration, and an admin dashboard.", technologies: ["React", "Node.js", "Express.js", "MongoDB","Tailwind CSS"], demoUrl: "#", githubUrl: "#", icon: ReactIcon },
  // { id: 2, title: "Task Management App", description: "A collaborative task management application with real-time updates and team collaboration features.", technologies: ["Next.js", "TypeScript", "Prisma"], demoUrl: "#", githubUrl: "#", icon: NextJSIcon },
  // { id: 3, title: "Weather Dashboard", description: "A responsive weather dashboard that provides detailed weather information and forecasts.", technologies: ["React", "Chart.js", "Tailwind"], demoUrl: "#", githubUrl: "#", icon: TypeScriptIcon },
  // { id: 4, title: "Chat Application", description: "Real-time chat application with group messaging, file sharing, and video call integration.", technologies: ["Firebase", "WebRTC", "Socket.io"], demoUrl: "#", githubUrl: "#", icon: FirebaseIcon },
  // { id: 5, title: "API Gateway Service", description: "A scalable API gateway with rate limiting, authentication, and monitoring capabilities.", technologies: ["Node.js", "Express", "Redis", "Docker"], githubUrl: "#", icon: NodeJSIcon },
  // { id: 6, title: "Data Analytics Platform", description: "A data analytics platform with machine learning, data visualization, and automated reporting.", technologies: ["Python", "FastAPI", "Pandas"], demoUrl: "#", githubUrl: "#", icon: PythonIcon },
];

const Projects: React.FC = () => {
  return (
    <div className="min-h-screen text-white relative">
      <ParticleBackground />
      <div className="relative z-10 container mx-auto px-6 py-20">
        <motion.div className="text-center mb-16" initial={{ opacity: 0, y: -30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <h1 className="text-3xl md:text-3xl font-bold mb-4 bg-white to-red-500 bg-clip-text text-transparent">
            Projects
          </h1>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Here are some projects that showcase my skills in full-stack development and modern web technologies.
          </p>
        </motion.div>
        <div style={{ perspective: "1000px" }} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              technologies={project.technologies}
              demoUrl={project.demoUrl}
              githubUrl={project.githubUrl}
              icon={<project.icon />}
              index={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;