import LanguageSkillAbout from "./LanguageSkillAbout";


const LanguageSkill = () => {
    return (
        <div className="relative ">
            <img className="lg:h-[320px] sm:h-[10px] w-full object-cover" src="https://i.ibb.co/JzHTYw0/bg7.jpg" alt="" />
            <div className="absolute inset-0">

            </div>
            <div className="absolute inset-0 flex items-center justify-center">
           <h2 data-aos="zoom-in" data-aos-duration="2000" className="text-white lg:text-6xl sm:text-4xl font-bold  pb-[330px] ">Language Skills</h2>
            </div>
            <LanguageSkillAbout></LanguageSkillAbout>
      </div>
    );
};

export default LanguageSkill;