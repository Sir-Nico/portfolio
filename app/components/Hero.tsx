"use client";

import Image from "next/image";
import heroImg from "../assets/sivertbbdahls.png";
import Button from "./Button";
import { Icon } from "@iconify/react";

export const Hero = () => {
  const goToContact = () => {
    window.location.href = "#contact";
  };

  const goToLinkedIn = () => {
    open("https://www.linkedin.com/in/nicolay-rennemo/", "_blank");
  };

  const goToGitHub = () => {
    open("https://github.com/Sir-Nico", "_blank");
  };

  const goToAbout = () => {
    window.location.href = "#about";
  };

  return (
    <div className="flex max-sm:flex-col w-4/5 items-center  h-screen">
      <div className="grow space-y-5 max-sm:pt-45">
        <p className="text-6xl font-bold">
          Hi, I'm{" "}
          <span className="text-6xl font-roboto_m font-bold text-accent animate-bounce">
            Nico
          </span>
          !
        </p>
        <p>Student at NTNU (BSc. Informatikk) and software developer</p>
        <div className="flex space-x-2">
          <Button onClick={goToContact}>Contact Me</Button>
          <Button onClick={goToLinkedIn} title="Check out my LinkedIn!">
            <Icon icon="mdi:linkedin" className="size-6" />
          </Button>
          <Button onClick={goToGitHub} title="Check out my GitHub!">
            <Icon icon="mdi:github" className="size-6" />
          </Button>
        </div>
      </div>
      <div className="grow max-sm:pt-5">
        <Image
          src={heroImg}
          width={400}
          height={400}
          alt="An image of me"
          className="rounded-xl"
        />
      </div>
      <div className="absolute left-1/2 -translate-x-1/2 top-[81%]">
        <Button
          onClick={goToAbout}
          className="bg-transparent hover:shadow-none hover:bg-transparent max-sm:hidden"
        >
          <Icon icon="tabler:arrow-down" className="size-8" />
        </Button>
      </div>
    </div>
  );
};
