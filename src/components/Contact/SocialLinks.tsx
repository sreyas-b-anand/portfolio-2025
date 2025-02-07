    import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa'

const socialLinks = [
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
function SocialLinks() {
  return (
    <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className=" fixed left-4 bottom-0 z-20 hidden md:flex flex-col gap-4 items-center"
      >
        {socialLinks.map((social, index) => (
          <motion.div
            key={social.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ x: 5, scale: 1.1 }}
          >
            <Link
              href={social.link}
              target="_blank"
              className={`p-3 rounded-full bg-violet-500/10 border border-violet-500/20 
                       backdrop-blur-sm hover:bg-violet-500/20 transition-all duration-300 
                       ${social.color} block`}
              aria-label={social.name}
            >
              {social.icon}
            </Link>
          </motion.div>
        ))}
        <div className="h-24 w-[2px] bg-gradient-to-b from-violet-500/20 to-transparent" />
      </motion.div> 
  )
}

export default SocialLinks
