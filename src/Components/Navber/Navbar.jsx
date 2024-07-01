import { NavLink } from "react-router-dom";

const Navbar = () => {

  const links = <>
    <li><NavLink to='/'><span className="text-white font-bold">Home</span></NavLink></li>
    <li><NavLink to='/academic'><span className="text-white font-bold">Academic info</span></NavLink></li>
    <li><NavLink to='/skills'><span className="text-white font-bold">Technical Skills</span></NavLink></li>
    <li><NavLink to='/strengths'><span className="text-white font-bold">Strengths</span></NavLink></li>
    <li><NavLink to='/language-skills'><span className="text-white font-bold">Language Skill</span></NavLink></li>
    <li><NavLink to='/projects'><span className="text-white font-bold">Projects</span></NavLink></li>
    <li><NavLink to='/curricular-activities'><span className="text-white font-bold">Extra Curricular Activities</span></NavLink></li>
    <li><NavLink to='/contact'><span className="text-white ">Contact</span></NavLink></li>
    

  </>
  
  return (
    <div className="navbar fixed z-30">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost  lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content  rounded-box z-[1] mt-3 w-52 p-2 shadow bg-slate-600"
          >
            {links}
          </ul>
        </div>
        <a className="btn btn-ghost text-2xl font-bold text-white ">RajibHossen</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
        {links}
        </ul>
      </div>
      
    </div>
  );
};

export default Navbar;
