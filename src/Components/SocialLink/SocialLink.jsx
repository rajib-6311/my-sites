
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
const SocialLink = () => {
  return (
    <div className=" flex gap-5 justify-end pr-52 lg:pt-0 pb-14 bg-white">
      <div className="pt-10">
      <a  href="https://www.facebook.com/rajib.hossen.2" target="blank">
      <FaFacebook className="h-8 w-8 "/>
      </a>
      </div>
      <div className="pt-10">
      <a  href="https://www.linkedin.com/in/md-rajib-hossen-a14b57290/" target="blank">
      < FaLinkedin className="h-8 w-8 "/>
      </a>
      </div> 
    </div>
  );
};

export default SocialLink;
