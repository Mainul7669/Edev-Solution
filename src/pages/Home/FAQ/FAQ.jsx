import faqImage from "../../../assets/design/FAQ/faq.jpg";
const FAQ = () => {
  return (
    <div className="max-w-screen-xl lg:mx-auto mx-4">
      <div className="ms-4">
        <p className="font-extrabold text-[#F86518]">WHY CHOOSE US</p>
        <h1 className="lg:text-5xl text-xl pt-1 font-bold lg:mb-10 text-[#05345E]">
          We Provide Complete,End-to-End <br />
          Business Solutions{" "}
        </h1>
      </div>
      {/* flex */}
      <div className="lg:flex  gap-20">
        <div className="my-4 lg:w-[60%]">
          <div className="collapse collapse-plus border-b">
            <input type="radio" name="my-accordion-3" />
            <div className="collapse-title lg:text-2xl  font-semibold">
            Why Choose Us?
            </div>
            <div className="collapse-content">
              <p>
              Our team comprises seasoned professionals with a wealth of skills and in-depth industry knowledge. From cutting-edge web design to robust development, we bring a blend of creativity and technical proficiency to every project.
              </p>
            </div>
          </div>
          <div className="collapse collapse-plus border-b">
            <input type="radio" name="my-accordion-3" />
            <div className="collapse-title lg:text-2xl  font-semibold">
             Free Consultation
            </div>
            <div className="collapse-content">
              <p>
              We're here to help your next business venture shine. If you're seeking dedicated professionals, you've come to the right place. We're passionate and action-oriented. Let's embark on an incredible journey together. <br />
              <a href="/contact" className="link text-blue-500">Request for free consultation.</a>
              </p>
            </div>
          </div>
          <div className="collapse collapse-plus border-b">
            <input type="radio" name="my-accordion-3" />
            <div className="collapse-title lg:text-2xl  font-semibold">
            Client-Centric Approach
            </div>
            <div className="collapse-content">
              <p>
              At the heart of our ethos is a relentless focus on client satisfaction. We don't just deliver projects; we build lasting partnerships. From the initial consultation to post-launch support, we prioritize open communication, collaboration, and a thorough understanding of your vision. Your success is our success, and we are here for the long haul.
              </p>
            </div>
          </div>
          <div className="collapse collapse-plus border-b">
            <input type="radio" name="my-accordion-3" />
            <div className="collapse-title lg:text-2xl  font-semibold">
              Custom Solutions
            </div>
            <div className="collapse-content">
              <p>
              We understand that one size does not fit all. That's why we are dedicated to crafting tailor-made solutions that align perfectly with each client's unique needs and goals. Our commitment to customization ensures that your digital presence not only meets but exceeds expectations.
              </p>
            </div>
          </div>
        </div>
        {/* images */}
        <div className=" my-8 lg:w-[60%]">
          <img
            className="w-full h-full"
            style={{
              borderRadius: "62% 8% 49% 4% / 64% 20% 63% 22%",
            }}
            src={faqImage}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default FAQ;
