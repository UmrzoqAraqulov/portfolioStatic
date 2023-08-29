import { skillType } from "../types";
import { Link } from "react-router-dom";
import SkillsCard from "../components/cards/SkillsCard";
import img from "../assets/me.jpg";

const AboutPage = () => {
  const styleList = "font-bold text-[17px] max-[400px]:text-[14px]";
  const fields = [
    "Frontend Developer",
    "Backand Developer",
    "Full Stack Developer"
  ];
  const skillsData = [
    { name: "HTML", percent: 90 },
    { name: "CSS", percent: 80 },
    { name: "SASS", percent: 70 },
    { name: "BOOTSTRAP", percent: 70 },
    { name: "TAILWINDCSS", percent: 80 },
    { name: "JS", percent: 90 },
    { name: "REACTJS", percent: 80 },
    { name: "NEXTJS", percent: 70 },
    { name: "TS", percent: 80 },
    { name: "C#", percent: 50 },
    { name: "C++", percent: 30 },
    { name: "PYTHON", percent: 60 },
  ];
  return (
    <div className="w-full bg-black bg-opacity-80 py-4 px-6 containr">
      <div className="startStyle">
        <h4>ABOUT</h4>
        <div></div>
      </div>
      <h2
        style={{ textTransform: "uppercase" }}
        className="text-[40px] font-bold max-[600px]:text-[34px] max-[400px]:text-[26px]"
      >
        Learn more about me
      </h2>
      <div className="w-full flex gap-5 min-[800px]:flex-row flex-col">
        <img
          style={{ objectPosition: "top" }}
          className="w-[350px] max-[800px]:w-[400px] max-[800px]:mx-auto max-[600px]:w-full h-[400px] max-[800px]:h-[500px] max-[600px]:h-[350px] max-[400px]:h-[250px] object-cover rounded"
          src={img}
          alt=""
        />
        <div className="w-[60%] max-[800px]:w-full">
          <h3 className="text-3xl font-semibold text-[#18d26e] max-[400px]:text-[24px]">
            {fields.join(" & ")}
          </h3>
          <p
            style={{ fontStyle: "italic" }}
            className="py-2 max-[400px]:text-[14px]"
          >
            I entered the field of Programming from the age of 19, and with the
            help of my mentors and friends, I achieved good results in a short
            period of time.
          </p>
          <ul className="grid grid-cols-1 min-[800px]:grid-cols-2 gap-2 about-list max-[400px]:text-[12px]">
            <li>
              <span className={styleList}>Birthday:</span>
              03.23.2001
            </li>
            <li>
              <span className={styleList}>Website: </span>
              <Link to="https://portfolio-umrzoqaraqulov.vercel.app">
                PortFolio
              </Link>
            </li>
            <li>
              <span className={styleList}>Phone: </span>
              +998 91 779 69 23
            </li>
            <li>
              <span className={styleList}>Address: </span> Samarqand
            </li>
            <li>
              <span className={styleList}>Age: </span>
              22
            </li>
            <li>
              <span className={styleList}>Degree: </span>
              Junior
            </li>
            <li>
              <span className={styleList}>PhEmailone: </span>
              <Link to={`mailto:mrumrzoqaraqulov@gmail.com`}>
                mrumrzoqaraqulov@gmail.com
              </Link>
            </li>
          </ul>
          <p className="py-3 max-[400px]:text-[14px]"></p>
        </div>
      </div>
      <div className="startStyle pt-10 pb-4">
        <h4>SKILLS</h4>
        <div></div>
      </div>
      <div className="grid grid-cols-2 max-[800px]:grid-cols-1 gap-3">
        {skillsData?.map((skill: skillType) => (
          <SkillsCard {...skill} />
        ))}
      </div>
    </div>
  );
};

export default AboutPage;
