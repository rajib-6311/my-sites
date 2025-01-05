
import home from '../../assets/images/ac1.jpg'
const Banner = () => {
    return (
        <div className="relative ">
            <img className="lg:h-[250px] sm:h-[30px] w-full object-cover" src={home} alt="" />
            <div className="absolute inset-0">
           
            </div>
            <div className="absolute inset-0 flex items-center justify-center ">
           <h2 data-aos="zoom-in" data-aos-duration="1500" className="text-white lg:text-6xl font-bold sm:text-xl ">Md. Rajib Hossen</h2>
            </div>
            
      </div>
        );
};

export default Banner;
