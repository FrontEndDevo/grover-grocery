import Image from "next/image";
import { ourServices as srvs } from "./About";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Slider from "react-slick";
import rest_bg from "../../public/images/Restaurants/restaurants_list.webp";
import Link from "next/link";
import axios from "axios";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

// This is a temp option, We should fetch the restaurants names from DB.
const ourRestaurants = [
  "Arbys",
  "Burger King",
  "Chick-fil-A",
  "Chipotle",
  "Cookout",
  "Five Guys",
  "Hardees",
  "In-N-Out",
  "McDonalds",
  "Panda Express",
  "Panera",
  "Sonic",
  "Subway",
  "Taco Bell",
  "Wendys",
];

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

  const groverRestaurants = (
    <ul className="grid grid-cols-1 gap-2 md:grid-cols-2 lg:flex-col lg:flex">
      {ourRestaurants.map((rest, index) => (
        <Link
          key={index}
          className={`p-3 text-center lg:text-start text-2xl duration-300 lg:bg-white text-main-700 lg:text-main-700 lg:hover:text-white lg:hover:bg-primary-500 ${
            index % 2 == 0
              ? "bg-primary-500 hover:bg-white hover:text-main-700 text-white"
              : "bg-white hover:bg-primary-500 hover:text-white text-main-700"
          }`}
          href={rest.toLowerCase().replace(" ", "-")}
        >
          {rest}
        </Link>
      ))}
    </ul>
  );

  const groverBenefits = (
    <Slider {...settings}>
      {srvs.map((srv, index) => (
        <li key={index}>
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
  );

  return (
    <div className="mx-2 lg:mx-8">
      <div className="flex flex-col gap-8 lg:flex-row-reverse">
        <div className="relative basis-5/6">
          <Image
            src={rest_bg}
            alt="Fresh & Health Organic Food Image"
            className="w-full h-96 lg:h-full"
          />
          <div className="absolute w-1/2 top-4 left-4 lg:top-1/3 lg:left-12">
            <h2 className="text-2xl font-bold text-white lg:text-7xl">
              Fresh & Healthy Organic Food
            </h2>
            <p className="relative px-4 my-6 lg:my-12 text-xl lg:text-4xl uppercase text-main-100 before:absolute before:bg-green-400 before:top-0 before:left-0 before:w-1 before:rounded-full before:h-[130%]">
              Sale Up to <span className="text-white">48%</span> off
            </p>
            <button className="flex items-center justify-center gap-4 px-6 py-4 text-white duration-200 rounded-full lg:px-12 bg-primary-500 hover:bg-primary-700">
              Shop Now <FontAwesomeIcon icon={faArrowRight} />
            </button>
          </div>
        </div>
        <aside className="bg-white border-2 basis-1/6">
          {groverRestaurants}
        </aside>
      </div>
      <ul>{groverBenefits}</ul>
    </div>
  );
};

export default RestaurantsList;
