import Post from "./Post";
import ProjectsAbout from "./ProjectsAbout";

const Projects = () => {
  return (
    <div className="relative ">
      <img
        className="h-[320px] w-full object-cover"
        src="https://i.ibb.co/4ZQp2ZQ/bg13.jpg"
        alt=""
      />
      <div className="absolute inset-0"></div>
      <div className="absolute inset-0 flex items-center justify-center">
        <h2
          data-aos="zoom-in"
          data-aos-duration="2000"
          className=" text-6xl text-white font-bold pb-[540px]"
        >
          Projects
              </h2>
              {/* Link */}
        <div>
          <a href="https://www.linkedin.com/feed/" target="blank">
            <h1 className="text-black">Link</h1>
          </a>
        </div>
      </div>
      <Post></Post>
      <ProjectsAbout></ProjectsAbout>
    </div>
  );
};

export default Projects;
