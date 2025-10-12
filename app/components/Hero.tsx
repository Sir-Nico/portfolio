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
    window.location.href = "https://www.linkedin.com/in/nicolay-rennemo/";
  };

  const goToGitHub = () => {
    window.location.href = "https://github.com/Sir-Nico";
  };

  const goToAbout = () => {
    window.location.href = "#about";
  };

  return (
    <div className="flex max-sm:flex-col w-4/5 items-center p-5 m-10 h-screen">
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
          <Button onClick={goToLinkedIn}>
            <Icon icon="mdi:linkedin" className="size-6" />
          </Button>
          <Button onClick={goToGitHub}>
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
      <div className="absolute left-[50%] top-[81%]">
        <Button onClick={goToAbout} className="bg-transparent hover:shadow-none hover:bg-transparent p-0 max-sm:hidden">
          <Icon icon="tabler:arrow-down" className="size-8" />
        </Button>
      </div>
    </div>
  );
};
