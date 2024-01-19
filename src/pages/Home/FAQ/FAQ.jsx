import React from "react";
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
              Click to open this one and close others
            </div>
            <div className="collapse-content">
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nulla
                dignissimos est, exercitationem quam molestias, nisi
                consequuntur enim tempore rerum illo vero obcaecati accusantium,
                nihil repudiandae dolores error animi voluptatem suscipit.
              </p>
            </div>
          </div>
          <div className="collapse collapse-plus border-b">
            <input type="radio" name="my-accordion-3" />
            <div className="collapse-title lg:text-2xl  font-semibold">
              Click to open this one and close others
            </div>
            <div className="collapse-content">
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nulla
                dignissimos est, exercitationem quam molestias, nisi
                consequuntur enim tempore rerum illo vero obcaecati accusantium,
                nihil repudiandae dolores error animi voluptatem suscipit.
              </p>
            </div>
          </div>
          <div className="collapse collapse-plus border-b">
            <input type="radio" name="my-accordion-3" />
            <div className="collapse-title lg:text-2xl  font-semibold">
              Click to open this one and close others
            </div>
            <div className="collapse-content">
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nulla
                dignissimos est, exercitationem quam molestias, nisi
                consequuntur enim tempore rerum illo vero obcaecati accusantium,
                nihil repudiandae dolores error animi voluptatem suscipit.
              </p>
            </div>
          </div>
          <div className="collapse collapse-plus border-b">
            <input type="radio" name="my-accordion-3" />
            <div className="collapse-title lg:text-2xl  font-semibold">
              Click to open this one and close others
            </div>
            <div className="collapse-content">
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nulla
                dignissimos est, exercitationem quam molestias, nisi
                consequuntur enim tempore rerum illo vero obcaecati accusantium,
                nihil repudiandae dolores error animi voluptatem suscipit.
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
