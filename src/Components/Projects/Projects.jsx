import ProjectsAbout from "./ProjectsAbout";
import project from '../../assets/images/project.png'
import { useEffect, useState } from "react";
const Projects = () => {
  const [projects, setProject] = useState([]);

   useEffect(()=>{
    fetch('project.json')
    .then(res =>res.json())
    .then(data => setProject(data))
   },[])

  return (
    <div className=" bg-black">
      <img
        className="lg:h-[300px] sm:h-[100px] w-full"
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
      <div className="grid grid-cols-1 sm:grid sm:grid-cols-2 sm:ml-8 sm:mr-8 gap-7 mt-8 pb-6 ml-0 mr-0">
        {
          projects.map((proj, index) => 
          <ProjectsAbout key={index} proj={proj} ></ProjectsAbout>)
        }
      </div>
    </div>
  );
};

export default Projects;
