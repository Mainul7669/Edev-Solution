import { Link } from "react-router-dom";

const Banner = () => {
  return (
    //         <div className="hero min-h-screen bg-base-200">
    //   <div className="hero-content flex-col lg:flex-row-reverse">
    //     <img src="https://www.simplilearn.com/ice9/free_resources_article_thumb/What_is_System_Software.jpg" className="w-[660px] h-[450px] rounded-lg" />
    //     <div>
    //       <h1 className="text-5xl font-bold">Innovate. Create. Elevate: <span className="text-[#05345E]">E-DEV SOLUTION</span> </h1>
    //       <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
    //     <button className="btn bg-[#F86518] text-white">Let&apos;s Talk</button>
    //     </div>
    //   </div>
    // </div>
    <div className="h-[600px]  bg-base-200">
      <div className="lg:flex ">
        {/* content */}
        <div className="max-w-screen-xl mx-auto ">
          <h1
            className="text-7xl items-center pt-20
          font-bold uppercase"
          >
            {" "}
            Infinitive <br /> possibilities, <br /> one agency
          </h1>

          <p className="text-lg pt-8 opacity-80 font-semibold">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum
            pariatur inventore dicta. Molestiae.
          </p>

          <div className="py-4 flex gap-2">
            <Link to="login">
              <button className="bg-[#F86518] text-[#FFFFFF] hover:bg-[#05345E] py-2 px-6 rounded text-xl font-semibold transition duration-300 ease-in-out transform hover:scale-105">
                {" "}
                Get Started{" "}
              </button>
            </Link>
            <Link to="login">
              <button className="bg-[#05345E] text-[#FFFFFF] hover:bg-[#F86518] py-2 px-6 rounded text-xl font-semibold transition duration-300 ease-in-out transform hover:scale-105">
                {" "}
                Project{" "}
              </button>
            </Link>
          </div>
        </div>
        {/* ?image */}
        <div className="py-12 pe-14 ">
          <img
            src="https://www.simplilearn.com/ice9/free_resources_article_thumb/What_is_System_Software.jpg"
            className="w-[660px] h-[450px] rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
