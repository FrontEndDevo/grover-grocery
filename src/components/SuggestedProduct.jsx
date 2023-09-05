import Image from "next/image";
import tempImg from "../../public/images/header/temp_header_image.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
const SuggestedProduct = () => {
  return (
    <div className="relative px-16 pt-8 pb-12 duration-300 bg-white cursor-pointer rounded-xl hover:-translate-y-4">
      <Image src={tempImg} alt="temp image" className="w-24 " />
      <div>
        <h4 className="py-2 my-2 text-xs font-bold text-center border-b-2 border-orange-500">
          Fresh Orenge
        </h4>
        <div className="my-4">
          <span className="text-2xl font-bold">$44.60</span>
          <p className="text-xs text-gray-600">Free Shipping</p>
        </div>
        <FontAwesomeIcon
          icon={faCartPlus}
          className="absolute p-4 text-white rounded-lg -bottom-6 w-14 bg-gradient-to-b from-red-400 to-red-600 left-1/3"
        />
      </div>
    </div>
  );
};

export default SuggestedProduct;
