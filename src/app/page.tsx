import Navbar from "@/components/Navbar";
import Intro from "@/components/Intro";
import About from "@/components/About/About";
import Projects from "@/components/Projects/Projects";
import ContactMe from "@/components/Contact/ContactMe";
import Footer from "@/components/Footer";
export default function Home() {
  return (
    <>
      <Navbar />

      <div className="pt-16 mt-6">
        <Intro />
        <About />
        <Projects />
        <ContactMe />
        <Footer/>
      </div>
    </>
  );
}
