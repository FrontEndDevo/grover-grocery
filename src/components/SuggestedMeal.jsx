import Image from "next/image";
import tempMeal from "../../public/images/temp_meal.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
const SuggestedMeal = () => {
  return (
    <div>
      <div>
        <h3>Melting Cheese</h3>
        <h6>Red Stovery</h6>
      </div>
      <Image src={tempMeal} alt="temp meal" />
      <div>
        <div>
          <span>
            <FontAwesomeIcon icon={faStar} />
            3.8
          </span>
          <span>$49.66</span>
        </div>
        <button>+</button>
      </div>
    </div>
  );
};

export default SuggestedMeal;
