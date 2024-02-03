import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { CustomNextArrow, CustomPrevArrow } from "../../Shared/CustomArrows/CustomArrows";

const Review = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: true, // Show arrows
    prevArrow: <CustomPrevArrow />, // Custom left arrow component
    nextArrow: <CustomNextArrow />, // Custom right arrow component
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          arrows: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          arrows: true,
        },
      },
    ],
  };

  return (
    <div className="lg:relative lg:mt-20 lg:mb-52">

<div className="hero">
  <div className="hero-content flex-col lg:flex-row gap-16">
    <img src="https://img.freepik.com/premium-photo/close-up-portrait-confident-indian-financial-expert-office-worker-sitting-table-formal-suit_769609-327.jpg" className="max-w-sm rounded-lg shadow-lg hidden lg:block" />
    <div>
      <h1 className="text-3xl font-bold">Happy clients said to us they are satisfied. </h1>
      <p className="py-6">We are here today because of our partners support and we are proud to provide the best services to them. Let's join us in this journey of making success stories together.</p>
    </div>
  </div>
</div>


<div className="lg:absolute lg:top-48 lg:right-0 lg:left-0 lg:bottom-0">
<Slider {...settings} className="mx-4 lg:mx-[230px] pb-4">
        {/* Slide 1 */}

        <div className="p-4">
          <div className="bg-white p-6 border rounded-lg">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center ">
                {/* Image */}
                <div>
                <img
                  src="src/assets/Ellipse 2.png"
                  alt="Card Image"
                  width="40px"
                  height="40px"
                  className="mr-4"
                />
                </div>

                {/* Title and Subtitle */}
                <div>
                  <h2 className="text-lg font-semibold text-black">
                    Awlad Hossain
                  </h2>
                  <p className="text-[#6C6B6B] text-sm">Product Designer</p>
                </div>
              </div>

              <img
                src="src/assets/Group 17.png"
                alt="Card Image"
                width="40px"
                height="40px"
                className="mr-4"
              />
            </div>

            {/* Paragraph */}
            <p className="text-[#6C6B6B] mb-4">
              Lorem Ipsum has been the industry&apos;s standard dummy text ever since
              the 1500s, when an unknow printer tool a galley of type and
              scrambled it to make type specimen book has survived not only five
              centurines.
            </p>
          </div>
        </div>

        {/* Slide 2 */}
        <div className="p-4">
          <div className="bg-white p-6 border rounded-lg">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center ">
                {/* Image */}
                <img
                  src="src/assets/Ellipse 2.png"
                  alt="Card Image"
                  width="40px"
                  height="40px"
                  className="mr-4"
                />

                {/* Title and Subtitle */}
                <div>
                  <h2 className="text-lg font-semibold text-black">
                  Farhana Hossain
                  </h2>
                  <p className="text-[#6C6B6B] text-sm">Brand Designer</p>
                </div>
              </div>

              <img
                src="src/assets/Group 17.png"
                alt="Card Image"
                width="40px"
                height="40px"
                className="mr-4"
              />
            </div>

            {/* Paragraph */}
            <p className="text-[#6C6B6B] mb-4">
              Lorem Ipsum has been the industry&apos;s standard dummy text ever since
              the 1500s, when an unknow printer tool a galley of type and
              scrambled it to make type specimen book has survived not only five
              centurines.
            </p>
          </div>
        </div>
        <div className="p-4">
          <div className="bg-white p-6 border rounded-lg">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center ">
                {/* Image */}
                <img
                  src="src/assets/Ellipse 2.png"
                  alt="Card Image"
                  width="40px"
                  height="40px"
                  className="mr-4"
                />

                {/* Title and Subtitle */}
                <div>
                  <h2 className="text-lg font-semibold text-black">
                    Awlad Hossain
                  </h2>
                  <p className="text-[#6C6B6B] text-sm">Product Designer</p>
                </div>
              </div>

              <img
                src="src/assets/Group 17.png"
                alt="Card Image"
                width="40px"
                height="40px"
                className="mr-4"
              />
            </div>

            {/* Paragraph */}
            <p className="text-[#6C6B6B] mb-4">
              Lorem Ipsum has been the industry&apos;s standard dummy text ever since
              the 1500s, when an unknow printer tool a galley of type and
              scrambled it to make type specimen book has survived not only five
              centurines.
            </p>
          </div>
        </div>
        <div className="p-4">
          <div className="bg-white p-6 border rounded-lg">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center ">
                {/* Image */}
                <img
                  src="src/assets/Ellipse 2.png"
                  alt="Card Image"
                  width="40px"
                  height="40px"
                  className="mr-4"
                />

                {/* Title and Subtitle */}
                <div>
                  <h2 className="text-lg font-semibold text-black">
                    Awlad Hossain
                  </h2>
                  <p className="text-[#6C6B6B] text-sm">Product Designer</p>
                </div>
              </div>

              <img
                src="src/assets/Group 17.png"
                alt="Card Image"
                width="40px"
                height="40px"
                className="mr-4"
              />
            </div>

            {/* Paragraph */}
            <p className="text-[#6C6B6B] mb-4">
              Lorem Ipsum has been the industry&apos;s standard dummy text ever since
              the 1500s, when an unknow printer tool a galley of type and
              scrambled it to make type specimen book has survived not only five
              centurines.
            </p>
          </div>
        </div>

        {/* Add more slides as needed */}
      </Slider>
</div>
    
    
    </div>
  );
};


export default Review;