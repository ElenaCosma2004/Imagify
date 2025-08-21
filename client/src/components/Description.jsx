import React from "react";
import { assets } from "../assets/assets";

const Description = () => {
  return (
    <div className="flex flex-col items-center justify-center my-24 p-6 md:px-28">
      <h1 className="text-3xl sm: text-4xl font-semibold mb-2">
        Create AI Images
      </h1>
      <p
        className="text-gray-500
       mb-8"
      >
        Turn your imagination into visuals
      </p>
      <div className=" flex flex-col gap-5 md:gap-14 md:flex-row items-center">
        <img
          src={assets.sample_img_1}
          alt=""
          className="w-80 xl:w-96 rounded-lg"
        ></img>
        <div>
          <h2 className="text-3xl font-medium max-w-lg mb-4">
            Introducing the AI-Powered Text to Image Generator
          </h2>
          <p className="text-gray-500 mb-4">
            Easily bring your ideas to life with our free AI image generator.
            Wheter you need stunning visuals for your blog, social media, or
            marketing materials, our tool can help you create unique images in
            seconds. Just type in your text prompt, and watch as the AI
            generates a beautiful image that matches your description.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Description;
