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
      className="py-2 text-base text-gray-700 duration-200 hover:text-black hover:underline"
    >
      <Link href={`/${item.toLocaleLowerCase().replace(" ", "-")}`}>
        {item}
      </Link>
    </li>
  ));

  const footerServicesLists = footerServicesLinks.map((item, index) => (
    <li
      key={index}
      className="py-2 text-base text-gray-700 duration-200 hover:text-black hover:underline"
    >
      <Link href={`/${item.toLocaleLowerCase().replace(" ", "-")}`}>
        {item}
      </Link>
    </li>
  ));

  return (
    <footer className=" bg-slate-50">
      <div className="container">
        <div className="flex py-36 gap-60">
          <div className="basis-1/2">
            <div className="flex items-center gap-2 mb-4">
              <Image src={groverImg} alt="Grover logo" />
              <h1 className="text-4xl font-bold text-neutral-800">Grover</h1>
            </div>
            <p className="text-base text-gray-700">
              Fast delivery, which is active all over the world, serves with
              many transportation vehicles.
            </p>
          </div>
          <div className="grid grid-cols-3">
            <div>
              <h4 className="mb-4 text-xl font-bold text-neutral-800">
                Company
              </h4>
              <ul>{footerCompanyLists}</ul>
            </div>
            <div>
              <h4 className="mb-4 text-xl font-bold text-neutral-800">
                Services
              </h4>
              <ul>{footerServicesLists}</ul>
            </div>
            <div>
              <h4 className="mb-4 text-xl font-bold text-neutral-800">
                Get in Touch
              </h4>
              <p className="text-base text-gray-700">
                Subscribe to our weekly Newsletter and receive updates via
                email.
              </p>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-between py-6 border-t-2">
          <p>All Rights Reserved &copy; FrontEndDevo 2023</p>
          <div className="flex gap-4">
            <Link
              href="/terms-and-conditions"
              className="py-2 text-base text-gray-700 duration-200 hover:text-black hover:underline"
            >
              Terms Conditions
            </Link>
            <Link
              href="/privacy-policy"
              className="py-2 text-base text-gray-700 duration-200 hover:text-black hover:underline"
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
