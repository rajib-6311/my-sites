
import home from '../../assets/images/academic.jpg'
const Banner = () => {
    return (
        <div className="relative ">
            <img className="lg:h-[320px] sm:h-[50px] w-full object-cover" src={home} alt="" />
            <div className="absolute inset-0">
           
            </div>
            <div className="absolute inset-0 flex items-center justify-center ">
           <h2 data-aos="zoom-in" data-aos-duration="1500" className="text-white lg:text-6xl font-bold sm:text-xl ">Md. Rajib Hossen</h2>
            </div>
            
      </div>
        );
};

export default Banner;
