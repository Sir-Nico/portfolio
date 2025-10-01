import { Icon } from "@iconify/react";


interface AboutSectionProps {
  icon: string;
  title: string;
  description: string;
}

export const AboutSection = ({ icon, title, description }: AboutSectionProps) => {
  return (
    <div className="flex m-3">
      <div>
        <Icon icon={icon} className="size-15" />
      </div>
      <div className="flex-col m-2">
        <div className="font-bold text-xl">{title}</div>
        <div>{description}</div>
      </div>
    </div>
  );
}