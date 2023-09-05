import Image from "next/image";
import header from "../../public/images/header/header.webp";
import temp_header from "../../public/images/header/temp_header_image_2.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClockRotateLeft, faPlay } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  return (
    <header className="py-40 bg-slate-50">
      <div className="container flex flex-col items-center justify-between gap-12 lg:gap-32 lg:flex-row-reverse">
        <div className="relative basis-1/3">
          <Image src={header} alt="header chef" className="w-full" />
          <div className="absolute top-0 flex gap-4 px-4 py-2 bg-white rounded-lg right-2 md:top-24 md:-right-8 lg:-right-8 xl:-right-4 lg:top-16 xl:top-24">
            <FontAwesomeIcon
              icon={faClockRotateLeft}
              className="w-10 text-teal-500"
            />
            <div>
              <p className="font-bold text-gray-700">Delivary</p>
              <span className="text-gray-400">30 Min</span>
            </div>
          </div>
        </div>
        <div className="basis-1/2">
          <button className="flex items-center justify-center gap-2 px-6 py-2 mx-auto text-red-500 duration-300 bg-red-100 rounded-full hover:bg-red-200 lg:m-0">
            More than Faster
            <Image src={temp_header} alt="More than Faster" className="w-8" />
          </button>

          <div className="my-8">
            <h2 className="text-2xl font-bold text-center text-neutral-800 lg:text-5xl lg:text-start xl:text-7xl">
              Groceries delivered in as little as{" "}
              <span className="text-red-500">2 hours</span>
            </h2>
            <p className="my-4 text-base text-center lg:text-start gray-500 lg:text-lg">
              Grocen atssures fresh grocery every morning to your family without
              getting out in this pandemic.
            </p>
          </div>

          <div className="flex flex-col items-center gap-10 mx-4 lg:gap-20 lg:flex-row">
            <button className="w-full px-8 py-4 text-white duration-200 bg-red-400 rounded-xl hover:bg-red-500">
              Order Now
            </button>
            <button className="flex flex-row-reverse items-center justify-center w-full gap-6 p-2 font-bold duration-300 border border-yellow-400 border-solid rounded-lg lg:border-transparent hover:border-yellow-400">
              Order Process
              <div className="p-6 bg-white rounded-full">
                <FontAwesomeIcon
                  icon={faPlay}
                  className="w-6 h-6 text-yellow-400 p-106"
                />
              </div>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
