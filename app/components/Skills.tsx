import { ExperienceService } from "@/backend/ExperienceService";
import { SkillItem, SkillItemType } from "./SkillItem";

export const Skills = () => {
  const data = ExperienceService.getSkillInfo();

  return (
    <div>
      <div className="inline-grid grid-cols-4">
        {data.map((item: SkillItemType) => (
          <SkillItem key={item.title} icon={item.icon} title={item.title} />
        ))}
      </div>
    </div>
  );
};
