import Image from "next/image";
import aboutTwo from "../../public/images/about/about_2.webp";
const About = () => {
  return (
    <section className="pt-40">
      <div className="container flex flex-row-reverse items-center justify-center gap-40">
        <Image
          src={aboutTwo}
          alt="100% Trusted Organic Food Store"
          className="basis-1/2"
        />
        <div className="basis-1/2">
          <h2 className="mb-10 text-6xl font-bold text-main-700">
            100% Trusted Organic Food Store
          </h2>
          <p className="text-base text-justify text-main-100">
            Morbi porttitor ligula in nunc varius sagittis. Proin dui nisi,
            laoreet ut tempor ac, cursus vitae eros. Cras quis ultricies elit.
            Proin ac lectus arcu. Maecenas aliquet vel tellus at accumsan. Donec
            a eros non massa vulputate ornare. Vivamus ornare commodo ante, at
            commodo felis congue vitae.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
