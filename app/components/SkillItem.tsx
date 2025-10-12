import { Icon } from "@iconify/react";
import { FC } from "react";
import { SkillItemType } from "@/types/Skills";


export const SkillItem: FC<SkillItemType> = ({ icon, title }) => {
  return (
    <div className="m-3 hover:font-extrabold transition-all duration-200">
      <div className="bg-accent p-3 rounded-full hover:shadow-glow shadow-accent/70 transition-all duration-200">
        <Icon icon={icon} className="size-15" />
      </div>
      <div className="py-1 text-center">{title}</div>
    </div>
  );
};
