import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Typed from "typed.js";

const About = () => {
  const el = useRef(null);
  useEffect(() => {
    // Ensure Typed.js instance is destroyed when component unmounts
    const typed = new Typed(el.current, {
      strings: ["Full Stack Developer", "Frontend Developer", "Backend Developer"],
      startDelay: 300,
      typeSpeed: 100,
      backDelay: 150,
      backSpeed: 150,
      smartBackspace: true,
      loop: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div className="mb-10 mt-10 md:mt-20 px-4 md:px-0"> {/* Added horizontal padding for small screens */}
      <div className="flex flex-col items-center justify-center md:flex-row md:justify-between w-full min-h-[500px] relative">
        {/* <DotLottieReact
          className="hidden md:block md:absolute md:left-[360px] lg:left-[calc(50%-200px)] h-72 opacity-50" // Adjust left for larger screens
          src="https://lottie.host/40605679-be13-4687-a3d1-3a631cb7d986/N4IpnU9keL.lottie"
          loop
          autoplay
        /> */}

        {/* Text Content */}
        <div className="flex flex-col gap-2 items-center text-center md:items-start md:text-left h-full relative z-10 p-4 md:p-0"> {/* Added padding for text block */}
          <h1 className="text-white text-3xl md:text-4xl font-bold">HI, I am SRI SHARAN PRAKASH</h1> {/* Adjusted font size for small screens */}
          <h1 className="text-3xl md:text-4xl text-white">
            I am a{" "}
            <span className="text-purple-500 font-medium transition duration-300" ref={el} />
          </h1>
          <h1 className="text-gray-400 text-base md:text-lg font-medium max-w-full md:max-w-[500px]"> {/* Changed w-[500px] to max-w-full */}
            I am a passionate developer with a keen interest in building scalable web applications and working with modern technologies.
          </h1>
          <div className="mt-5">
            <Link to="https://drive.google.com/file/d/1-1BchPH5bbEkykNiKQj1LTReX07JoTO3/view">
            <button className="border-1 border-purple-500 rounded-full px-4 py-2 text-purple-500 cursor-pointer hover:bg-purple-500 font-medium hover:text-white transition duration-500">
                My Resume
            </button>
            </Link>
          </div>
        </div>

        {/* Second Lottie (main character/illustration) */}
        <div className="h-[250px] w-[250px] md:h-[400px] md:w-[400px] relative z-10 mt-8 md:mt-0"> {/* Reduced size for small screens, added margin-top for stacking */}
          <DotLottieReact
            src="https://lottie.host/6a4543b5-cba3-4afe-b916-216ea0fa0363/8o21Al1ky6.lottie"
            loop
            autoplay
          />
        </div>
      </div>
    </div>
  );
};

export default About;