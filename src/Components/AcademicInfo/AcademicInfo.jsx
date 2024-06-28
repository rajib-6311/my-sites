import AcademicInfoAbout from "./AcademicInfoAbout";


const AcademicInfo = () => {
    return (
       
        <div className="relative ">
            <img className="h-[400px] w-full object-cover" src="https://i.ibb.co/4M5CXzH/bg2.png" alt="" />
            <div className="absolute inset-0 bg-gray-700 opacity-60 rounded-md">

            </div>
            <div className="absolute inset-0 flex items-center justify-center">
           <h2 className="text-white text-6xl font-bold pb-96">Academic Info</h2>
            </div>
            <AcademicInfoAbout></AcademicInfoAbout>
        </div>
        
    );
};

export default AcademicInfo;