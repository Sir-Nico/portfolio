import { Icon } from "@iconify/react";
import { FC } from "react";
import z from "zod";

const AboutSectionSchema = z.object({
  icon: z.string(),
  title: z.string(),
  description: z.string(),
});

export type AboutSectionType = z.infer<typeof AboutSectionSchema>;

export const AboutSection: FC<AboutSectionType> = ({ icon, title, description }) => {
  return (
    <div className="rounded-md ml-5 p-2 flex bg-no-repeat hover:bg-gradient-to-r from-blue-900 to-transparent bg-[length:0_100%] hover:bg-[length:100%_100%] transition-all duration-400">
      <div className="items-center">
        <Icon icon={icon} className="size-15" />
      </div>
      <div className="flex-col m-2">
        <div className="font-bold text-xl">{title}</div>
        <div>{description}</div>
      </div>
    </div>
  );
};
