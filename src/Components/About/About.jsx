import AOS from 'aos';
import 'aos/dist/aos.css'; 
import rajib from '../../assets/images/rajib.jpg'
// ..
AOS.init();

const About = () => {
  return (
    <div className="hero bg-white">
      <div className="hero-content flex-col lg:flex-row">
        <div  className='sm:max-w-sm lg:w-[2000px]'>
        <img data-aos="zoom-in" data-aos-duration="2000"
          src={rajib}
          className="shadow-xl"
        />
        </div>
        <div className="lg:pl-3 sm:pl-0">
        <h1 className="lg:text-xl font-bold text-black text-justify">A highly skilled and creative Web Developer with one years of experience in designing, developing, and maintaining responsive, user-friendly websites and web applications. Proficient in front-end and back-end development, with expertise in modern frameworks, content management systems (CMS), and SEO best practices. Strong problem-solver with a passion for clean code, performance optimization, and collaborative teamwork. Adept at translating client requirements into high-quality web solutions that enhance user experience and drive business growth.</h1>
            <div>
      </div>
        </div>
      </div>
     
    </div>
  );
};

export default About;
