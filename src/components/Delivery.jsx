import Image from "next/image";
import deliveryImg from "../../public/images/delivery.webp";
const Delivery = () => {
  return (
    <section className="py-10 lg:py-4 bg-slate-50 ">
      <div className="container flex flex-col items-center justify-between lg:flex-row-reverse">
        <div className="basis-4/12">
          <Image src={deliveryImg} alt="Delivery man" className="w-full" />
        </div>

        <div className="mx-4 text-center xl:basis-6/12 lg:basis-8/12 lg:text-start">
          <h6 className="text-base text-yellow-500 uppercase lg:text-xl">
            Home delivery
          </h6>
          <h2 className="mt-4 mb-8 text-3xl font-bold leading-tight lg:text-5xl text-neutral-800">
            Sit at Home We Will Take Care Your Order
          </h2>
          <p className="text-base text-gray-700 lg:text-lg">
            At vero eos et accusamus et iusto odio dignissimos ducimus qui
            blanditiis praesentium voluptatum deleniti atque corrupti quos
          </p>
          <button className="w-full px-8 py-4 mt-12 text-xl text-red-500 duration-300 bg-transparent border-2 border-red-500 hover:text-white lg:w-fit rounded-xl hover:bg-red-500">
            Explore Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default Delivery;
