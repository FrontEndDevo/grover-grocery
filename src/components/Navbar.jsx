import Image from "next/image";
import Link from "next/link";
import groverImg from "../../public/images/grover_grocery.webp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBasketShopping,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
const navbarLinks = ["home", "menu", "service", "shop"];
const Navbar = () => {
  const navbarLists = navbarLinks.map((item) => <li key={item}>{item}</li>);
  return (
    <nav>
      <div>
        <div>
          <Link href="/">
            <Image src={groverImg} alt="Grover logo" />
            <h1>Grover</h1>
          </Link>
        </div>
        <ul>{navbarLists}</ul>
        <div>
          <input type="text" name="search" id="search" />
          <FontAwesomeIcon icon={faMagnifyingGlass} />
          <FontAwesomeIcon icon={faBasketShopping} />
          <span>2</span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
