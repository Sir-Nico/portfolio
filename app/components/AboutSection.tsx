import { Icon } from "@iconify/react";
import { ReactNode } from "react";

interface AboutSectionProps {
  icon: string;
  title: string;
  children: ReactNode;
}

export const AboutSection = ({ icon, title, children }: AboutSectionProps) => {
  return (
    <div className="rounded-md m-1 p-2 flex bg-no-repeat hover:bg-gradient-to-r from-blue-900 to-transparent bg-[length:0_100%] hover:bg-[length:100%_100%] transition-all duration-400">
      <div>
        <Icon icon={icon} className="size-15" />
      </div>
      <div className="flex-col m-2">
        <div className="font-bold text-xl">{title}</div>
        <div>{children}</div>
      </div>
    </div>
  );
};
