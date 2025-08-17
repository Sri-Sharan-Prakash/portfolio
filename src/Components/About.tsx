import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { useEffect, useRef } from "react"
import Typed from "typed.js"

const About = () => {
    const el=useRef(null);
    useEffect(() => {
        const typed = new Typed(el.current, {
            strings: ["FULL STACK DEVELOPER", "FRONTEND DEVELOPER", "BACKEND DEVELOPER"],
            startDelay:300,
            typeSpeed: 100,
            backDelay:150,
            backSpeed: 150,
            smartBackspace:true,
            loop:true,
        })
})
  return (
    <div>
        <div className="flex items-center justify-between w-full h-[500px] relative">
             <DotLottieReact
                className="absolute left-[340px] h-72"
                src="https://lottie.host/40605679-be13-4687-a3d1-3a631cb7d986/N4IpnU9keL.lottie"
                loop
                autoplay
             />
        <div className="flex flex-col gap-2 justify-center h-full relative z-10">
            <h1 className="text-white text-4xl font-bold">HI, I am SRI SHARAN PRAKASH</h1>
            <h1 className="text-4xl text-white">I am a <span className="text-purple-500 transition duration-300" ref={el}/></h1>
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