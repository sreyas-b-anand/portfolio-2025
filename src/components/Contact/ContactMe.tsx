"use client";
import { motion } from "framer-motion";
import Form from "./Form";
import SocialLinks from "./SocialLinks";

const ContactMe = () => {
  return (
    <section id="contact" className="relative min-h-screen w-full py-20">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid-white/[0.02] -z-0" />

      {/* Fixed Social Links */}
      <SocialLinks />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="relative z-10 container mx-auto px-4"
      >
        {/* Header */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-5xl font-bold text-white mb-4"
          >
            Get In Touch
          </motion.h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            Feel free to reach out for collaborations or just a friendly hello
          </p>
        </div>

        {/* Contact Content */}
        <div className="max-w-4xl mx-auto">
          {/* Contact Card */}
          <div className=" rounded-2xl ">
            {/* Form Section */}
            <div className="w-full max-w-2xl mx-auto flex justify-center">
              <Form />
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default ContactMe;
