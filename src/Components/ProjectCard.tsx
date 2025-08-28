import React, { useRef } from "react"; // Import React
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { FiExternalLink, FiGithub } from "react-icons/fi";

export interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  demoUrl?: string;
  githubUrl?: string;
  icon: React.ReactNode;
  index: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  technologies,
  demoUrl,
  githubUrl,
  icon,
}) => {
  const ref = useRef<HTMLDivElement>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["15deg", "-15deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-15deg", "15deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const { width, height, left, top } = rect;
    const mouseX = e.clientX - left;
    const mouseY = e.clientY - top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      className="bg-gray-800/70 backdrop-blur-md border border-gray-700 rounded-xl flex flex-col h-full"
    >
      {/* <div style={{ transform: "translateZ(50px)" }} className="p-6 gap-4 flex items-start justify-between">
        <div className="flex items-center gap-4 text-gray-400">
          {githubUrl && <a href={githubUrl} target="_blank" rel="noopener noreferrer" className="hover:text-purple-400 transition-colors" aria-label="GitHub"><FiGithub size={24} /></a>}
          {demoUrl && <a href={demoUrl} target="_blank" rel="noopener noreferrer" className="hover:text-purple-400 transition-colors" aria-label="Live Demo"><FiExternalLink size={24} /></a>}
        </div>
      </div> */}
        <div className="p-3 w-full h-72 rounded-lg">{icon}</div>
      <div style={{ transform: "translateZ(40px)" }} className="px-6 pb-6 flex-grow flex flex-col">
        <h3 className="text-2xl font-bold mb-2 text-gray-100">{title}</h3>
        <p className="text-gray-400 leading-relaxed flex-grow">{description}</p>
      </div>
      <div style={{ transform: "translateZ(20px)" }} className="px-6 py-4 bg-gray-900/50 border-t border-gray-700">
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech) => (
            <span key={tech} className="bg-purple-500/20 text-purple-300 text-xs font-semibold px-3 py-1 rounded-full">{tech}</span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;