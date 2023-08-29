import { Link } from "react-router-dom";

const CreatePortFolioPage = () => {
  return (
    <div className="w-full h-full flex flex-col justify-center items-center text-center">
      <div className="containerr">
        <h2 className="md:text-4xl text-2xl">
          O'zingizni shunday portfolio saytingizni qilishni xoxlaysizmi?
        </h2>
        <h3 className="py-[30px] text-[red] text-xl">
          Regiter tugmasi orqali registratsiyadan uting va uzingizni portfoli
          saytingizni yarating
        </h3>
        <Link target="_blank"
          to="https://portfolio-omega-three-40.vercel.app/register"
          className="bg-[#18d26e] py-[10px] px-[20px] rounded inline-block"
        >
          Register
        </Link>
      </div>
    </div>
  );
};

export default CreatePortFolioPage;
