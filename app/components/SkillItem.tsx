import { Icon } from "@iconify/react";
import { FC } from "react";
import z from "zod";

const SkillItemSchema = z.object({
  icon: z.string(),
  title: z.string(),
});

export type SkillItemType = z.infer<typeof SkillItemSchema>;

export const SkillItem: FC<SkillItemType> = ({ icon, title }) => {
  return (
    <div className="p-2">
      <div className="bg-accent p-3 rounded-full">
        <Icon icon={icon} className="size-15" />
      </div>
      <div className="py-1 text-center">{title}</div>
    </div>
  );
};
