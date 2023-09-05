import Image from "next/image";
import tempImg from "../../public/images/header/temp_header_image.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
const SuggestedProduct = () => {
  return (
    <div>
      <Image src={tempImg} alt="temp image" />
      <div>
        <h4>Fresh Orenge</h4>
        <div>
          <span>$44.60</span>
          <p>Free Shipping</p>
        </div>
        <FontAwesomeIcon icon={faCartPlus} />
      </div>
    </div>
  );
};

export default SuggestedProduct;
