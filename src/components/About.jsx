import aboutImg from "../Assets/about.jpg";
import { ABOUT_TEXT } from "../constants";
import { motion } from "framer-motion";
const About = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-36">
      <motion.h2
         whileInView={{ opacity: 1 ,y: 0 }}
        initial={{ y: -100, opacity: 0 }}
        
        transition={{ duration: 1 }}
        className="my-20 text-center text-4xl"
      >
        About
        <span className="text-neutral-500"> Me</span>
      </motion.h2>
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex items-center justify-center">
            <motion.img
              whileInView={{ opacity: 1 ,x: 0 }}
              initial={{ x: -100, opacity: 0 }}
             
              transition={{ duration: 1 }}
              className="rounded-2xl"
              src={aboutImg}
              alt=""
            />
          </div>
        </div>
        <div className="w-full lg:w-1/2">
          <div className="flex justify-center lg:justify-start">
            <motion.p
               whileInView={{ opacity: 1 ,x: 0 }}
              initial={{ x: 100, opacity: 0 }}
         
              transition={{ duration: 1 }}
              className="
          my-2 max-w-xl py-6 bg-gradient-to-r from-orange-400 via-white to-green-500 bg-clip-text text-transparent"
            >
              {ABOUT_TEXT}
            </motion.p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
