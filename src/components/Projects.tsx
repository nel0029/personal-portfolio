/** @format */
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css";
import { Pagination, Navigation } from "swiper/modules";
import { globallyImages } from "./data/GloballyImages";
import { cakeStoreImages } from "./data/CakeStoreImages";
import { portfolioImages } from "./data/PortfolioImages";
import {
  IoLogoNodejs,
  IoLogoReact,
  IoLinkOutline,
  IoLogoGithub,
} from "react-icons/io5";
import expressIcon from "../assets/icons/express.svg";
import mongoDBIcon from "../assets/icons/mongodb.svg";
import typescriptIcon from "../assets/icons/typescript.svg";
import tailwindcssIcon from "../assets/icons/tailwind-css.svg";

const Projects = () => {
  const header = document.getElementById("header");
  return (
    <div
      id="projects"
      className="w-full h-full min-h-screen flex flex-col gap-y-4"
      style={{
        paddingTop: header ? header.offsetHeight + 8 : "60px",
        paddingBottom: header ? header.offsetHeight + 8 : "52px",
      }}
    >
      <div className="w-full">
        <span className="text-3xl font-bold ">MY PROJECTS</span>
      </div>
      <div className="w-full flex flex-col gap-y-8">
        <div className="w-full flex flex-col md:flex-row gap-x-4 ga-y-2 md:justify-between">
          <div className="flex-1 py-2">
            <div className="w-full h-full flex flex-col justify-between gap-y-4">
              <div className="w-full h-full flex flex-col gap-y-2">
                <h1 className="text-2xl font-bold">Globally</h1>
                <p>
                  Globally is a social media website and application for
                  everyone who has something to share with the world. This app
                  was inspired by Twitter and includes CRUD functionality, where
                  anyone can post, reply, like, and repost.
                </p>
              </div>
              <div className="w-full grid grid-cols-2 gap-2 py-2 text-sm">
                <div className="flex flex-row gap-x-1 items-center">
                  <span>
                    <img className="w-4" src={mongoDBIcon} />
                  </span>
                  <span>MongoDB</span>
                </div>
                <div className="flex flex-row gap-x-1 items-center">
                  <span>
                    <img className="w-4" src={expressIcon} />
                  </span>
                  <span>Express JS</span>
                </div>
                <div className="flex flex-row gap-x-1 items-center">
                  <span className="text-2xl">
                    <IoLogoReact />
                  </span>
                  <span>React</span>
                </div>
                <div className="flex flex-row gap-x-1 items-center">
                  <span className="text-2xl">
                    <IoLogoNodejs />
                  </span>
                  <span>NodeJS</span>
                </div>
                <div className="flex flex-row gap-x-1 items-center">
                  <span>
                    <img className="w-4" src={typescriptIcon} />
                  </span>
                  <span>Typescipt</span>
                </div>
                <div className="flex flex-row gap-x-1 items-center">
                  <span>
                    <img className="w-4" src={tailwindcssIcon} />
                  </span>
                  <span>TailwindCSS</span>
                </div>
              </div>
              <div className="w-full grid grid-cols-2 items-start">
                <div className="flex flex-row items-center gap-x-2 font-bold">
                  <div className=" flex flex-col bg-white px-2">
                    <a
                      className="hover:text-blue hover:underline cursor-pointer flex flex-row gap-x-2"
                      href="https://github.com/nel0029/globally"
                      target="_blank"
                    >
                      <span className="text-xl">
                        <IoLogoGithub />
                      </span>
                      Frontend Repo
                    </a>
                    <a
                      className="hover:text-blue hover:underline cursor-pointer flex flex-row gap-x-2"
                      href="https://github.com/nel0029/globally-express"
                      target="_blank"
                    >
                      <span className="text-xl">
                        <IoLogoGithub />
                      </span>
                      Backend Repo
                    </a>
                  </div>
                </div>
                <a
                  className="flex flex-row items-center gap-x-2 hover:text-blue hover:underline font-bold"
                  href="https://globally.vercel.app/"
                  target="_blank"
                >
                  <span className="text-xl">
                    <IoLinkOutline />
                  </span>
                  <span>Live Demo</span>
                </a>
              </div>
            </div>
          </div>
          <div className=" flex justify-center items-center">
            <div className="max-w-full h-full md:w-[400px]">
              <Swiper
                pagination={{
                  clickable: true,
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                effect="slide"
                speed={800}
                slidesPerView={1}
                loop={true}
              >
                {globallyImages.map((image: any, index: number) => (
                  <SwiperSlide key={index}>
                    <img
                      src={image.src}
                      alt="Demo image"
                      className="w-full h-auto"
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
        <div className="w-full flex flex-col md:flex-row gap-x-4 ga-y-2 md:justify-between">
          <div className="flex-1 py-2">
            <div className="w-full h-full flex flex-col justify-between gap-y-4">
              <div className="w-full h-full flex flex-col gap-y-2">
                <h1 className="text-2xl font-bold">My Portfolio</h1>
                <p>
                  My portfolio is a portfolio of mine that showcasing my skills,
                  recent projects and tech stack I know.
                </p>
              </div>
              <div className="w-full grid grid-cols-2 gap-2 py-2 text-sm">
                <div className="flex flex-row gap-x-1 items-center">
                  <span className="text-2xl">
                    <IoLogoReact />
                  </span>
                  <span>React</span>
                </div>

                <div className="flex flex-row gap-x-1 items-center">
                  <span>
                    <img className="w-4" src={typescriptIcon} />
                  </span>
                  <span>Typescipt</span>
                </div>
                <div className="flex flex-row gap-x-1 items-center">
                  <span>
                    <img className="w-4" src={tailwindcssIcon} />
                  </span>
                  <span>TailwindCSS</span>
                </div>
              </div>
              <div className="w-full grid grid-cols-2">
                <a
                  className="flex flex-row items-center gap-x-2 hover:text-blue hover:underline font-bold"
                  href="https://github.com/nel0029/personal-portfolio"
                  target="_blank"
                >
                  <span className="text-xl">
                    <IoLogoGithub />
                  </span>
                  <span>Github Repo</span>
                </a>
                <a
                  className="flex flex-row items-center gap-x-2 hover:text-blue hover:underline font-bold"
                  href="/"
                >
                  <span className="text-xl">
                    <IoLinkOutline />
                  </span>
                  <span>Live Demo</span>
                </a>
              </div>
            </div>
          </div>
          <div className=" flex justify-center items-center">
            <div className="max-w-full h-full md:w-[400px]">
              <Swiper
                pagination={{
                  clickable: true,
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                effect="slide"
                speed={800}
                slidesPerView={1}
                loop={true}
              >
                {portfolioImages.map((image: any, index: number) => (
                  <SwiperSlide key={index}>
                    <img
                      src={image.src}
                      alt="Demo image"
                      className="w-full h-auto"
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
        <div className="w-full flex flex-col md:flex-row gap-x-4 ga-y-2 md:justify-between">
          <div className="flex-1 py-2">
            <div className="w-full h-full flex flex-col justify-between gap-y-4">
              <div className="w-full h-full flex flex-col gap-y-2">
                <h1 className="text-2xl font-bold">Cake Store</h1>
                <p>
                  Cake Store is a landing page for a cake store. It displays
                  information about the store, the services they offer, customer
                  reviews, and a gallery showcasing their work. The page
                  features animations powered by framer-motion.
                </p>
              </div>
              <div className="w-full grid grid-cols-2 gap-2 py-2 text-sm">
                <div className="flex flex-row gap-x-1 items-center">
                  <span className="text-2xl">
                    <IoLogoReact />
                  </span>
                  <span>React</span>
                </div>

                <div className="flex flex-row gap-x-1 items-center">
                  <span>
                    <img className="w-4" src={typescriptIcon} />
                  </span>
                  <span>Typescipt</span>
                </div>
                <div className="flex flex-row gap-x-1 items-center">
                  <span>
                    <img className="w-4" src={tailwindcssIcon} />
                  </span>
                  <span>TailwindCSS</span>
                </div>
              </div>
              <div className="w-full grid grid-cols-2">
                <a
                  className="flex flex-row items-center gap-x-2 hover:text-blue hover:underline font-bold"
                  href="https://github.com/nel0029/cake-store"
                  target="_blank"
                >
                  <span className="text-xl">
                    <IoLogoGithub />
                  </span>
                  <span>Github Repo</span>
                </a>
                <a
                  className="flex flex-row items-center gap-x-2 hover:text-blue hover:underline font-bold"
                  href="https://cake-store-theta.vercel.app/"
                  target="_blank"
                >
                  <span className="text-xl">
                    <IoLinkOutline />
                  </span>
                  <span>Live Demo</span>
                </a>
              </div>
            </div>
          </div>
          <div className=" flex justify-center items-center">
            <div className="max-w-full h-full md:w-[400px]">
              <Swiper
                pagination={{
                  clickable: true,
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                effect="slide"
                speed={800}
                slidesPerView={1}
                loop={true}
              >
                {cakeStoreImages.map((image: any, index: number) => (
                  <SwiperSlide key={index}>
                    <img
                      src={image.src}
                      alt="Demo image"
                      className="w-full h-auto"
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
