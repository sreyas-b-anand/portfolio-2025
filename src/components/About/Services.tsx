"use client";
import { motion } from "framer-motion";
import { Link as ScrollLink } from "react-scroll";

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
            className="text-3xl font-bold text-center text-violet-200"
          >
            Services
          </motion.h2>
          <div className="h-1 rounded-full w-0 group-hover:w-32 transition-all duration-300 bg-violet-100" />
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="p-6 rounded-xl border border-violet-500/20 bg-violet-500/5 backdrop-blur-sm
                         hover:border-violet-500/30 hover:bg-violet-500/10 transition-all duration-300"
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
      <div className="text-center mt-16">
        <p className="text-white/70 text-xl">
          Want to see these skills in action?
          <ScrollLink
            to="projects"
            smooth={true}
            className="text-violet-400 hover:text-violet-300 ml-2 transition-colors cursor-pointer"
          >
            Check out my projects!
          </ScrollLink>
        </p>
      </div>
    </div>
  );
};

export default Services;
