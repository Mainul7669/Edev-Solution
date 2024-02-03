import emailjs from 'emailjs-com';
import Swal from "sweetalert2";

import  { useState } from "react";
import {
  FaEnvelope,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaMapMarked,
  FaPhoneAlt,
} from "react-icons/fa";
import { Link } from "react-router-dom";


const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");


    const handleSubmit = (e) => {
      e.preventDefault();
  
      // Set up your Email.js credentials
      const emailJsParams = {
        serviceId: 'service_sr2jkyq',
        templateId: 'template_4x6qmjo',
        userId: 'I4EVhJn5ZVToe3T0K',
      };
  
      // Prepare the data to be sent
      const emailData = {
        to_name: 'Edev-Solution', // Customize as needed
        from_name: name,
        from_email: email,
        subject,
        message,
      };
  
      emailjs.send(
        emailJsParams.serviceId,
        emailJsParams.templateId,
        emailData,
        emailJsParams.userId
      )
        .then((response) => {
          console.log('Email sent successfully:', response);
          // Display success message with SweetAlert2
          Swal.fire({
            icon: 'success',
            title: 'Email Sent Successfully!',
            showConfirmButton: false,
            timer: 1500,
          });
        })
        .catch((error) => {
          console.error('Email send failed:', error);
          // Display error message with SweetAlert2
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Something went wrong! Please try again.',
          });
        })
        .finally(() => {
          // Clear form fields after submission
          setName("");
          setEmail("");
          setSubject("");
          setMessage("");
        });
    };
    
  return (
      <div className="min-h-screen">


        <div  className="max-w-screen-xl lg:mx-auto mx-4 lg:mt-40 lg:mb-40" >

          <div className="rounded-xl lg:relative shadow-xl  border bg-base-100 ">
            <div className="lg:flex gap-12  py-14 lg:py-40 ">
              <div className="lg:ms-12 ps-4 w-full lg:w-[40%]">
                <div>
                  <p className="font-bold uppercase text-[#F86518]">
                    Meet Our Profrssionals
                  </p>
                  <h1 className="lg:text-5xl text-xl pt-1 font-bold lg:mb-4  text-[#05345E]">
                    We&apos;d Love to Hear From You
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
                        className="btn bg-[#05345E] text-white hover:bg-[#F86518] w-52 mx-auto"
                      >
                        Send
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
         
            <div className="lg:flex gap-8 lg:absolute lg:right-[200px]  lg:bottom-[300px] lg:mx-16 ">
            <div
              className="card  w-full  border my-4 shadow-md service  lg:w-full bg-white   hover:bg-[#05345E] hover:text-white
            hover:border  hover:border-black
            bg-transparent 
             px-6 rounded text-sm font-semibold transition duration-300  ease-in-out transform hover:scale-105 "
            >
              <div className=" text-center py-3">
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
              className="card  w-full  border my-4 shadow-md service  lg:w-full bg-white   hover:bg-[#05345E] hover:text-white
            hover:border  hover:border-black
            bg-transparent 
             px-6 rounded text-sm font-semibold transition duration-300  ease-in-out transform hover:scale-105"
            >
              <div className=" text-center py-3">
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
              className="card  w-full  border my-4 shadow-md service  lg:w-full bg-white   hover:bg-[#05345E] hover:text-white
            hover:border  hover:border-black
            bg-transparent 
             px-6 rounded text-sm font-semibold transition duration-300  ease-in-out transform hover:scale-105 "
            >
              <div className=" text-center py-3">
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
