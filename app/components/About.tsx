import Image from "next/image";
import heroImg from "@app/assets/bking.jpg";
import { AboutSection } from "./AboutSection";
import aboutInfo from "@app/utils/aboutInfo.json";

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
          {aboutInfo.map((item) => (
            <AboutSection icon={item.icon} title={item.title}>
              {item.description}
            </AboutSection>
          ))}
        </div>
      </div>
    </div>
  );
};
