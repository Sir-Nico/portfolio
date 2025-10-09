import { ExperienceService } from "@/backend/ExperienceService";

import { ExperienceSection } from "./ExperienceSection";
import { ExperienceSectionType } from "@/types/Experience";

import { SkillItem } from "./SkillItem";
import { SkillItemType } from "@/types/Skills";

export const Experience = () => {
  const skillData = ExperienceService.getSkillInfo();
  const experienceData = ExperienceService.getExperienceInfo();

  return (
    <div id="experience" className="flex flex-col sm:w-4/5 max-sm:w-full">
      <div>
        <p className="text-2xl font-bold p-4">Experience</p>
      </div>
      <div className="flex max-sm:flex-col w-full">
        <div className="sm:grow sm:w-1/2">
          <div className="inline-grid md:grid-cols-4 max-md:grid-cols-3 max-sm:grid-cols-2">
            {skillData.map((item: SkillItemType) => (
              <SkillItem key={item.title} icon={item.icon} title={item.title} />
            ))}
          </div>
        </div>
        <div className="px-3 sm:grow sm:w-1/2 space-y-5">
          {experienceData.map((item: ExperienceSectionType) => (
            <ExperienceSection
              key={item.title}
              title={item.title}
              icon={item.icon}
              duration={item.duration}
              description={item.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
