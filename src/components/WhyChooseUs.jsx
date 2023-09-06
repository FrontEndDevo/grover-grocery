import Image from "next/image";
import chooseUs from "../../public/images/choose_us.webp";
const WhyChooseUs = () => {
  return (
    <section className="py-40 bg-slate-50">
      <div className="container flex flex-col items-center justify-between gap-32 lg:flex-row">
        <div className="basis-1/2">
          <Image src={chooseUs} alt="Why should you choose us?" />
        </div>
        <div className="basis-1/2">
          <div className="px-20">
            <h5 className="text-xl text-green-500 uppercase">Why choose us</h5>
            <h2 className="mt-4 mb-8 text-5xl font-bold capitalize text-neutral-800">
              Find Favorites and Discover New Ones
            </h2>
            <p className="mb-10 text-gray-700">
              At vero eos et accusamus et iusto odio dignissimos ducimus
              blanditiis praesen voluptatum deleniti.
            </p>
            <button className="px-8 py-4 text-white duration-200 bg-red-400 rounded-xl hover:bg-red-500">
              Explore Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
