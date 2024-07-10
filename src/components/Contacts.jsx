import React from "react";
import { CONTACT } from "../constants";
import { motion } from "framer-motion";

const Contacts = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <motion.h1
         whileInView={{ opacity: 1 ,y: 0 }}
        initial={{ y: -100, opacity: 0 }}
        
        transition={{ duration: 1 }}
        className="my-10 text-center text-4xl"
      >
        Get in touch
      </motion.h1>
      <div
      
        className="text-center tracking-tighter "
      >
        <motion.p
           whileInView={{ opacity: 1 ,x: 0 }}
          initial={{ x: -100, opacity: 0 }}
          
          transition={{ duration: 1 }}
        >{CONTACT.phoneNo}</motion.p>
        <motion.div
           whileInView={{ opacity: 1 ,x: 0 }}
         initial={{ x: 100, opacity: 0 }}
         transition={{ duration: 1 }}
        >
        <a
          href="#"
          className="border-b "
        >
          {" "}
          {CONTACT.email}
        </a>
        </motion.div>

      </div>
    </div>
  );
};

export default Contacts;
