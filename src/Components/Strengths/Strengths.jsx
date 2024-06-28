import StrengthsAbout from "./StrengthsAbout";


const Strengths = () => {
    return (
        <div className="relative ">
            <img className="h-[370px] w-full object-cover" src="https://i.ibb.co/sbHQd2Q/bg6.webp" alt="" />
            <div className="absolute inset-0 bg-gray-700 opacity-60 rounded-md">

            </div>
            <div className="absolute inset-0 flex items-center justify-center">
           <h2 className="text-white text-6xl font-bold pb-[530px]">Strengths</h2>
            </div>
            <StrengthsAbout></StrengthsAbout>
      </div>
    );
};

export default Strengths;