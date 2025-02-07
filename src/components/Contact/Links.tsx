import { motion } from "motion/react";
import Link from "next/link";
import React from "react";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

const Links = () => {
  const contacts = [
    {
      name: "Email",
      value: "sreyas1045@gmail.com",
      link: "mailto:sreyas1045@gmail.com",
      icon: <FaEnvelope />,
    },
    {
      name: "GitHub",
      value: "sreyas-b-anand",
      link: "https://github.com/sreyas-b-anand",
      icon: <FaGithub />,
    },
    {
      name: "LinkedIn",
      value: "Sreyas B Anand",
      link: "https://www.linkedin.com/in/sreyas-b-anand",
      icon: <FaLinkedin />,
    },
  ];

  return (
    <motion.div className="flex flex-row gap-6">
      {contacts.map((contact) => (
        <motion.div
          key={contact.name}
          whileHover={{
            
            scale: 1.2,
            transition: { duration: 0.5 },
          }}
          className="text-2xl text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
        >
          <Link href={contact.link} target="_blank" rel="noopener noreferrer">
            {contact.icon}
          </Link>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default Links;
