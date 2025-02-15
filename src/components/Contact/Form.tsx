import { motion } from "framer-motion";
import React, { useState } from "react";
import emailjs from "@emailjs/browser";

import SocialLinksMobile from "./SocialLinksMobile";

const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!name || !email || !message) {
      alert("Please fill in all fields");
      return;
    }

    const emailTemplate = {
      from_name: name,
      from_email: email,
      message: message,
    };

    emailjs
      .send(
        process.env.NEXT_PUBLIC_SERVICE_ID!,
        process.env.NEXT_PUBLIC_TEMPLATE_ID!,
        emailTemplate,
        process.env.NEXT_PUBLIC_USER_ID!
      )
      .then(
        () => {
          //console.log("Email sent successfully");
          //alert("Message sent!");
        },
        (error : Error) => {
          //console.error("Failed to send email:", error);
          //alert("Failed to send email. Please try again.");
        }
      );

    // Clear form
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <div className="flex flex-col gap-9">
      <motion.form
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        onSubmit={handleSubmit}
        className="space-y-4 p-6 w-80 sm:w-96 rounded-xl border border-violet-500/20 
                   bg-violet-500/5 backdrop-blur-sm "
      >
        <div className="flex flex-col gap-2 w-full">
          <label htmlFor="name" className="text-violet-200">
            Name
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-2 rounded-lg bg-black/20 border border-violet-500/20 
                       focus:border-violet-500/40 outline-none text-white/70"
          />
        </div>
        <div className="flex flex-col gap-2 w-full">
          <label htmlFor="email" className="text-violet-200">
            Email
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-2 rounded-lg bg-black/20 border border-violet-500/20 
                       focus:border-violet-500/40 outline-none text-white/70"
          />
        </div>
        <div className="flex flex-col gap-2 w-full">
          <label htmlFor="message" className="text-violet-200">
            Message
          </label>
          <textarea
            id="message"
            rows={4}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
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
      <div className="flex justify-end mb-12 gap-6 mt-10">
        <SocialLinksMobile />
      </div>
    </div>
  );
};

export default Form;
