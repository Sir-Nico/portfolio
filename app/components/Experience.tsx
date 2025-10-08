import Image from "next/image";
import { ExperienceSection } from "./ExperienceSection";
import { Skills } from "./Skills";

export const Experience = () => {
  return (
    <div id="experience" className="flex flex-col w-4/5">
      <div>
        <p className="text-2xl font-bold p-4">Experience</p>
      </div>
      <div className="flex">
        <div className="grow">
          <Skills />
        </div>
        <div className="px-3 grow space-y-5">
          <ExperienceSection />
        </div>
      </div>
    </div>
  );
};
