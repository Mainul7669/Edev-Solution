
const About = () => {
  return (
    <div className=" max-w-screen-xl mx-4 lg:mx-auto lg:my-32 my-8">
      <div>
        <div className="lg:flex lg:gap-20 ">
          <div className="ms-4 mb-8 lg:mb-8">
            <p className="font-bold text-[#F86518]">About Us</p>
            <h1 className="lg:text-4xl text-xl pt-1 font-bold mb-2 lg:mb-4  text-[#05345E]">
              Transforming Business With Innovative Digital Solutions
            </h1>
            <p className="font-semibold opacity-85 text-sm lg:text-sm">
            At Edev-Solution, we stand out in the digital landscape for three key reasons: <span className="font-bold">expertise, custom solutions, and a client-centric approach.</span> Our team comprises seasoned professionals with a wealth of skills and in-depth industry knowledge. From cutting-edge web design to robust development, we bring a blend of creativity and technical proficiency to every project. We use modern updated technologies to give our clients best solutions according to the needs. We follow agile development process, to ensure your product quality, stability and scalability. We built products with flexible & extendable skeletons which produce open-ended structure to our client solutions.
            </p>
            <p className="font-semibold opacity-85 text-xs lg:text-sm  mt-2">
            We are here to turn your aspirations into reality.
            </p>

             <a href="/portfolio">
             <button className="bg-[#05345E] text-[#FFFFFF] hover:bg-[#F86518] py-2 px-3 rounded-full lg:text-lg text-xs  font-semibold transition duration-300 ease-in-out transform hover:scale-105 mt-4">
                Explore Our Portfolio
              </button>
             </a>
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
