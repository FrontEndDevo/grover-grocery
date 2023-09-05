import Image from "next/image";
import header_chef_bg from "../../public/images/header/chef_bg.webp";
import header_chef from "../../public/images/header/chef.webp";
import temp_header from "../../public/images/header/temp_header_image_2.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClockRotateLeft, faPlay } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  return (
    <header className="container py-8">
      <div>
        <Image src={header_chef_bg} alt="header chef background" />
        <Image src={header_chef} alt="header chef background" />
        <div>
          <FontAwesomeIcon icon={faClockRotateLeft} />
          <div>
            <p>Delivary</p>
            <span>30 Min</span>
          </div>
        </div>
      </div>
      <div>
        <button>
          More than Faster
          <Image src={temp_header} alt="More than Faster" />
        </button>
        <div>
          <h2>
            Groceries delivered in as little as <span>2 hours</span>
          </h2>
          <p>
            Grocen atssures fresh grocery every morning to your family without
            getting out in this pandemic.
          </p>
        </div>
        <div>
          <button>Order Now</button>
          <button>
            Order Process
            <FontAwesomeIcon icon={faPlay} />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
