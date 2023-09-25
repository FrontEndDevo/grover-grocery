"use client";
import Image from "next/image";
import Link from "next/link";
import groverImg from "../../public/images/grover_grocery.webp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBasketShopping,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
const navbarLinks = ["home", "menu", "about", "shop"];
const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const showMenuHandler = () => {
    setShowMenu((prevState) => !prevState);
  };

  const navbarLists = navbarLinks.map((item, index) => (
    <li
      key={index}
      className={`text-base font-bold text-main-700 capitalize ${
        index == 0 ? "text-primary-500" : ""
      } duration-200 hover:text-primary-500`}
    >
      <Link href={`/${index == 0 ? "" : item}`}>{item}</Link>
    </li>
  ));
  return (
    <nav className="fixed z-50 w-full bg-slate-50">
      <div className="container relative flex flex-col items-center justify-between pt-6 lg:flex-row">
        <div>
          <Link
            href="/"
            className="flex items-center justify-center gap-2 my-4 lg:justify-start"
          >
            <Image src={groverImg} alt="Grover logo" />
            <h1 className="text-4xl font-bold text-main-700">Grover</h1>
          </Link>
        </div>

        <div className="absolute right-0 z-50 flex flex-col items-end px-4 lg:relative gap-7 top-1/3">
          <div
            onClick={showMenuHandler}
            className={`flex duration-700 ease-in-out gap-2 cursor-pointer lg:hidden ${
              showMenu ? "-rotate-[450deg]" : ""
            }`}
          >
            <span className="w-4 h-4 bg-transparent border border-blue-400 rounded-full"></span>
            <span className="w-4 h-4 bg-transparent border border-blue-400 rounded-full"></span>
            <span className="w-4 h-4 bg-transparent border border-blue-400 rounded-full"></span>
          </div>
          <ul
            className={`flex flex-col items-center px-20 py-8 before:w-8 relative before:absolute before:right-4 before:-top-2 before:h-8 lg:before:hidden before:bg-white before:rotate-45 duration-200 bg-white shadow-lg lg:shadow-none shadow-primary-100 rounded-xl text-start lg:bg-transparent gap-14 lg:flex-row lg:scale-100 lg:translate-y-0 ${
              showMenu ? "scale-100 translate-y-4" : "scale-0 -translate-y-8"
            }`}
          >
            {navbarLists}
          </ul>
        </div>

        <div className="relative mt-6 lg:mt-0">
          <input
            type="text"
            name="search"
            id="search"
            className="w-full py-4 pl-10 pr-16 outline-none rounded-xl text-main-700 placeholder:text-neutral-700"
            placeholder="Search"
          />
          <FontAwesomeIcon
            icon={faMagnifyingGlass}
            className="absolute w-4 text-main-500 left-4 top-1/3"
          />
          <button className="absolute w-10 px-1 border-l text-main-700 right-6 top-1/4">
            <FontAwesomeIcon icon={faBasketShopping} />
          </button>
          <span className="absolute px-3 py-1 text-white rounded-full shadow-lg bg-primary-700 -right-2 -top-2 shadow-primary-100">
            2
          </span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
