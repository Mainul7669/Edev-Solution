import React, { useState } from "react";
import {
  FaEnvelope,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaMapMarked,
  FaPhone,
  FaPhoneAlt,
} from "react-icons/fa";
import { Link } from "react-router-dom";

// .secondary-color{
//     color: #F86518;
// }
// .primary-color{
//     color: #05345E;
// }
const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Send form data to your email address
    const formData = {
      name,
      email,
      subject,
      message,
    };

    // Here you can implement the logic to send the form data via email
    // using libraries like Nodemailer or by making an API request to a server

    // Clear form fields after submission
    setName("");
    setEmail("");
    setSubject("");
    setMessage("");
  };
  return (
    <div className="">
      {/* <div className="bg-[#05345E] h-48  lg:h-64">
        <div className="max-w-screen-xl lg:mx-auto mx-4 ">
          <div className="text-white py-8 lg:py-14">
            <h2 className="lg:text-6xl text-4xl font-bold opacity-90">
              Contact Us
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
              <Link to="/contact">
                <p className="hover:font-bold  hover:text-[#F86518] hover:transition-transform duration-200 hover:scale-110">
                  Contact Us
                </p>
              </Link>
            </div>
          </div>
        </div>
      </div> */}
      {/* bellow */}
      <div className="max-w-screen-xl lg:mx-auto mx-4 lg:my-28">
        {/*  */}
        <div>
          <div className="rounded-xl shadow-xl  border bg-fuchsia-50">
            <div className="lg:flex gap-12  py-14 lg:py-40 ">
              <div className="lg:ms-12 ps-4 w-full lg:w-[40%]">
                <div>
                  <p className="font-bold uppercase text-[#F86518]">
                    Meet Our Profrssionals
                  </p>
                  <h1 className="lg:text-5xl text-xl pt-1 font-bold lg:mb-4  text-[#05345E]">
                    We'd Love to Hear From You
                  </h1>
                  <p className="text-lg font-semibold opacity-70">
                    if you need information or support feel free <br /> to
                    contact us
                  </p>
                </div>
                {/* social */}
                <div className="mt-8">
                  <p className="font-bold uppercase mb-4 ">social networking</p>
                  <div className="flex gap-3 ">
                    <Link>
                      {" "}
                      <span className="text-3xl hover:text-[#F86518] ">
                        <FaFacebook />
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
                        <FaInstagram />
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="w-[60%]">
                <div className="card-body">
                  <form onSubmit={handleSubmit}>
                    <div className="grid lg:grid-cols-2 gap-2">
                      <div className="form-control">
                        <label className="label">
                          <span className="label-text  lg:text-lg font-bold text-[#05345E]">
                            Your Name
                          </span>
                        </label>
                        <input
                          type="text"
                          placeholder="Your name"
                          className="input input-bordered"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                        />
                      </div>
                      <div className="form-control">
                        <label className="label">
                          <span className="label-text  lg:text-lg font-bold text-[#05345E]">
                            Email Address
                          </span>
                        </label>
                        <input
                          type="email"
                          placeholder="Email address"
                          className="input input-bordered"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text te lg:xt-lg font-bold text-[#05345E]">
                          Subject
                        </span>
                      </label>
                      <input
                        type="text"
                        placeholder="Subject"
                        className="input input-bordered"
                        value={subject}
                        onChange={(e) => setSubject(e.target.value)}
                      />
                    </div>
                    <div className="form-control ">
                      <label className="label">
                        <span className="label-text te lg:xt-lg font-bold text-[#05345E]">
                          Message
                        </span>
                      </label>
                      <textarea
                        placeholder="Message"
                        className="input input-bordered"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                      ></textarea>
                    </div>
                    <div className="form-control mt-6">
                      <button
                        type="submit"
                        className="btn btn-primary w-52 mx-auto"
                      >
                        Send
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:flex gap-8 lg:mx-16">
          <div
            className="card  w-full  border my-4 shadow-md service  lg:w-full bg-fuchsia-50   hover:bg-[#05345E] hover:text-white
            hover:border  hover:border-black
            bg-transparent 
            py-2 px-6 rounded text-sm font-semibold transition duration-300  ease-in-out transform hover:scale-105 "
          >
            <div className=" text-center py-9">
              <figure className="px-10 pt-10">
                <span className="text-4xl border-2 hover:border-white hover:border-2 border-[#F86518]  rounded-full  p-8">
                  <FaPhoneAlt />
                </span>
              </figure>
              <p className="text-lg  font-bold ">Phone No</p>
              <p className="text-lg font-semibold opacity-60 pt-1">
                +8801758516069
              </p>
            </div>
          </div>
          <div
            className="card  w-full  border my-4 shadow-md service  lg:w-full bg-fuchsia-50   hover:bg-[#05345E] hover:text-white
            hover:border  hover:border-black
            bg-transparent 
            py-2 px-6 rounded text-sm font-semibold transition duration-300  ease-in-out transform hover:scale-105"
          >
            <div className=" text-center py-9">
              <figure className="px-10 pt-10">
                <span className="text-4xl border-2 hover:border-white hover:border-2 border-[#F86518]  rounded-full  p-8">
                  <FaMapMarked />
                </span>
              </figure>
              <p className="text-lg  font-bold ">Location</p>
              <p className="text-lg font-semibold opacity-60 pt-1">
                Bangladesh
              </p>
            </div>
          </div>
          <div
            className="card  w-full  border my-4 shadow-md service  lg:w-full bg-fuchsia-50   hover:bg-[#05345E] hover:text-white
            hover:border  hover:border-black
            bg-transparent 
            py-2 px-6 rounded text-sm font-semibold transition duration-300  ease-in-out transform hover:scale-105 "
          >
            <div className=" text-center py-9">
              <figure className="px-10 pt-10">
                <span className="text-4xl border-2 hover:border-white hover:border-2 border-[#F86518]  rounded-full  p-8">
                  <FaEnvelope />
                </span>
              </figure>
              <p className="text-lg  font-bold ">Email</p>
              <p className="text-lg font-semibold opacity-60 pt-1">
                edevsolution@gmail.com
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
