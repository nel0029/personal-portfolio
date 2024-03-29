/** @format */
import { motion } from "framer-motion";
import { IoArrowDown, IoLogoGithub, IoLogoLinkedin } from "react-icons/io5";

const Hero = () => {
  const transitionValues = {
    duration: 0.8,
    repeat: Infinity,
    ease: "easeInOut",
    repeatType: "reverse",
  };

  const goToMyWorks = () => {
    const projects: HTMLElement | null = document.getElementById("projects");
    projects?.scrollIntoView({ behavior: "smooth" });
  };

  const goToContactMe = () => {
    const contact: HTMLElement | null = document.getElementById("contact");

    contact?.scrollIntoView({ behavior: "smooth" });
  };

  const header = document.getElementById("header");

  return (
    <div
      style={{ paddingTop: header ? header.offsetHeight : "52px" }}
      className="w-full min-h-screen flex-1 flex flex-col gap-y-10 px-2"
    >
      <div className="w-full flex flex-col gap-y-10">
        <div className="w-full flex flex-col-reverse items-center md:items-center md:flex-row pt-5 md:pt-10 gap-y-2">
          <motion.div
            className="w-full text-xl md:text-3xl font-poppins"
            initial={{ translateY: "-100%", opacity: 0 }}
            animate={{ translateY: "0%", opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-3xl md:text-6xl md:sleading-[80px] font-bold">
              Hello, I'm Jaynel.
            </p>
            <p>
              aspiring{" "}
              <span className="font-bold text-blue">
                Frontend / Fullstack Web Developer
              </span>{" "}
              who loves buiding web interface and web applications.
            </p>
          </motion.div>

          <div>
            <motion.img
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="w-[200px] md:w-[400px] rounded-full"
              src="./GRAD.jpg"
            />
          </div>
        </div>

        <div className="w-full flex flex-row items-center gap-x-2 text-base md:text-xl">
          <motion.button
            className="border border-blue bg-blue rounded px-2 py-1 text-white font-bold hover:bg-opacity-80"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            onClick={goToMyWorks}
          >
            Check my Works
          </motion.button>
          <motion.button
            className="border border-blue  rounded px-2 py-1 text-blue font-bold hover:bg-blue hover:bg-opacity-10 hover:border-opacity-80"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            onClick={goToContactMe}
          >
            Contact Me
          </motion.button>
        </div>
      </div>
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
          href="https://www.linkedin.com/in/jaynel-lucanas"
          target="_blank"
        >
          <span>
            <IoLogoLinkedin />
          </span>
          <span className="text-base">LinkedIn</span>
        </a>
      </div>
      <div className="w-full flex flex-row items-center justify-center relative pb-10">
        <motion.div
          className="border-2 px-1 py-2 rounded-full border-blue text-blue font-bold absolute"
          initial={{ opacity: 0 }}
          animate={{ y: ["-10px", "-20px"], opacity: 1 }}
          transition={{
            y: transitionValues,
          }}
        >
          <IoArrowDown />
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
