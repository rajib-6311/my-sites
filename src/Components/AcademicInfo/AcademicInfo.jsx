import AcademicInfoAbout from "./AcademicInfoAbout";


const AcademicInfo = () => {
    return (
       
        <div className="relative">
            <img className="h-[320px] w-full object-cover" src="https://i.ibb.co/4M5CXzH/bg2.png" alt="" />
            <div className="absolute inset-0">

            </div>
            <div className="absolute inset-0 flex items-center justify-center">
           <h2 data-aos="zoom-in" data-aos-duration="2000" className="text-white text-6xl font-bold pb-[530px]">Academic Info</h2>
            </div>
            
            <AcademicInfoAbout></AcademicInfoAbout>
           
        </div>
        
    );
};

export default AcademicInfo;