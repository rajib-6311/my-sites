import AcademicInfoAbout from "./AcademicInfoAbout";
import academic from '../../assets/images/academic2.jpg'

const AcademicInfo = () => {
    return (
       
        <div className="relative">  
            <img className="lg:h-[250px] sm:h-[20px] w-full object-cover" src={academic} alt="" />
            <div className="absolute inset-0">

            </div>
            <div className="absolute inset-0 flex items-center justify-center">
           <h2 data-aos="zoom-in" data-aos-duration="2000" className="text-white lg:text-6xl sm:text-4xl sm:font-bold font-bold pb-[530px]">Academic Info</h2>
            </div>
            
            <AcademicInfoAbout></AcademicInfoAbout>
           
        </div>
        
    );
};

export default AcademicInfo;