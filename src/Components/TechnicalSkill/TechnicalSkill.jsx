import TechnicalSkillAbout from "./TechnicalSkillAbout";


const TechnicalSkill = () => {
    return (
        <div className="relative ">
        <img className="h-[370px] w-full object-cover" src="https://i.ibb.co/9vWcvnR/bg5.jpg" alt="" />
        <div className="absolute inset-0 bg-gray-700 opacity-60 rounded-md">

        </div>
        <div className="absolute inset-0 flex items-center justify-center">
       <h2 data-aos="zoom-in" data-aos-duration="2000" className="text-white text-6xl font-bold pb-[530px]">Technical Skills</h2>
        </div>
        <TechnicalSkillAbout></TechnicalSkillAbout>
  </div>
    );
};

export default TechnicalSkill;