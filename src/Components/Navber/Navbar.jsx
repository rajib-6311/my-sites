import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
// npm install @heroicons/react
import "../Navber/Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [navbar, setNavbar] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  // Change navbar background on scroll
  useEffect(() => {
    const changeBackground = () => {
      if (window.scrollY >= 80) {
        setNavbar(true);
      } else {
        setNavbar(false);
      }
    };

    window.addEventListener("scroll", changeBackground);

    return () => {
      window.removeEventListener("scroll", changeBackground);
    };
  }, []);

  const links = (
    <>
      <li>
        <NavLink className="btn btn-ghost" to="/" onClick={closeMenu}>
          <span className="text-white font-extrabold hover:text-red-600">
            <p>Home</p>
            <hr className="w-full mt-1 border-none h-[2px] bg-red-600 hidden" />
          </span>
        </NavLink>
      </li>
      <li>
        <NavLink className="btn btn-ghost" to="/academic" onClick={closeMenu}>
          <span className="text-white font-extrabold hover:text-red-600">
            <p>Academic Info</p>
            <hr className="w-full mt-1 border-none h-[2px] bg-red-600 hidden" />
          </span>
        </NavLink>
      </li>
      <li>
        <NavLink className="btn btn-ghost" to="/skills" onClick={closeMenu}>
          <span className="text-white font-extrabold hover:text-red-600">
            <p>Technical Skills</p>
            <hr className="w-full mt-1 border-none h-[2px] bg-red-600 hidden" />
          </span>
        </NavLink>
      </li>
      <li>
        <NavLink
          className="btn btn-ghost"
          to="/language-skills"
          onClick={closeMenu}
        >
          <span className="text-white font-extrabold hover:text-red-600">
            <p>Language Skill</p>
            <hr className="w-full mt-1 border-none h-[2px] bg-red-600 hidden" />
          </span>
        </NavLink>
      </li>
      <li>
        <NavLink className="btn btn-ghost" to="/projects" onClick={closeMenu}>
          <span className="text-white font-extrabold hover:text-red-600">
            <p>Projects</p>
            <hr className="w-full mt-1 border-none h-[2px] bg-red-600 hidden" />
          </span>
        </NavLink>
      </li>
      <li>
        <NavLink className="btn btn-ghost" to="/contact" onClick={closeMenu}>
          <span className="text-white font-extrabold hover:text-red-600">
            <p>Contact</p>
            <hr className="w-full mt-1 border-none h-[2px] bg-red-600 hidden" />
          </span>
        </NavLink>
      </li>
    </>
  );

  return (
    <div
      className={`navbar fixed z-30 ${
        navbar ? "bg-black" : "bg-transparent"
      }`}
    >
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
        <div className="text-3xl font-bold gap-0 text-white">
          <Link to="/">
            Rajib<span className="text-green-600">Hossen</span>
          </Link>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
    </div>
  );
};

export default Navbar;
