
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
const SocialLink = () => {
  return (
    <div className=" flex gap-5 justify-end pr-52 pt-0 pb-14 bg-white">
      <div>
      <a  href="https://www.facebook.com/" target="blank">
      <FaFacebook className="h-8 w-8 "/>
      </a>
      </div>
      <div>
      <a  href="https://www.linkedin.com/feed/" target="blank">
      < FaLinkedin className="h-8 w-8 "/>
      </a>
      </div> 
    </div>
  );
};

export default SocialLink;
