import Image from "next/image";
import deliveryImg from "../../public/images/delivery.webp";
const Delivery = () => {
  return (
    <section className="container flex flex-col items-center justify-between lg:flex-row-reverse">
      <div className="basis-4/12">
        <Image src={deliveryImg} alt="Delivery man" className="w-full" />
      </div>

      <div className="basis-5/12">
        <h6 className="text-lg text-yellow-500 uppercase">Home delivery</h6>
        <h2 className="mt-4 mb-8 text-5xl font-bold leading-tight text-neutral-800">
          Sit at Home We Will Take Care Your Order
        </h2>
        <p className="text-lg text-gray-700">
          At vero eos et accusamus et iusto odio dignissimos ducimus qui
          blanditiis praesentium voluptatum deleniti atque corrupti quos
        </p>
        <button className="w-full px-8 py-4 mt-12 text-xl text-red-400 duration-200 bg-transparent border-2 border-red-400 hover:text-white lg:w-fit rounded-xl hover:bg-red-400">
          Explore Now
        </button>
      </div>
    </section>
  );
};

export default Delivery;
