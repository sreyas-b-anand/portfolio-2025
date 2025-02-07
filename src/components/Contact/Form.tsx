import { motion } from "framer-motion";
import React from "react";
import Links from "./Links";
import SocialLinksMobile from "./SocialLinksMobile";

const Form = () => {
  return (
   <>
    <div className="flex flex-col gap-9">
    <motion.form
      initial={{ opacity: 0, x: 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      className="space-y-4 p-6 w-80 sm:w-96  rounded-xl border border-violet-500/20 
                     bg-violet-500/5 backdrop-blur-sm "
    >
      <div className="flex items-start justify-center flex-col gap-2 w-full">
        <label htmlFor="name" className="block text-violet-200 mb-2">
          Name
        </label>

        <input
          type="text"
          id="name"
          className="w-full flex-1 p-2 rounded-lg bg-black/20 border border-violet-500/20 
                         focus:border-violet-500/40 outline-none text-white/70"
        />
      </div>
      <div className="flex items-start justify-center flex-col gap-2 w-full">
        <label htmlFor="email" className="block text-violet-200 mb-2">
          Email
        </label>
        <input
          type="email"
          id="email"
          className="w-full p-2 rounded-lg bg-black/20 border border-violet-500/20 
                         focus:border-violet-500/40 outline-none text-white/70"
        />
      </div>
      <div className="flex items-start justify-center flex-col gap-2 w-full">
        <label htmlFor="message" className="block text-violet-200 mb-2">
          Message
        </label>
        <textarea
          id="message"
          rows={4}
          className="w-full p-2 rounded-lg bg-black/20 border border-violet-500/20 
                         focus:border-violet-500/40 outline-none text-white/70"
        />
      </div>
      <button
        type="submit"
        className="w-full py-2 bg-violet-500/20 rounded-lg text-violet-200 
                       hover:bg-violet-500/30 transition-all duration-300 
                       border border-violet-500/30"
      >
        Send Message
      </button>
    </motion.form>
    <div className="flex justify-end mb-12 gap-6 mt-10" >
    <Links />
    <SocialLinksMobile />
  </div>
    </div>
   </>
  );
};

export default Form;
