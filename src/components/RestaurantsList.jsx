import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ourServices as srvs } from "./About";
import Slider from "react-slick";
const RestaurantsList = () => {
  const settings = {
    arrows: false,
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
    ],
  };

  const groverBenefits = (
    <ul>
      <Slider {...settings}>
        {srvs.map((srv) => (
          <li>
            <div className="flex flex-col items-center justify-center gap-4 p-6 text-center lg:text-start lg:flex-row">
              <FontAwesomeIcon
                icon={srv.icon}
                className="w-16 h-16 p-6 text-3xl duration-300 bg-gray-100 rounded-full text-primary-500 hover:text-white hover:bg-primary-700"
              />
              <div>
                <h6 className="text-lg font-bold capitalize lg:text-2xl text-main-700">
                  {srv.title}
                </h6>
                <p className="mt-2 text-base lg:text-lg text-main-100">
                  {srv.description}
                </p>
              </div>
            </div>
          </li>
        ))}
      </Slider>
    </ul>
  );
  return (
    <div>
      <div></div>
      {groverBenefits}
    </div>
  );
};

export default RestaurantsList;
