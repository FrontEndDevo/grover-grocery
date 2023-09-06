import Image from "next/image";
import chooseUs from "../../public/images/choose_us.webp";
const WhyChooseUs = () => {
  return (
    <section className="py-20 lg:py-40 bg-slate-50">
      <div className="container flex flex-col items-center justify-between gap-10 lg:gap-32 lg:flex-row">
        <div className="basis-1/2">
          <Image src={chooseUs} alt="Why should you choose us?" />
        </div>
        <div className="mx-4 text-center xl:px-20 basis-1/2 lg:text-start">
          <h5 className="text-base text-green-500 uppercase lg:text-xl">
            Why choose us
          </h5>
          <h2 className="mt-4 mb-8 text-3xl font-bold capitalize lg:text-5xl text-neutral-800">
            Find Favorites and Discover New Ones
          </h2>
          <p className="mb-10 text-base text-gray-700 lg:text-lg">
            At vero eos et accusamus et iusto odio dignissimos ducimus
            blanditiis praesen voluptatum deleniti.
          </p>
          <button className="w-full px-8 py-4 text-white duration-200 bg-red-400 lg:w-fit rounded-xl hover:bg-red-500">
            Explore Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
