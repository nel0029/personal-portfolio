/** @format */
import {
  IoLogoCss3,
  IoLogoSass,
  IoLogoHtml5,
  IoLogoNodejs,
  IoLogoReact,
  IoLogoJavascript,
  IoLogoFigma,
  IoLogoFirebase,
} from "react-icons/io5";
import expressIcon from "../assets/icons/express.svg";
import mongoDBIcon from "../assets/icons/mongodb.svg";
import typescriptIcon from "../assets/icons/typescript.svg";
import tailwindcssIcon from "../assets/icons/tailwind-css.svg";
import gitIcon from "../assets/icons/Git-Icon-Black.png";
import githubIcon from "../assets/icons/github-icon.png";
import photoshopIcon from "../assets/icons/photoshop.png";
import vsIcon from "../assets/icons/vs-code-logo-microsoft.svg";

const AboutMe = () => {
  return (
    <div id="about-me" className="w-full h-full">
      <div className="w-full flex flex-col gap-y-4 flex-wrap">
        <h1 className="text-xl font-bold">About Me</h1>
        <div className="w-full flex flex-col md:flex-row gap-x-2 gap-y-2">
          <div className="w-full flex flex-col flex-1 gap-y-4">
            <p>
              Hello, I am Jaynel Lucañas. I graduated from{" "}
              <span className="font-bold">
                Southern Luzon State University - Lucena Campus
              </span>{" "}
              in the batch of <span className="font-bold">2021-2022</span> as a{" "}
              <span className="font-bold">Cum Laude</span> under the{" "}
              <span className="font-bold">
                Bachelor of Technical-Vocational Teacher Education
              </span>{" "}
              program with a major in{" "}
              <span className="font-bold">Computer Programming.</span>
            </p>
            <p>
              I love building web interfaces and web applications. I have a
              strong passion for creating solutions using modern web development
              tools. I also enjoy transforming designs into web applications.
            </p>
          </div>
          <div className="flex-1 w-full flex flex-col justify-center items-center">
            <div className="w-[200px] h-[200px]">
              <img className="w-full h-auto rounded-full" src="./GRAD.jpg" />
            </div>
          </div>
        </div>
        <div className="w-full flex flex-col md:flex-row gap-x-4 gap-y-4 py-4">
          <div className="w-full max-w-[500px] flex flex-col gap-y-2">
            <h1 className="font-bold py-2">My Tech Stacks:</h1>
            <div className="grid grid-cols-2 gap-2">
              <div className="flex flex-row gap-x-1 items-center">
                <span className="text-2xl">
                  <IoLogoHtml5 />
                </span>
                <span>HTML</span>
              </div>
              <div className="flex flex-row gap-x-1 items-center">
                <span className="text-2xl">
                  <IoLogoCss3 />
                </span>
                <span>CSS</span>
              </div>
              <div className="flex flex-row gap-x-1 items-center">
                <span className="text-2xl">
                  <IoLogoSass />
                </span>
                <span>Sass</span>
              </div>
              <div className="flex flex-row gap-x-1 items-center">
                <span className="text-2xl">
                  <IoLogoJavascript />
                </span>
                <span>Javascript</span>
              </div>
              <div className="flex flex-row gap-x-1 items-center">
                <span>
                  <img className="w-6" src={typescriptIcon} />
                </span>
                <span>Typescipt</span>
              </div>
              <div className="flex flex-row gap-x-1 items-center">
                <span>
                  <img className="w-6" src={mongoDBIcon} />
                </span>
                <span>MongoDB</span>
              </div>
              <div className="flex flex-row gap-x-1 items-center">
                <span>
                  <img className="w-6" src={expressIcon} />
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
                  <img className="w-6" src={tailwindcssIcon} />
                </span>
                <span>TailwindCSS</span>
              </div>
            </div>
          </div>
          <div className="w-full max-w-[500px] flex flex-col gap-y-2">
            <h1 className="font-bold py-2">Tools that I work with:</h1>
            <div className="grid grid-cols-2 gap-2">
              <div className="flex flex-row gap-x-1 items-center">
                <span className="text-2xl">
                  <IoLogoFigma />
                </span>
                <span>Figma</span>
              </div>
              <div className="flex flex-row gap-x-1 items-center">
                <span className="text-2xl">
                  <IoLogoFirebase />
                </span>
                <span>Firebase</span>
              </div>
              <div className="flex flex-row gap-x-1 items-center">
                <span>
                  <img className="w-6" src={gitIcon} />
                </span>
                <span>Git</span>
              </div>
              <div className="flex flex-row gap-x-1 items-center">
                <span>
                  <img className="w-6" src={githubIcon} />
                </span>
                <span>Github</span>
              </div>
              <div className="flex flex-row gap-x-1 items-center">
                <span>
                  <img className="w-6" src={photoshopIcon} />
                </span>
                <span>Adobe Photoshop</span>
              </div>
              <div className="flex flex-row gap-x-1 items-center">
                <span>
                  <img className="w-6" src={vsIcon} />
                </span>
                <span>Visual Studio Code</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
