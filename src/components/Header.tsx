/** @format */
import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  IoMenuOutline,
  IoClose,
  IoLogoGithub,
  IoLogoLinkedin,
} from "react-icons/io5";

const Header = () => {
  const headerRef = useRef<HTMLDivElement | null>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [projects, setProjects] = useState<HTMLElement | null>(null);
  const [about, setAbout] = useState<HTMLElement | null>(null);
  const [contact, setContact] = useState<HTMLElement | null>(null);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const goToMyWorks = () => {
    setIsMenuOpen(false);
    projects?.scrollIntoView({ behavior: "smooth" });
  };

  const goToAboutMe = () => {
    setIsMenuOpen(false);
    about?.scrollIntoView({ behavior: "smooth" });
  };

  const goToContactMe = () => {
    setIsMenuOpen(false);
    contact?.scrollIntoView({ behavior: "smooth" });
  };

  const openMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const project = document.getElementById("projects");
    const about = document.getElementById("about-me");
    const contact = document.getElementById("contact");

    setProjects(project);
    setAbout(about);
    setContact(contact);

    if (isMenuOpen) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "visible";
    }
  }, [projects, isMenuOpen]);

  return (
    <div
      ref={headerRef}
      id="header"
      className="z-10 w-full fixed top-0 right-0 bg-white flex flex-row justify-center items-center"
    >
      <div className="w-full max-w-[1024px] flex flex-row items-center justify-between p-1 md:p-2">
        <button
          className="flex flex-row items-center gap-x-1 font-bold text-3xl font-poppins"
          onClick={scrollToTop}
        >
          <span className="text-blue">NEL</span>
          <span>DEV</span>
        </button>
        <div className="hidden md:flex flex-row gap-x-10">
          <span
            onClick={goToMyWorks}
            className="hover:underline hover:text-blue cursor-pointer"
          >
            Projects
          </span>
          <span
            onClick={goToAboutMe}
            className="hover:underline hover:text-blue cursor-pointer"
          >
            About Me
          </span>
          <span
            onClick={goToContactMe}
            className="hover:underline hover:text-blue cursor-pointer"
          >
            Contact
          </span>
        </div>
        <div className="flex md:hidden">
          <span onClick={openMenu} className="text-3xl">
            <IoMenuOutline />
          </span>

          <motion.div
            className="w-full h-screen fixed top-0 -right-full flex flex-row justify-center items-center bg-black bg-opacity-20"
            animate={{ translateX: isMenuOpen ? "-100%" : "100%" }}
            transition={{ duration: 0.1 }}
          >
            <div
              onClick={() => setIsMenuOpen(false)}
              className="h-full w-[60px] "
            ></div>
            <div className="w-full h-full flex flex-col justify-center items-center bg-white">
              <div className="w-full flex flex-row justify-end text-3xl">
                <span onClick={() => setIsMenuOpen(false)} className="p-2 ">
                  <IoClose />
                </span>
              </div>
              <div className="flex-grow w-full flex flex-col justify-center items-center gap-y-10 text-xl">
                <span
                  onClick={goToMyWorks}
                  className="hover:underline hover:text-blue cursor-pointer"
                >
                  Projects
                </span>
                <span
                  onClick={goToAboutMe}
                  className="hover:underline hover:text-blue cursor-pointer"
                >
                  About Me
                </span>
                <span
                  onClick={goToContactMe}
                  className="hover:underline hover:text-blue cursor-pointer"
                >
                  Contact
                </span>
                <div className="w-full flex flex-row items-center justify-center gap-x-4 py-4">
                  <a
                    className="text-xl flex flex-row items-center gap-x-2 hover:text-blue"
                    href="https://github.com/nel0029"
                    target="_blank"
                  >
                    <span>
                      <IoLogoGithub />
                    </span>
                    <span className="text-base">Github</span>
                  </a>
                  <a
                    className="text-xl flex flex-row items-center gap-x-2 hover:text-blue"
                    href="https://linkedin.com/in/jaynel-lucañas-130577253"
                    target="_blank"
                  >
                    <span>
                      <IoLogoLinkedin />
                    </span>
                    <span className="text-base">LinkedIn</span>
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Header;
