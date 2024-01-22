import React from "react";
import { Link } from "react-router-dom";
import {
  FaEnvelope,
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaMapMarked,
  FaPhone,
  FaPhoneAlt,
} from "react-icons/fa";
const Team = () => {
  return (
    <div>
      <div className="bg-[#05345E] h-48  lg:h-64 shadow-xl">
        <div className="max-w-screen-xl lg:mx-auto mx-4 ">
          <div className="text-white py-8 lg:py-14">
            <h2 className="lg:text-6xl text-4xl font-bold opacity-90">
              Our Team
            </h2>
            <p className="py-4 text-xs lg:text-sm opacity-80 ">
              we create outstanding and world-class digital products <br /> web
              design ,apps and branding
            </p>

            <div className="flex gap-4 opacity-90">
              <Link to="/">
                {" "}
                <p className="hover:font-bold  hover:text-[#F86518] hover:transition-transform duration-200 hover:scale-110">
                  Home
                </p>
              </Link>{" "}
              <p>/</p>
              <Link to="/team">
                <p className="hover:font-bold  hover:text-[#F86518] hover:transition-transform duration-200 hover:scale-110">
                  Our Team
                </p>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-screen-lg md:flex  lg:flex lg:gap-8 md:gap-4 mx-4 lg:my-20 my-8 lg:mx-auto">
        {/* team */}

        <div
          className="card my-4  lg:w-80 md:w-72 bg-base-100  border-x-4  border-[#05345E] shadow-xl  hover:bg-[#05345E] hover:text-white
            hover:border  hover:border-black
              rounded-xl text-sm font-semibold transition duration-300  ease-in-out transform hover:scale-105"
        >
          <div className="avatar mx-auto mt-8 mb-4  ">
            <div className="w-32 rounded-full ring ring-[#05345E] ring-offset-[#05345E] hover:ring-white hover:ring-offset-4 ring-offset-3">
              <img src="https://i.ibb.co/D8kz5wY/336536273-620458166790507-2988363118309037949-n.jpg" />
            </div>
          </div>

          <div className=" text-center">
            <h2 className="text-lg font-bold">Jawad Hossain Tanjim</h2>
            <h2 className="text-sm font-semibold uppercase mb-2">
              MERN STACk Developer
            </h2>
            {/* social */}
            <div className="pb-10 pt-2">
              <div className="flex gap-3  justify-center ">
                <Link>
                  {" "}
                  <span className="text-3xl hover:text-[#F86518] ">
                    <FaFacebook />
                  </span>
                </Link>
                <Link>
                  {" "}
                  <span className="text-3xl hover:text-[#F86518] ">
                    <FaGithub />
                  </span>
                </Link>
                <Link>
                  {" "}
                  <span className="text-3xl hover:text-[#F86518]  ">
                    <FaLinkedin />
                  </span>
                </Link>
                <Link>
                  {" "}
                  <span className="text-3xl  hover:text-[#F86518]  ">
                    <FaEnvelope />
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div
          className="card my-4 lg:w-80 md:w-72  bg-base-100  border-x-4  border-[#05345E] shadow-xl  hover:bg-[#05345E] hover:text-white
            hover:border  hover:border-black
              rounded-xl text-sm font-semibold transition duration-300  ease-in-out transform hover:scale-105"
        >
          <div className="avatar mx-auto mt-8 mb-4  ">
            <div className="w-32 rounded-full ring ring-[#05345E] ring-offset-[#05345E] hover:ring-white hover:ring-offset-4 ring-offset-3">
              <img src="https://i.ibb.co/yY71x7m/Whats-App-Image-2024-01-22-at-22-22-57-da0fb394.jpg" />
            </div>
          </div>

          <div className=" text-center">
            <h2 className="text-lg font-bold">Mohammed Mainul Islam</h2>
            <h2 className="text-sm font-semibold uppercase mb-2">
              MERN STACk Developer
            </h2>
            {/* social */}
            <div className="pb-10 pt-2">
              <div className="flex gap-3  justify-center ">
                <Link>
                  {" "}
                  <span className="text-3xl hover:text-[#F86518] ">
                    <FaFacebook />
                  </span>
                </Link>
                <Link>
                  {" "}
                  <span className="text-3xl hover:text-[#F86518] ">
                    <FaGithub />
                  </span>
                </Link>
                <Link>
                  {" "}
                  <span className="text-3xl hover:text-[#F86518]  ">
                    <FaLinkedin />
                  </span>
                </Link>
                <Link>
                  {" "}
                  <span className="text-3xl  hover:text-[#F86518]  ">
                    <FaEnvelope />
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
