
import { Link } from "react-router-dom";
import {
  FaEnvelope,
  FaFacebook,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";
import TeamFAQ from "../TeamFAQ/TeamFAQ";
const Team = () => {
  return (
    <div>
      <div className="bg-[#05345E] h-48  lg:h-48 shadow-xl lg:mb-10">
        <div className="max-w-screen-xl lg:mx-auto mx-4 ">
          <div className="text-white py-8 lg:py-14">
            <div className="flex gap-4 opacity-90">
              <Link to="/">
                {" "}
                <p className="hover:font-bold  hover:text-[#F86518] hover:transition-transform duration-200 hover:scale-110">
                  Home
                </p>
              </Link>{" "}
              <p>/</p>
              <Link to="/team">
                <p className="font-bold  text-[#F86518] transition-transform duration-200 scale-110">
                  Our Team
                </p>
              </Link>
            </div>
            <p className="py-4 text-xs lg:text-lg opacity-80 ">
              We are The Best Team of Multimedia Services
            </p>
          </div>
        </div>
      </div>







      <TeamFAQ/>

    </div>
  );
};

export default Team;






