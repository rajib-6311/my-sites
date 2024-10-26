import TechnicalSkillAbout from "./TechnicalSkillAbout";
// import technical from '../../assets/images/technical.jpg'
import tech from '../../assets/images/technicall.webp'

const TechnicalSkill = () => {
    return (
        <div className="relative ">
        <img className="lg:h-[320px] sm:h-[50px] w-full object-cover"
         src={tech} alt="" />
        <div className="absolute inset-0  rounded-md">  

        </div>
        <div className="absolute inset-0 flex items-center justify-center">
       <h2 data-aos="zoom-in" data-aos-duration="2000" className="text-white lg:text-6xl sm:text-2xl font-bold pb-[530px]">Technical Skills</h2>
        </div>
        <TechnicalSkillAbout></TechnicalSkillAbout>
  </div>
    );
};

export default TechnicalSkill;