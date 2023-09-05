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
    <div key={i}>
      <FontAwesomeIcon icon={item.icon} />
      <h3>{item.benefit}</h3>
      <p>{item.description}</p>
    </div>
  ));
  return (
    <section>
      <h5>What we Serve</h5>
      <h2>fruit and vegetable delivered to your home</h2>
      <div>{allBenefits}</div>
    </section>
  );
};

export default Benefits;
