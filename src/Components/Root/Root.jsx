import { Outlet } from "react-router-dom";
import Navbar from "../Navber/Navbar";
import SocialLink from "../SocialLink/SocialLink";




const Root = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <SocialLink></SocialLink>
        </div>
    );
};

export default Root;