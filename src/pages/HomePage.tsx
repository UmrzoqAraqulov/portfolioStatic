import { useState } from "react";
import Nav from "../components/nav/Nav";
import { Link } from "react-router-dom";
import "./style.scss";

const HomePage = () => {
  const fields = [
    "Frontend Developer",
    "Backand Developer",
    "Full Stack Developer",
  ];
  const [show, setShow] = useState(false);
  const styleIcon =
    "rounded-full bg-[#292929] px-3 py-2 text-xl text-white hover:bg-[#18d26e]";
  return (
    <div className="flex  flex-col h-screen justify-center containr text-white">
      <h1 className="text-[40px] sm:text-[56px] font-bold">
        <Link to="/home">Umrzoq Araqulov</Link>
      </h1>
      <div className="sm:text-[28px] flex items-center gap-x-2 flex-wrap text-[22px] text-[#cecece]">
        <p>I'm a passionate</p>
        <p className="pt-3 wrapper">
          <div className="words">
            {fields.map((el,id) => (
              <p key={id} className="wrapper-item">{el}</p>
            ))}
          </div>
        </p>
        <p>from Uzbekistan</p>
      </div>
      <div className="pt-[40px] max-[800px]:pt-0">
        <Nav show={show} setShow={setShow} />
      </div>
      <div className="flex gap-2 mt-8">
        <div className={styleIcon}>
          <i className="fa-brands fa-twitter"></i>
        </div>
        <div className={styleIcon}>
          <i className="fa-brands fa-facebook"></i>
        </div>
        <div className={styleIcon}>
          <i className="fa-brands fa-instagram"></i>
        </div>
        <div className={styleIcon}>
          <i className="fa-brands fa-linkedin"></i>
        </div>
      </div>
      <i
        onClick={() => setShow(true)}
        className="fa-solid fa-bars hidden max-[800px]:block absolute top-4 text-2xl cursor-pointer right-5"
      ></i>
    </div>
  );
};

export default HomePage;
