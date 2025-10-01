import { Icon } from "@iconify/react";
import { ReactNode } from "react"


interface AboutSectionProps {
  icon: string;
  title: string;
  children: ReactNode;
}

export const AboutSection = ({ icon, title, children }: AboutSectionProps) => {
  return (
    <div className="flex m-3">
      <div>
        <Icon icon={icon} className="size-15" />
      </div>
      <div className="flex-col m-2">
        <div className="font-bold text-xl">{title}</div>
        <div>{children}</div>
      </div>
    </div>
  );
}