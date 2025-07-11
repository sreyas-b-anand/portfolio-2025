import Services from "./Services";
import Skills from "./Skills";
import Timeline from "./Timeline";

const About = () => {
  const timeline = [
    {
      year: "2025",
      heading: "Exploring new technologies",
      description: "Learning Machine Learning and exploring new technologies.",
    },
    {
      year: "2024",
      heading: "Full Stack Development",
      description: "Learning MERN stack and building web applications.",
    },

    {
      year: "2023",
      heading: "Web Dev Fundamentals",
      description: "Grasped HTML, CSS, and JavaScript basics.",
    },
    {
      year: "2022",
      heading: "First Steps",
      description: "Started HTML during 12th grade.",
    },
  ];
  return (
    <div
      id="about"
      className="relative overflow-hidden min-h-screen flex items-center justify-center py-20 w-screen flex-col mb-2 pt-40"
    >
      <div className="absolute  w-screen hidden sm:flex items-center justify-center z-0 overflow-hidden">
        <p className="text-9xl text-center font-bold tracking-[8rem] opacity-[0.008] drop-shadow-md px-10">
          ABOUT ME
        </p>
      </div>

      <div className="relative z-10 w-full max-w-4xl mx-auto min-h-screen">
        <div className="flex items-center justify-start flex-col group gap-1 mb-10">
          <h3 className="text-white text-5xl font-bold text-center ">
            About Me
          </h3>
          
        </div>
        
         
          <div className="group flex items-center justify-start flex-col group gap-1 mb-10">
            <header className="text-violet-200 text-3xl font-bold text-center ">
              How I started
            </header>
            <div className="w-0 h-1 rounded-full group-hover:w-44 bg-violet-200 transition-all duration-300 " />
          </div>
         
      
        <div className="flex flex-col gap-6 px-2">
          {timeline.map((item) => (
            <Timeline key={item.year} {...item} />
          ))}
        </div>
      </div>
      <Skills />
      <Services />
    </div>
  );
};

export default About;
