import { Icon } from "@iconify/react";
import { FC } from "react";
import { ExperienceSectionType } from "@/types/Experience";

export const ExperienceSection: FC<ExperienceSectionType> = ({
  title,
  icon,
  duration,
  description,
}) => {
  return (
    <div className="flex bg-gradient-to-r from-accent to-transparent p-2 items-center rounded-2xl">
      <div className=" pl-3">
        <Icon icon={icon} className="size-15"></Icon>
      </div>
      <div className="p-2">
        <div className="text-2xl font-bold">{title}</div>
        <div className="text-xs">{duration}</div>
        <div className="text">{description}</div>
      </div>
    </div>
  );
};
