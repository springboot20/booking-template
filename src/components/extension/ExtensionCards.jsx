import React from "react";
import Button from "../buttons/Button";
import { BgDot } from "../image-exports/Images";

const ExtensionCards = ({ data }) => {
  return (
    <div className="border relative p-5 rounded-2xl bg-white flex flex-col items-center justify-between space-y-16">
      <img src={data.icon} alt="" className="h-24" />
      <div className="text-center">
        <h2 className="text-gray-800 text-2xl font-medium">{data.title}</h2>
        <p className="text-gray-500 text-xl font-normal">{data.description}</p>
      </div>
      <div className="w-full">
        <img src={BgDot} alt="" className="mb-3 block w-full" />
        <Button className="w-full block text-center text-lg hover:bg-transparent hover:ring-2 hover:ring-soft-blue bg-soft-blue hover:bg-blue-700 transition-all ease text-white font-medium py-4 inset-0 outline-none hover:text-soft-blue px-5 rounded-md">
          {data.buttonLabel}
        </Button>
      </div>
    </div>
  );
};

export default ExtensionCards;
