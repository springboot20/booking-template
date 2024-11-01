import React from "react";
import Button from "../buttons/Button";
import { HeroIllustration } from "../image-exports/Images";

const Hero = () => {
  return (
    <section className="relative py-28 xl:pb-0" id="hero">
      <div className="max-w-7xl mx-auto grid grid-cols-1 px-4 xl:px-0 lg:grid-cols-2 gap-8 items-center place-content-center lg:h-[calc(100vh-7rem)]">
        <article className="order-2 lg:order-1">
          <h1 className="text-3xl sm:text-5xl font-bold text-very-dark-blue text-center lg:text-left">
            A Simple Bookmark Manager
          </h1>
          <p className="text-gray-500 text-lg font-medium text-center lg:text-left py-8">
            A clean and simple interface to organize your favorite websites. Open a new browser tab
            and see your sites load instantly. Try it for free.
          </p>
          <div className="flex flex-col gap-3 xs:flex-row justify-center lg:justify-start text-center lg:text-left">
            <Button className="lg:inline-block px-3.5 w-full xs:w-fit py-3.5 rounded-md shadow-md bg-soft-blue hover:bg-transparent hover:ring-2 hover:ring-soft-blue hover:text-soft-blue transition-all ease text-white text-base font-medium">
              Get it on Chrome
            </Button>
            <Button className="lg:inline-block px-3.5 w-full xs:w-fit py-3 rounded-md bg-grayish-blue text-lg font-medium hover:bg-transparent hover:ring-2 hover:ring-grayish-blue shadow-md transition-all ease">
              Get it on Firefox
            </Button>
          </div>
        </article>
        <article className="order-1 lg:order-2">
          <img src={HeroIllustration} alt="" className="block w-full" />
        </article>
      </div>
    </section>
  );
};

export default Hero;
