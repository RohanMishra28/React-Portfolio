import logo from "../Assets/logo-transparent-png.png";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <img className="mx-2 w-14" src={logo} alt="logo" />
      </div>
      <div className="m-8 flex items-center justify-center gap-4">
       <a  href="https://www.linkedin.com/in/rohan-mishra-4a8501274/">
        <FaLinkedin ></FaLinkedin></a>
        <a href="https://github.com/RohanMishra28">
          <FaGithub></FaGithub></a>
        <a href="https://x.com/RohanMishra_28">
          <FaSquareXTwitter></FaSquareXTwitter></a>
       <a href="https://www.instagram.com/rohan_mishra28/"> 
        <FaInstagram></FaInstagram></a>
      </div>
    </nav>
  );
};

export default Navbar;
