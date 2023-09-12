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
  const footerCompanyLists = footerCompanyLinks.map((item) => (
    <li>
      <Link href={`/${item.toLocaleLowerCase().replace(" ", "-")}`}>
        {item}
      </Link>
    </li>
  ));

  const footerServicesLists = footerServicesLinks.map((item) => (
    <li>
      <Link href={`/${item.toLocaleLowerCase().replace(" ", "-")}`}>
        {item}
      </Link>
    </li>
  ));

  return (
    <footer>
      <div>
        <div>
          <div>
            <div>
              <Image src={groverImg} alt="Grover logo" />
              <h2>Grover</h2>
            </div>
            <p>
              Fast delivery, which is active all over the world, serves with
              many transportation vehicles.
            </p>
          </div>
          <div>
            <div>
              <h4>Company</h4>
              <ul>{footerCompanyLists}</ul>
            </div>
            <div>
              <h4>Services</h4>
              <ul>{footerServicesLists}</ul>
            </div>
            <div>
              <h4>Get in Touch</h4>
              <p>
                Subscribe to our weekly Newsletter and receive updates via
                email.
              </p>
            </div>
          </div>
        </div>
        <div>
          <p>All Rights Reserved &copy; FrontEndDevo 2023</p>
          <div>
            <Link href="/terms-and-conditions">Terms Conditions</Link>
            <Link href="/privacy-policy">Privacy Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
