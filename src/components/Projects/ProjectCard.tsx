import { motion } from "framer-motion";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";

interface ProjectCardProps {
  header: string;
  desc: string;
  gitlink: string;
  weblink: string;
  imageUrl: StaticImageData;
  techStack: string[];
}

const ProjectCard = ({
  header,
  desc,
  gitlink,
  weblink,
  imageUrl,
  techStack,
}: ProjectCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group w-full max-w-3xl bg-violet-500/5 backdrop-blur-sm rounded-2xl overflow-hidden"
    >
      <div className="flex flex-col md:flex-row">
        {/* Image Section */}
        <div className="relative w-full md:w-[40%] h-[200px] md:h-auto overflow-hidden">
          <Image
            src={imageUrl}
            alt={header}
            fill
            className="group-hover:scale-110 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
        </div>

        {/* Content Section */}
        <div className="flex-1 p-6 flex flex-col justify-between gap-4">
          <div>
            <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-violet-100 transition-colors">
              {header}
            </h3>
            <p className="text-white/70 mb-4">{desc}</p>

            {/* Tech Stack */}
            <div className="flex flex-wrap gap-2">
              {techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 text-sm bg-violet-500/10 border border-violet-500/20 
                           rounded-full text-violet-200 group-hover:border-violet-500/30 transition-colors"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Links */}
          <div className="flex gap-4 mt-auto">
            <Link
              href={gitlink}
              target="_blank"
              className="flex-1 py-2 text-center bg-violet-500/20 rounded-lg text-violet-200 
                       hover:bg-violet-500/30 transition-all duration-300 border border-violet-500/30"
            >
              GitHub
            </Link>
            <Link
              href={weblink}
              target="_blank"
              className="flex-1 py-2 text-center bg-violet-500/20 rounded-lg text-violet-200 
                       hover:bg-violet-500/30 transition-all duration-300 border border-violet-500/30"
            >
              Live Demo
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
