import { EducationForm, ExperienceForm } from "../types";

const ResumePage = () => {
  const educationsData = [
    {
      name: "Ziyo Yog'dusi",
      level: "A strong learning center",
      description:
        "When I went to Ziya Yogdusi training center, my brain was not used yet, there I got a lot of knowledge and skills from my teachers Nurbek Majidov, Lochin I., I was motivated and headed towards my goal.",
      startDate: "01.09.2017",
      endDate: "01.09.2019",
      _id: "1",
    },
    {
      name: "Najot Ta'lim",
      level: "A strong learning center",
      description:
        "The quality of teaching in Najot educational training center is good, the teachers have good knowledge and can share good knowledge, the conditions for teaching are good and the team is friendly.",
      startDate: "01.04.2023",
      endDate: "22.08.2023",
      _id: "2",
    },
    {
      name: "National University of Uzbekistan",
      level: "A strong university",
      description:
        "Men Mirzo Ulug'bek nomidagi Uzbekiston milliy universitetiga  kelganimda odiiy,sodda qishloq bolasi edim.Yaxshi bilim olish uzimni yaxshi tanib olishim shu nuqtadan boshlangan men bu yerda uzimni topdim,yo'nalishimni topdim. Ustozlarimdan ko'p bo'lmasada bilim oldim hamma ustozlarimga rahmat.",
      startDate: "01.09.2019",
      endDate: "1.08.2024",
      _id: "3",
    },
  ];

  const experiencesData = [
    {
      workName: "Math teacher",
      companyName: "Ziyo Yog'dusi",
      description:
        "I learned the ability to teach and work with students from my teacher Nurbek Majidov in this educational center. The working group was very friendly and helped each other.",
      startDate: "01.09.2018",
      endDate: "01.09.2019",
      _id: "1",
    },
    {
      workName: "Math teacher",
      companyName: "71 schools",
      description:
        "This school was located on the outskirts of the city, the children's level of education was average, and I and the teachers together tried to give the children a strong education, and together with some teachers, we partially succeeded.",
      startDate: "01.09.2021",
      endDate: "25.05.2022",
      _id: "1",
    },
  ];
  return (
    <section className="w-full bg-black bg-opacity-80 py-4 px-6 containr">
      <div className="startStyle">
        <h4>Resume</h4>
        <div></div>
      </div>
      <h2
        style={{ textTransform: "uppercase" }}
        className="text-[40px] font-bold max-[600px]:text-[34px] max-[400px]:text-[26px]"
      >
        Check My Resume
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h3 className="text-[26px] font-bold py-4">Educations</h3>
          <div className="resume border-l-2 border-l-[#272727] pl-[25px]">
            {educationsData.map((education: EducationForm) => (
              <div key={education._id}>
                <h4 className="resume-title">{education.name}</h4>
                <p className=" mt-4 flex justify-center py-1 bg-[#272727] w-[210px]">
                  {education.startDate + "-" + education.endDate}
                </p>
                <p className="my-1">{education.level}</p>
                <p>{education.description}</p>
              </div>
            ))}
          </div>
        </div>
        <div>
          <h3 className="text-[26px] font-bold py-4">Experiences</h3>
          <div className="resume border-l-2 border-l-[#272727] pl-[25px]">
            {experiencesData.map((experience: ExperienceForm) => (
              <div key={experience._id}>
                <h4 className="resume-title">{experience.companyName}</h4>
                <p className=" mt-4 flex justify-center py-1 bg-[#272727] w-[210px]">
                  {experience.startDate + "-" + experience.endDate}
                </p>
                <p className="text-lg pt-2">{experience.companyName}</p>
                <p>{experience.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResumePage;
