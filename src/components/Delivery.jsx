import Image from "next/image";
import deliveryImg from "../../public/images/delivery.webp";
const Delivery = () => {
  return (
    <section>
      <div>
        <Image src={deliveryImg} alt="Delivery man" />
      </div>
      <div>
        <h6>Home delivery</h6>
        <h2>Sit at Home We Will Take Care Your Order</h2>
        <p>
          At vero eos et accusamus et iusto odio dignissimos ducimus qui
          blanditiis praesentium voluptatum deleniti atque corrupti quos
        </p>
        <button>Explore Now</button>
      </div>
    </section>
  );
};

export default Delivery;
