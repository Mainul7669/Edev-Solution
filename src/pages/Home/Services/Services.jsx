import {
  FaArtstation,
  FaChartLine,
  FaFileInvoice,
  FaLaptopCode,
  FaMobileAlt,
  FaNetworkWired,
} from "react-icons/fa";

const Services = () => {
  return (
    <div className="max-w-screen-xl lg:mx-auto mx-4 lg:my-20 my-12">
      {/* <div className="text-center">
        <h2 className="text-xl lg:text-5xl font-semibold mb-1 lg:mb-5">
          Featured service that we Provide
        </h2>
        <p className="lg:text-xl opacity-60 font-semibold text-xs mb-6 lg:mb-16">
          Business services are activities that combine consolidate
        </p>
      </div> */}

      <div className="ms-4">
        <p className="font-bold text-[#F86518]">OUR SERVICES</p>
        <h1 className="lg:text-5xl text-xl pt-1 font-bold lg:mb-10 text-[#05345E]">
          Featured service that we Provide
        </h1>
      </div>
      {/* card */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8">
        <div
          className="service card w-full lg:w-full bg-fuchsia-50 border  hover:bg-[#05345E] hover:text-white
            hover:border  hover:border-black
            bg-transparent 
            py-2 px-6 rounded text-sm font-semibold transition duration-300 ease-in-out transform hover:scale-105"
        >
          <figure className="px-10 pt-10">
            <span className="text-6xl">
              <FaLaptopCode />
            </span>
          </figure>

          <h2 className="card-title lg:text-2xl mx-auto mt-2 text-[#F86518] font-bold">
            Web Design
          </h2>
          <p className="text-xs lg:text-lg font-semibold text-center mt-2 pb-10 px-6 opacity-80">
            Lorem ipsum dolor sit amet consectetur .{" "}
          </p>
        </div>
        <div
          className="service card w-full lg:w-full bg-fuchsia-50 border  hover:bg-[#05345E] hover:text-white
            hover:border  hover:border-black
            bg-transparent 
            py-2 px-6 rounded text-sm font-semibold transition duration-300 ease-in-out transform hover:scale-105"
        >
          <figure className="px-10 pt-10">
            <span className="text-6xl">
              <FaChartLine />
            </span>
          </figure>

          <h2 className="card-title lg:text-2xl mx-auto mt-2 text-[#F86518] font-bold">
            Marketing
          </h2>
          <p className="text-xs lg:text-lg font-semibold text-center mt-2 pb-10 px-6 opacity-80">
            Lorem ipsum dolor sit amet consectetur .{" "}
          </p>
        </div>

        <div
          className="service card w-full lg:w-full bg-fuchsia-50 border  hover:bg-[#05345E] hover:text-white
            hover:border  hover:border-black
            bg-transparent 
            py-2 px-6 rounded text-sm font-semibold transition duration-300 ease-in-out transform hover:scale-105"
        >
          <figure className="px-10 pt-10">
            <span className="text-6xl">
              <FaArtstation />
            </span>
          </figure>

          <h2 className="card-title lg:text-2xl mx-auto mt-2 text-[#F86518] font-bold">
            Graphics Design
          </h2>
          <p className="text-xs lg:text-lg font-semibold text-center mt-2 pb-10 px-6 opacity-80">
            Lorem ipsum dolor sit amet consectetur .{" "}
          </p>
        </div>

        <div
          className="service card w-full lg:w-full bg-fuchsia-50 border  hover:bg-[#05345E] hover:text-white
            hover:border  hover:border-black
            bg-transparent 
            py-2 px-6 rounded text-sm font-semibold transition duration-300 ease-in-out transform hover:scale-105"
        >
          <figure className="px-10 pt-10">
            <span className="text-6xl">
              <FaMobileAlt />
            </span>
          </figure>

          <h2 className="card-title lg:text-2xl mx-auto mt-2 text-[#F86518] font-bold">
            App Developement
          </h2>
          <p className="text-xs lg:text-lg font-semibold text-center mt-2 pb-10 px-6 opacity-80">
            Lorem ipsum dolor sit amet consectetur .{" "}
          </p>
        </div>

        <div
          className="service card w-full lg:w-full bg-fuchsia-50 border  hover:bg-[#05345E] hover:text-white
            hover:border  hover:border-black
            bg-transparent 
            py-2 px-6 rounded text-sm font-semibold transition duration-300 ease-in-out transform hover:scale-105"
        >
          <figure className="px-10 pt-10">
            <span className="text-6xl">
              <FaFileInvoice />
            </span>
          </figure>

          <h2 className="card-title lg:text-2xl mx-auto mt-2 text-[#F86518] font-bold">
            Accounting
          </h2>
          <p className="text-xs lg:text-lg font-semibold text-center mt-2 pb-10 px-6 opacity-80">
            Lorem ipsum dolor sit amet consectetur .{" "}
          </p>
        </div>

        <div
          className="service card w-full lg:w-full bg-fuchsia-50 border  hover:bg-[#05345E] hover:text-white
            hover:border  hover:border-black
            bg-transparent 
            py-2 px-6 rounded text-sm font-semibold transition duration-300 ease-in-out transform hover:scale-105"
        >
          <figure className="px-10 pt-10">
            <span className="text-6xl">
              <FaNetworkWired />
            </span>
          </figure>

          <h2 className="card-title lg:text-2xl mx-auto mt-2 text-[#F86518] font-bold">
            Networking
          </h2>
          <p className="text-xs lg:text-lg font-semibold text-center mt-2 pb-10 px-6 opacity-80">
            Lorem ipsum dolor sit amet consectetur .{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Services;
