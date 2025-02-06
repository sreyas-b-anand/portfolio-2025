import Navbar from "@/components/Navbar";
import Intro from "@/components/Intro";
import About from "@/components/About/About";
import Projects from "@/components/Projects/Projects";
export default function Home() {
  return (
    <>
      <Navbar />
      <Intro />
      <About />
      <Projects />
    </>
  );
}
