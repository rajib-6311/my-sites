import StrengthsAbout from "./StrengthsAbout";


const Strengths = () => {
    return (
        <div className="relative ">
            <img className="h-[320px] w-full object-cover" src="https://i.ibb.co/sbHQd2Q/bg6.webp" alt="" />
            <div className="absolute inset-0  rounded-md">

            </div>
            <div className="absolute inset-0 flex items-center justify-center">
           <h2 data-aos="zoom-in-up" data-aos-duration="2000" className="text-white lg:text-6xl sm:text-2xl  font-bold pb-[530px]">Strengths</h2>
            </div>
            <StrengthsAbout></StrengthsAbout>
      </div>
    );
};

export default Strengths;