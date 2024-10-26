import ProjectsAbout from "./ProjectsAbout";
import project from '../../assets/images/project.png'
const Projects = () => {
  return (
    <div className=" bg-white">
      <img
        className="lg:h-[350px] sm:h-[100px] w-full "
        // src="https://i.ibb.co/4ZQp2ZQ/bg13.jpg"
        src={project}
        alt=""
      />
      <div className="absolute inset-0"></div>
      <div className="absolute inset-0 flex items-center justify-center">
        <div>
          <h2
            data-aos="zoom-in"
            data-aos-duration="2000"
            className="  text-white lg:text-6xl sm:text-2xl font-bold pb-[430px]"
          >
            Projects
          </h2>
        </div>
      </div>

      <ProjectsAbout></ProjectsAbout>
    </div>
  );
};

export default Projects;
