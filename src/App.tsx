/** @format */

import AboutMe from "./components/AboutMe";
import Contact from "./components/Contact";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Projects from "./components/Projects";

function App() {
  return (
    <div className="w-full max-w-[1024px] h-auto flex flex-col justify-center scroll-smooth font-poppins px-2 gap-y-4 ">
      <Header />
      <Hero />
      <Projects />
      <AboutMe />
      <Contact />
    </div>
  );
}

export default App;
