import { Link } from "react-router-dom";
import { PortfolioForm } from "../../types";
import img from "../../assets/me.jpg"

const PortfolioCard = ({_id,name,url,description}:PortfolioForm) => {
  return (
    <div
      key={_id}
      style={{
        background: `url(${
          img
        })`, 
        backgroundSize: "cover",
      }}
      className="portfolio-card w-full max-h-[100px]"
    >
      <div className="portfolio-info">
        <h3 className="font-semibold text-2xl">{name}</h3>
        <p className="px-5 py-1">{description}</p>
        <Link to={`${url}`} className="hover:text-[#18d26e]">
          <i className="fa-solid fa-link text-2xl"></i>
        </Link>
      </div>
    </div>
  );
};

export default PortfolioCard