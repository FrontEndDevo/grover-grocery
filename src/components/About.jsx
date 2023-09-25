import Image from "next/image";
import aboutTwo from "../../public/images/about/about_2.webp";
import aboutThree from "../../public/images/about/about_3.webp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLeaf,
  faHeadset,
  faRankingStar,
  faBagShopping,
  faTruckFast,
  faUserLock,
} from "@fortawesome/free-solid-svg-icons";

const ourServices = [
  {
    icon: faLeaf,
    title: "100% Organic food",
    description: "100% healthy & Fresh food",
  },
  {
    icon: faHeadset,
    title: "Great Support 24/7",
    description: "Instant access to Contact",
  },
  {
    icon: faRankingStar,
    title: "Customer Feedback",
    description: "Our happy customer",
  },
  {
    icon: faBagShopping,
    title: "100% Sucure Payment",
    description: "We ensure your money is save",
  },
  {
    icon: faTruckFast,
    title: "Free Shipping",
    description: "Free shipping with discount",
  },
  {
    icon: faUserLock,
    title: "Secure checkout",
    description: "return rotten items to us",
  },
];

const About = () => {
  const aboutSercices = (
    <ul className="grid grid-cols-2 gap-4">
      {ourServices.map((srv) => (
        <li className="flex items-center gap-4">
          <FontAwesomeIcon
            icon={srv.icon}
            className="w-8 p-4 text-3xl rounded-full bg-green-50 text-primary-100"
          />
          <div>
            <h6 className="text-base font-bold capitalize text-main-700">
              {srv.title}
            </h6>
            <p className="text-xs text-main-100">{srv.description}</p>
          </div>
        </li>
      ))}
    </ul>
  );
  return (
    <section className="pt-40">
      <div className="container flex flex-row-reverse items-center justify-center gap-40">
        <Image
          src={aboutTwo}
          alt="100% Trusted Organic Food Store Part 1"
          className="basis-1/2"
        />
        <div className="basis-1/2">
          <h2 className="mb-10 text-6xl font-bold text-main-700">
            100% Trusted Organic Food Store
          </h2>
          <p className="text-base text-justify text-main-100">
            Morbi porttitor ligula in nunc varius sagittis. Proin dui nisi,
            laoreet ut tempor ac, cursus vitae eros. Cras quis ultricies elit.
            Proin ac lectus arcu. Maecenas aliquet vel tellus at accumsan. Donec
            a eros non massa vulputate ornare. Vivamus ornare commodo ante, at
            commodo felis congue vitae.
          </p>
        </div>
      </div>

      <div className="flex items-center gap-4 my-20">
        <Image
          src={aboutThree}
          alt="100% Trusted Organic Food Store Part 2"
          className=""
        />
        <div className="pr-40">
          <h2 className="mb-10 text-6xl font-bold text-main-700">
            100% Trusted Organic Food Store
          </h2>
          <p className="text-base text-justify text-main-100">
            Pellentesque a ante vulputate leo porttitor luctus sed eget eros.
            Nulla et rhoncus neque. Duis non diam eget est luctus tincidunt a a
            mi. Nulla eu eros consequat tortor tincidunt feugiat.
          </p>
          {aboutSercices}
        </div>
      </div>
    </section>
  );
};

export default About;
