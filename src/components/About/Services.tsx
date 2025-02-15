"use client";
import { scrollToSection } from "@/utils/ScrollToView";
import { motion } from "framer-motion";

const Services = () => {
  const services = [
    {
      name: "Web Development",
      description:
        "Building responsive and dynamic web applications using modern technologies.",
      icon: "💻",
    },
    {
      name: "UI/UX Design",
      description: "Creating intuitive and visually appealing user interfaces.",
      icon: "🎨",
    },
  ];

  return (
    <div className="w-full py-20">
      <div className="max-w-7xl mx-auto px-8">
        {/* Header */}
        <div className="flex items-center justify-start flex-col group gap-1 mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-3xl font-bold text-center text-violet-200 pt-20"
          >
            What I offer
          </motion.h2>
          <div className="h-1 rounded-full w-0 group-hover:w-36 transition-all duration-300 bg-violet-100" />
        </div>

        {/* Services Grid */}
        <div className="flex flex-wrap items-center justify-center gap-8 ">
          {services.map((service, index) => (
            <motion.div
              key={service.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="p-6 max-w-[400px] rounded-xl border border-violet-500/20 bg-violet-500/5 backdrop-blur-sm
                         hover:border-violet-500/30 hover:bg-violet-500/10 transition-all duration-300 hover:cursor-pointer"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-violet-200">
                {service.name}
              </h3>
              <p className="text-white/70">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
      <div className="text-center mt-16 hidden sm:flex items-center justify-center gap-4 ">
        <div className="text-white/70 text-xl flex items-center justify-center gap-4">
          Want to see these skills in action ?
          <a
            onClick={() => scrollToSection("projects")}
            className= "underline text-violet-400 hover:text-violet-300 ml-2 transition-colors cursor-pointer"
          >
            Click here 
          </a>
          <p> : </p>
          <a
            href="https://github.com/sreyas-b-anand"
            target="_blank"
            rel="noopener noreferrer"
            className= "underline text-white hover:text-violet-300 ml-2 transition-colors cursor-pointer"
          >
            Github
          </a>
        </div>
      </div>
    </div>
  );
};

export default Services;
