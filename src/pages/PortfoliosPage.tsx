import NajotNews from "../assets/najotNews.jpg";
import vohaParfum from "../assets/porfum.jpg";
import { Link } from "react-router-dom";

const PortfoliosPage = () => {
  const portfoliosData = [
    {
      name: "Voha Parfum",
      url: "https://vohaparfum.vercel.app/",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita commodi inventore voluptas vero ea accusamus quasi.",
      photo: vohaParfum,
      _id: "1",
    },
    {
      name: "Najot News",
      url: "https://najot-news.vercel.app/",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita commodi inventore voluptas vero ea accusamus quasi.",
      photo: NajotNews,
      _id: "2",
    },
  ];

  console.log(portfoliosData);
  
  return (
    <section className="containr w-full bg-black bg-opacity-60 py-4 px-6 rounded">
      <div className="startStyle">
        <h4>SKILLS</h4>
        <div></div>
      </div>
      <h2
        style={{ textTransform: "uppercase" }}
        className="text-[40px] font-bold max-[600px]:text-[34px] max-[400px]:text-[26px]"
      >
        My works
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:grid-cols-3">
        <div
          style={{
            background: `url(${portfoliosData[0].photo})`,
            backgroundSize: "cover",
          }}
          className="portfolio-card w-full h-[250px]"
        >
          <div className="portfolio-info">
            <h3 className="font-semibold text-2xl">{portfoliosData[0].name}</h3>
            <p className="px-5 py-1">{portfoliosData[0].description}</p>
            <Link
              to={`${portfoliosData[0].url}`}
              className="hover:text-[#18d26e]"
            >
              <i className="fa-solid fa-link text-2xl"></i>
            </Link>
          </div>
        </div>
        <div
          style={{
            background: `url(${portfoliosData[1].photo})`,
            backgroundSize: "cover",
          }}
          className="portfolio-card w-full h-[250px]"
        >
          <div className="portfolio-info">
            <h3 className="font-semibold text-2xl">{portfoliosData[1].name}</h3>
            <p className="px-5 py-1">{portfoliosData[1].description}</p>
            <Link
              to={`${portfoliosData[1].url}`}
              className="hover:text-[#18d26e]"
            >
              <i className="fa-solid fa-link text-2xl"></i>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfoliosPage;
