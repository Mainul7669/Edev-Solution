import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";
import "react-awesome-slider/dist/custom-animations/cube-animation.css";
import { CiShare1 } from "react-icons/ci";

const Banner = () => {
  const slideStyles = {
    position: "relative",
  };

  const overlayStyles = {
    position: "absolute",
    top: "30%",
    left: "40%",
    transform: "translate(-50%, -50%)",
    color: "#fff",
  };


  const bannerStyles = {
    overflow: "hidden", // Hide horizontal scrollbar
    width: "100%", // Make sure the container takes up the full width
    maxHeight: "95vh", // Adjust the height as needed

  
  };

  return (
    <div className="carousel w-full" style={bannerStyles}>
      <AwesomeSlider animation="cubeAnimation" className="slider">

      <div style={slideStyles} className="bg-black">
          <img
            className="opacity-50 w-full h-auto"
            src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Slider 1"
          />


      <div style={overlayStyles} className="p-4">
      <h1 className="text-5xl font-bold text-white-800 mb-4 leading-normal">
        Unlocking Digital Excellence through Innovative Web Solutions
      </h1>
      <h2 className="text-2xl font-semibold text-white-600 mb-8">
        We develop custom solutions tailored to your needs.
      </h2>
      
      <div className="flex items-center gap-10">

      <a
        href="/contact">
      <span className="flex items-center gap-2 bg-[#F86518] text-white hover:bg-[#05345E] rounded-xl text-lg  transition duration-300 py-2 px-4 w-fit"> Let&apos;s Talk <CiShare1 /></span>
      </a>
      
      <div>
        <h4 className="btn-grad">Book a Free Session</h4>
        
      </div>

      </div>

    </div>
        </div>





        {/* <div style={slideStyles} className="bg-black">
          <img
            className="opacity-50 w-full h-auto"
            src="https://images.unsplash.com/photo-1579548122080-c35fd6820ecb?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Slider 1"
          />
          <div style={overlayStyles} className="p-4">
            <h2 className="whitespace-nowrap">
              Learn to Play an Instrument
            </h2>
            <p>
              Explore our wide range of music lessons and learn to play your
              favorite instrument.
            </p>
          </div>
        </div>
         */}

        {/* Repeat the structure for other slides */}

      </AwesomeSlider>
    </div>
  );
};

export default Banner;

