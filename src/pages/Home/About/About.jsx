import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="max-w-screen-xl mx-4 lg:mx-auto lg:my-12 my-8">
      <div>
        <div className="lg:flex lg:gap-20 ">
          <div className="ms-4 mb-8 lg:mb-8">
            <p className="font-bold text-[#F86518]">About Us</p>
            <h1 className="lg:text-5xl text-xl pt-1 font-bold mb-2 lg:mb-4  text-[#05345E]">
              Transforming Business With Innovative Digital Solutions
            </h1>
            <p className="font-semibold opacity-85 text-xs lg:text-sm">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officia
              nisi natus nemo maxime, perferendis assumenda quis quibusdam nam
              eaque magnam est nobis hic repellendus autem dolorum
              necessitatibus inventore dolor numquam. Impedit ducimus odio enim
            </p>
            <p className="font-semibold opacity-85 text-xs lg:text-sm  mt-2">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat,
              vitae?
            </p>
            <Link to="login">
              {" "}
              <button className="bg-[#05345E] text-[#FFFFFF] hover:bg-[#F86518] py-2 px-6 rounded lg:text-xl text-xs  font-semibold transition duration-300 ease-in-out transform hover:scale-105 mt-4">
                Explore Services
              </button>
            </Link>
          </div>

          <div>
            <img
              className="lg:max-w-xl rounded-lg shadow-2xl"
              src="https://i.ibb.co/2kgkZLK/pexels-andrea-piacquadio-927451.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
