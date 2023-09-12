/** @format */
import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

const Header = () => {
  const [isNavButtonsVisible, setIsNavButtonsVisible] = useState(false);

  const headerRef = useRef<HTMLDivElement | null>(null);
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleScroll = () => {
    const heroSectionHeight = window.innerHeight;
    const scrollPosition = window.scrollY;

    if (
      headerRef &&
      headerRef.current &&
      scrollPosition >= heroSectionHeight - headerRef.current.offsetHeight
    ) {
      setIsNavButtonsVisible(true);
    } else {
      setIsNavButtonsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      ref={headerRef}
      id="header"
      className="z-10 w-full fixed top-0 right-0 bg-white flex flex-row justify-center items-center"
    >
      <div className="w-full max-w-[1024px] flex flex-row items-center justify-between p-1 md:p-2">
        <div
          className="flex flex-row items-center gap-x-1 font-bold text-3xl font-poppins cursor-pointer"
          onClick={scrollToTop}
        >
          <span className="text-blue">NEL</span>
          <span>DEV</span>
        </div>
        <motion.div
          animate={{ opacity: isNavButtonsVisible ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        >
          Nav Buttons
        </motion.div>
      </div>
    </div>
  );
};

export default Header;
