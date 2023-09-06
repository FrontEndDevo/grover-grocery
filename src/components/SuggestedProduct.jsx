import Image from "next/image";
import tempImg from "../../public/images/temp_header_image.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
const SuggestedProduct = () => {
  return (
    <div className="relative px-8 py-4 text-center duration-300 bg-white cursor-pointer animate-bounce lg:animate-none lg:px-16 lg:pt-8 lg:pb-12 rounded-xl hover:-translate-y-4">
      <Image src={tempImg} alt="temp image" className="w-24" />
      <div>
        <h4 className="py-2 my-2 text-xs font-bold border-b-2 border-orange-500">
          Fresh Orenge
        </h4>
        <div className="my-4">
          <span className="text-lg font-bold lg:text-2xl">$44.60</span>
          <p className="text-xs text-gray-600">Free Shipping</p>
        </div>
        <FontAwesomeIcon
          icon={faCartPlus}
          className="absolute w-10 p-2 text-white rounded-lg lg:p-4 -bottom-4 lg:-bottom-6 lg:w-14 bg-gradient-to-b from-red-400 to-red-600 left-1/3"
        />
      </div>
    </div>
  );
};

export default SuggestedProduct;
