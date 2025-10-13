import Image from "next/image";
import heroImg from "@app/assets/boat.jpg";
import { AboutSection } from "./AboutSection";
import { AboutSectionType } from "@/types/About";
import { AboutService } from "@/backend/AboutService";

export const About = () => {
  const data = AboutService.getAboutInfo();

  return (
    <div
      id="about"
      className="flex flex-col w-4/5 max-sm:w-full bg-secondary p-5 scroll-m-45 m-10 rounded-xl"
    >
      <div>
        <p className="text-4xl font-bold p-4">More about me</p>
      </div>
      <div className="flex max-sm:flex-col items-center">
          <Image
            src={heroImg}
            width={300}
            height={300}
            alt="An image of me"
            className="rounded-full m-5"
          />
        <div className="px-3">
          {data.map((item: AboutSectionType) => (
            <AboutSection
              key={item.title}
              icon={item.icon}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
