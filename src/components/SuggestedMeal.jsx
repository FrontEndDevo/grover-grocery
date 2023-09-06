import Image from "next/image";
import tempMeal from "../../public/images/temp_meal.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
const SuggestedMeal = () => {
  return (
    <div className="relative px-4 py-6 text-center duration-300 bg-white cursor-pointer lg:px-16 animate-bounce lg:animate-none hover:animate-none rounded-xl hover:-translate-y-4">
      <div className="capitalize">
        <h3 className="mb-2 text-lg font-bold text-neutral-800">
          Melting Cheese
        </h3>
        <h6 className="text-xs text-gray-700">Lime</h6>
      </div>
      <Image src={tempMeal} alt="temp meal" className="w-20 mx-auto my-4" />
      <div className="flex items-center justify-between gap-6">
        <div className="flex flex-col">
          <span className="flex items-center gap-1 text-base">
            <FontAwesomeIcon icon={faStar} className="w-4 text-yellow-500" />
            3.8
          </span>
          <span className="text-2xl font-bold">$49.66</span>
        </div>
        <button className="w-12 px-3 py-1 text-2xl text-white rounded-lg bg-gradient-to-b from-red-400 to-red-500 left-1/3">
          +
        </button>
      </div>
    </div>
  );
};

export default SuggestedMeal;
