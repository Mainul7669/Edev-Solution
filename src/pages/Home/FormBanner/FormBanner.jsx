import { GiCheckMark } from "react-icons/gi";



const FormBanner = () => {
    return (
        <div>
            <div className="hero py-24">
  <div className="hero-content flex-col-reverse gap-10 lg:flex-row">
    <img src="src/assets/5096437-removebg-preview.png" className=" rounded-lg" />
    <div>
      <h1 className="text-4xl font-bold">We Are Really Great At What We Do!</h1>
      <p className="py-6 text-xl font-semibold text-gray-700">Contact us and we&apos;ll set up a video call to discuss <br /> your requirements in detail.</p>
      <ul className="text-xl font-semibold text-gray-700 leading-10">
        <li className="flex items-center gap-2" ><GiCheckMark className="text-[#F86518]"/> Web & custom app development</li>
        <li className="flex items-center gap-2"><GiCheckMark className="text-[#F86518]"/> Application design and Development</li>
      </ul>
      <a href="/contact">
      <button className="bg-[#05345E] py-3 px-4 hover:bg-[#F86518] rounded-full mt-8 font-semibold text-lg text-white">Get in Touch</button>
      </a>
    </div>
  </div>
</div>
        </div>
    );
};

export default FormBanner;