import { lazy, Suspense } from "react";
import Navbar from "@/components/Navbar";
import Intro from "@/components/Intro";
const AboutComponent = lazy(() => import("@/components/About/About"));
const ProjectComponent = lazy(() => import("@/components/Projects/Projects"));
const ContactComponent = lazy(() => import("@/components/Contact/ContactMe"));
import Footer from "@/components/Footer";
import Loader from "@/components/Loader/Loader";
export default function Home() {
  return (
    <>
      <Navbar />

      <div className="pt-16 mt-6">
        <Intro />
        <Suspense
          fallback={<Loader/>}
        >
          <AboutComponent />
          <ProjectComponent />
          <ContactComponent />
        </Suspense>
        <Footer />
      </div>
    </>
  );
}
