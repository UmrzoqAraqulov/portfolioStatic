import PortfolioCard from "../components/cards/PortfolioCard";
import { PortfolioForm } from "../types";

const PortfoliosPage = () => {
  const portfoliosData = [
    {
      name: "E-commerce",
      url: "",
      description: "",
      photo: { _id: "", name: "" },
      _id: "",
    },
  ];

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
        {portfoliosData.map((pr: PortfolioForm) => (
          <PortfolioCard {...pr} key={pr._id} />
        ))}
      </div>
    </section>
  );
};

export default PortfoliosPage;
