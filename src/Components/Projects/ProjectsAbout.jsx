
import PropTypes from 'prop-types';
const ProjectsAbout = ({proj}) => {

  const {image, title, about, price} = proj;
  return (
  <div>
    <div className="card card-compact bg-base-100 w-full h-[500px] shadow-xl">
  <figure>
    <img className='h-[300px] w-full'
      src={image}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className=" text-white text-xl font-bold">{title}</h2>
    <p>{about}</p>
    <p className='font-bold'><span className='font-bold text-white'>Technology used : </span>{price}</p>
  </div>
</div>
  </div>

  );
};
ProjectsAbout.propTypes = {
  proj: PropTypes.array,
};
export default ProjectsAbout;
