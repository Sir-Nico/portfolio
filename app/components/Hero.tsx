"use client";

import Image from "next/image";
import heroImg from "../assets/sivertbbdahls.png";
import Button from "./Button";

export const Hero = () => {
  const foo = () => {
    console.log("Sigma sigma on the wall, who is the skibidiest of them all?");
  };

  return (
    <div className="flex w-1/2 items-center p-5">
      <div className="grow space-y-5">
        <p className="text-6xl font-bold bg-gradient-to-b from-white to-gray-600 bg-clip-text text-transparent">
          John Doe
        </p>
        <p>Lorem ipsum</p>
        <Button onClick={foo}>Contact Me</Button>
      </div>
      <div className="grow">
        <Image
          src={heroImg}
          width={400}
          height={400}
          alt="An image of me"
          className="rounded-xl"
        />
      </div>
    </div>
  );
};
