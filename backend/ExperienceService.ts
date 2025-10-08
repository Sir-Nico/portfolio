import { SkillItemType } from "@/types/Skills";

interface IExperienceService {
  getSkillInfo: () => SkillItemType[];
}

export const ExperienceService: IExperienceService = {
  getSkillInfo: () => {
    return [
      {
        title: "HTML",
        icon: "mdi:language-html5",
      },
      {
        title: "JavaScript",
        icon: "mdi:language-javascript",
      },
      {
        title: "Python",
        icon: "mdi:language-python",
      },
      {
        title: "Java",
        icon: "mdi:language-java",
      },
      {
        title: "Git",
        icon: "mdi:github",
      },
      {
        title: "APIs",
        icon: "mdi:api",
      },
      {
        title: "SQL",
        icon: "mdi:database",
      },
    ];
  },
};
