import React from 'react'
import {FaInstagram  , FaGithub , FaLinkedin} from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { MdOutlineMailOutline } from "react-icons/md";
import { motion } from 'framer-motion';
import Link from 'next/link';

const SocialLinksMobile = () => {
    const socialLinks = [
        
       {
           name: "Email",
       
           icon: <MdOutlineMailOutline className="text-2xl" />,
           link: "mailto:sreyas1045@gmail.com",
           color: "hover:text-gray-100",
         },
         {
           name: "GitHub",
           icon: <FaGithub className="text-2xl" />,
           link: "https://github.com/sreyas-b-anand",
           color: "hover:text-gray-100",
         },
         {
           name: "LinkedIn",
           icon: <FaLinkedin className="text-2xl" />,
           link: "https://www.linkedin.com/in/sreyas-b-anand",
           color: "hover:text-blue-400",
         },
         
         {
           name: "Instagram",
           icon: <FaInstagram className="text-2xl" />,
           link: "https://www.instagram.com/sre___y___a___s/",
           color: "hover:text-pink-500",
         },
         {
          name: "Twitter",
          icon: <FaXTwitter className="text-2xl" />,
          link: "https://twitter.com/sre___y___as___/",
          color: "hover:text-black",
        },
      ];    
  return (
    <motion.div className=' flex-row gap-6 items-center justify-center w-full flex lg:hidden' >
      {socialLinks.map((contact) => (
        <motion.div
          key={contact.name}
          whileHover={{

            
            scale: 1.2,
            transition: { duration: 0.5 },
          }}
          className="text-2xl text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
        >
          <Link     href={contact.link} target="_blank" rel="noopener noreferrer">
            {contact.icon}
          </Link>
        </motion.div>
      ))}
    </motion.div>
  );
};


export default SocialLinksMobile
