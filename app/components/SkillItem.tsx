import { Icon } from "@iconify/react";
import { FC } from "react";
import { SkillItemType } from "@/types/Skills";


export const SkillItem: FC<SkillItemType> = ({ icon, title }) => {
  return (
    <div className="m-3">
      <div className="bg-accent p-3 rounded-full">
        <Icon icon={icon} className="size-15" />
      </div>
      <div className="py-1 text-center">{title}</div>
    </div>
  );
};
