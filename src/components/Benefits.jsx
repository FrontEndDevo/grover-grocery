import {
  faHandHoldingDollar,
  faTruckFast,
  faUserLock,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const allGroverGroceryBenefits = [
  {
    icon: faTruckFast,
    benefit: "Free shipping",
    description: "Enjoy Order in a hand using the fresness of groceries",
  },
  {
    icon: faHandHoldingDollar,
    benefit: "15 days returns",
    description: "Order in a handy way using the freshness of the groceries.",
  },
  {
    icon: faUserLock,
    benefit: "Secure checkout",
    description: "If you get rotten items - return immediately to us.",
  },
];

const Benefits = () => {
  const allBenefits = allGroverGroceryBenefits.map((item, i) => (
    <div
      key={i}
      className="relative px-2 py-12 text-center duration-1000 bg-white rounded-lg shadow-xl shadow-red-500/50 lg:shadow-red-50 hover:lg:shadow-red-500/100"
    >
      <FontAwesomeIcon
        icon={item.icon}
        className="mx-auto mb-20 text-red-500 w-28"
      />
      <h3 className="mb-4 text-2xl font-bold">{item.benefit}</h3>
      <p className="px-16 text-sm text-gray-400">{item.description}</p>
    </div>
  ));
  return (
    <section className="py-20 bg-red-100 lg:py-40">
      <div className="container">
        <div className="font-bold text-center">
          <h5 className="text-base text-red-400 lg:text-xl">What we Serve</h5>
          <h2 className="mt-4 text-3xl leading-tight lg:text-5xl xl:px-60 lg:px-44 2xl:px-96 text-neutral-800">
            fruit and vegetable delivered to your home
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-24 mx-4 mt-24 md:mx-0 md:grid-cols-2 lg:grid-cols-3">
          {allBenefits}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
