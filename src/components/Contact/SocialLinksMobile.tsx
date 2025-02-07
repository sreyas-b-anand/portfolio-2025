import React from 'react'
import { FaTwitter, FaInstagram } from 'react-icons/fa';
import { motion } from 'framer-motion';
import Link from 'next/link';

const SocialLinksMobile = () => {
    const socialLinks = [
        
        
        {
          name: "Twitter",
          icon: <FaTwitter className="text-2xl" />,
          link: "https://twitter.com/your-handle",
          color: "hover:text-sky-400",
        },
        {
          name: "Instagram",
          icon: <FaInstagram className="text-2xl" />,
          link: "https://instagram.com/your-handle",
          color: "hover:text-pink-500",
        },
      ];    
  return (
    <motion.div className=' flex-row gap-6 hidden md:flex' >
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
