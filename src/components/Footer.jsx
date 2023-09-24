import Image from "next/image";
import groverImg from "../../public/images/grover_grocery.webp";
import Link from "next/link";
const footerCompanyLinks = [
  "About Us",
  "Blog",
  "All Products",
  "Locations Map",
];

const footerServicesLinks = [
  "Order tracking",
  "Wish List",
  "Account",
  "Terms Conditions",
];
const Footer = () => {
  const footerCompanyLists = footerCompanyLinks.map((item, index) => (
    <li
      key={index}
      className="py-2 text-base duration-200 text-main-500 hover:text-black hover:underline"
    >
      <Link href={`/${item.toLocaleLowerCase().replace(" ", "-")}`}>
        {item}
      </Link>
    </li>
  ));

  const footerServicesLists = footerServicesLinks.map((item, index) => (
    <li
      key={index}
      className="py-2 text-base duration-200 text-main-500 hover:text-black hover:underline"
    >
      <Link href={`/${item.toLocaleLowerCase().replace(" ", "-")}`}>
        {item}
      </Link>
    </li>
  ));

  return (
    <footer className=" bg-slate-50">
      <div className="container">
        <div className="flex flex-col gap-20 text-center lg:text-start xl:flex-row py-36 lg:gap-60">
          <div className="basis-1/2">
            <Link
              href="/"
              className="flex items-center justify-center gap-2 my-4 lg:justify-start"
            >
              <Image src={groverImg} alt="Grover logo" />
              <h1 className="text-4xl font-bold text-main-700">Grover</h1>
            </Link>
            <p className="px-2 text-base text-main-500">
              Fast delivery, which is active all over the world, serves with
              many transportation vehicles.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-12 md:gap-0 md:grid-cols-3">
            <div>
              <h4 className="mb-4 text-xl font-bold text-main-700">
                Company
              </h4>
              <ul>{footerCompanyLists}</ul>
            </div>
            <div>
              <h4 className="mb-4 text-xl font-bold text-main-700">
                Services
              </h4>
              <ul>{footerServicesLists}</ul>
            </div>
            <div>
              <h4 className="mb-4 text-xl font-bold text-main-700">
                Get in Touch
              </h4>
              <p className="text-base text-main-500">
                Subscribe to our weekly Newsletter and receive updates via
                email.
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-between gap-2 py-6 border-t-2 md:flex-row">
          <p>
            All Rights Reserved &copy;{" "}
            <Link href="https://github.com/FrontEndDevo" target="_blank">
              FrontEndDevo 2023
            </Link>
          </p>
          <div className="flex gap-4">
            <Link
              href="/terms-and-conditions"
              className="py-2 text-base duration-200 text-main-500 hover:text-black hover:underline"
            >
              Terms Conditions
            </Link>
            <Link
              href="/privacy-policy"
              className="py-2 text-base duration-200 text-main-500 hover:text-black hover:underline"
            >
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
