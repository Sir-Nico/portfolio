import Image from "next/image";
import heroImg from "../assets/bking.jpg";
import { AboutSection } from "./AboutSection";

export const About = () => {
  return (
    <div
      id="about"
      className="flex flex-col w-4/5 bg-blue-950 p-5 m-10 rounded-xl"
    >
      <div>
        <p className="text-4xl font-bold p-4">About me</p>
      </div>
      <div className="flex items-center">
        <div className="">
          <Image
            src={heroImg}
            width={300}
            height={300}
            alt="An image of me"
            className="rounded-full m-5"
          />
        </div>
        <div className="px-3">
          <AboutSection
            icon={"tabler:pointer"}
            title={"Frontend Development"}
            description={
              "In the beginning God created the heavens and the earth."
            }
          />
          <AboutSection
            icon={"tabler:database"}
            title={"Backend Development"}
            description={
              "Now the earth was formless and empty, darkness was over the surface of the deep, and the Spirit of God was hovering over the waters."
            }
          />
          <AboutSection
            icon={"tabler:directions"}
            title={"Fullstack Development"}
            description={
              "And God said, “Let there be light,” and there was light."
            }
          />
        </div>
      </div>
    </div>
  );
};
