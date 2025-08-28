import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { useEffect, useRef } from "react"
import Typed from "typed.js"

const About = () => {
    const el=useRef(null);
    useEffect(() => {
        new Typed(el.current, {
            strings: ["Full Stack Developer", "Frontend Developer", "Backend Developer"],
            startDelay:300,
            typeSpeed: 100,
            backDelay:150,
            backSpeed: 150,
            smartBackspace:true,
            loop:true,
        })
    },[])
  return (
    <div className="mb-10 mt-20">
        <div className="flex items-center justify-between w-full h-[500px] relative">
             <DotLottieReact
                className="absolute left-[360px] h-72 opacity-50"
                src="https://lottie.host/40605679-be13-4687-a3d1-3a631cb7d986/N4IpnU9keL.lottie"
                loop
                autoplay
             />
        <div className="flex flex-col gap-2 justify-center h-full relative z-10">
            <h1 className="text-white text-4xl font-bold">HI, I am SRI SHARAN PRAKASH</h1>
            <h1 className="text-4xl text-white">I am a <span className="text-purple-500 font-medium transition duration-300" ref={el}/></h1>
            <h1 className="text-gray-400 text-wrap text-lg font-medium w-[500px]">I am a passionate developer with a keen interest in building scalable web applications and working with modern technologies.</h1>
            <div className="mt-5">
            <button className="border-1 border-purple-500 rounded-full px-4 py-2 text-purple-500 cursor-pointer hover:bg-purple-500 font-medium hover:text-white transition duration-500">Download Resume</button>
            </div>
        </div>
        <div className="h-[400px] w-[400px] relative z-10">
            <DotLottieReact
                src="https://lottie.host/6a4543b5-cba3-4afe-b916-216ea0fa0363/8o21Al1ky6.lottie"
                loop
                autoplay
            />
        </div>
        </div>
    </div>
  )
}

export default About;