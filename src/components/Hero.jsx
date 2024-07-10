import { HERO_CONTENT } from "../constants";
import profilePic from "../Assets/kevinRushProfile.png";
import { motion } from "framer-motion";


const container =(delay) => ({
  hidden:{x: -100 , opacity: 0},
  visible: {x: 0 ,opacity:1, transition: {duration:1,delay:delay},
},
});


const Hero = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-36">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <motion.h1
             variants={container(0)}
             initial ='hidden'
             animate='visible'

              className="pb-16 text-6xl font-thin tracking-tight lg:mt-16
            lg:text-8xl"
            >
              Rohan Mishra
            </motion.h1>
            <motion.span
                variants={container(0.5)}
                initial ='hidden'
                animate='visible'
              className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent"
            >
              {" "}
              Full Stack Developer
            </motion.span>
            <motion.p 
               variants={container(1)}
               initial ='hidden'
               animate='visible'
               className="pt-2 lg:pt-0 pb-14">{HERO_CONTENT}</motion.p>
          </div>
        </div>
        <div className="w-full lg:w-1/2">
          <motion.div 
             initial={{x:100 ,opacity:0}} 
             animate={{x:0 , opacity:1}}
             transition={{duration:1}}
          className="flex justify-center">
            <img src={profilePic} alt="" />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
