import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
// npm install @heroicons/react

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const links = (
    <>
      <li><NavLink to='/' onClick={closeMenu}><span className="text-white font-extrabold hover:text-red-600">Home</span></NavLink></li>
      <li><NavLink to='/academic' onClick={closeMenu}><span className="text-white font-extrabold hover:text-red-600">Academic Info</span></NavLink></li>
      <li><NavLink to='/skills' onClick={closeMenu}><span className="text-white font-extrabold hover:text-red-600">Technical Skills</span></NavLink></li>
      <li><NavLink to='/language-skills' onClick={closeMenu}><span className="text-white font-extrabold hover:text-red-600">Language Skill</span></NavLink></li>
      <li><NavLink to='/projects' onClick={closeMenu}><span className="text-white font-extrabold hover:text-red-600">Projects</span></NavLink></li>
      <li><NavLink to='/curricular-activities' onClick={closeMenu}><span className="text-white font-extrabold hover:text-red-600">Extra Curricular Activities</span></NavLink></li>
      <li className="text-white font-extrabold hover:text-red-600"><NavLink to='/contact' onClick={closeMenu}>Contact</NavLink></li>
    </>
  );

  return (
    <div className="navbar fixed z-30">
      <div className="navbar-start">
        <div className="dropdown">
          <div
            tabIndex={0}
            className="btn btn-ghost lg:hidden"
            onClick={toggleMenu}
          >
            {isOpen ? (
              <XMarkIcon className="h-6 w-6 text-white" /> // Close icon
            ) : (
              <Bars3Icon className="h-6 w-6 text-white" /> // Hamburger icon
            )}
          </div>
          {isOpen && (
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content rounded-box z-[1] mt-3 w-52 p-2 shadow bg-stone-600"
            >
              {links}
            </ul>
          )}
        </div>
        <a className="text-2xl font-bold text-white">RajibHossen</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
    </div>
  );
};

export default Navbar;
