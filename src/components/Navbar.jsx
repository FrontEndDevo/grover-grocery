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
  const navbarLists = navbarLinks.map((item, i) => (
    <li
      key={i}
      className={`text-base font-bold text-gray-700 capitalize ${
        i == 0 ? "text-red-500" : ""
      } duration-200 hover:text-red-500`}
    >
      <Link href={`/${item}`}>{item}</Link>
    </li>
  ));
  return (
    <nav className="bg-slate-50">
      <div className="container flex items-center justify-between pt-8">
        <div>
          <Link
            href="/"
            className="flex items-center justify-center gap-2 my-4 lg:justify-start"
          >
            <Image src={groverImg} alt="Grover logo" />
            <h1 className="text-4xl font-bold text-neutral-800">Grover</h1>
          </Link>
        </div>
        <ul className="flex gap-14">{navbarLists}</ul>
        <div className="relative">
          <input
            type="text"
            name="search"
            id="search"
            className="w-full py-4 pl-10 pr-16 outline-none rounded-xl text-neutral-700 placeholder:text-neutral-700"
            placeholder="Search"
          />
          <FontAwesomeIcon
            icon={faMagnifyingGlass}
            className="absolute w-4 text-gray-600 left-4 top-1/3"
          />
          <button className="absolute w-10 px-1 text-gray-800 border-l right-6 top-1/4">
            <FontAwesomeIcon icon={faBasketShopping} />
          </button>
          <span className="absolute px-3 py-1 text-white bg-red-500 rounded-full shadow-lg -right-2 -top-2 shadow-red-500/50">
            0
          </span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
