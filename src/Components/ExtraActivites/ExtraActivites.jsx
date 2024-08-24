import ExtraActivitesAbout from "./ExtraActivitesAbout";
import extra from '../../assets/images/technical.jpg'

const ExtraActivites = () => {
    return (
        <div className="relative ">
        <img className="h-[320px] w-full object-cover" 
        src={extra} alt="" />
        <div className="absolute inset-0">

        </div>
        <div className="absolute inset-0 flex items-center justify-center">
       <h2 data-aos="zoom-in" data-aos-duration="1000" className="text-white lg:text-6xl sm:text-4xl font-bold lg:pb-[500px] sm:pb-[640px]">Extra Curricular Activities</h2>
        </div>
        <ExtraActivitesAbout></ExtraActivitesAbout>
  </div>
    );
};

export default ExtraActivites;