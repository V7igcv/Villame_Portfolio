import Navbar from "./sections/Navbar";
import Hero from "./sections/Hero/Hero";
import About from "./sections/About/About";
import Skills from "./sections/Skills/Skills";
import Experience from "./sections/Experience/Experience";
import Projects from "./sections/Projects/Projects";
import Education from "./sections/Education/Education";
import Footer from "./sections/Footer/Footer";
import ScrollToTop from "./components/common/ScrollToTop";

function App() {
  return (
    <>
      <Navbar />

      <Hero />

      <About />

      <Skills />

      <Experience />

      <Projects />

      <Education />

      <Footer />

      <ScrollToTop />
    </>
  );
}

export default App;