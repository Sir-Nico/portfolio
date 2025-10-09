import { SkillItemType } from "@/types/Skills";
import { ExperienceSectionType } from "@/types/Experience";

interface IExperienceService {
  getSkillInfo: () => SkillItemType[];
  getExperienceInfo: () => ExperienceSectionType[];
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
        icon: "simple-icons:mysql",
      },
      {
        title: "Scratch",
        icon: "simple-icons:scratch",
      },
    ];
  },
  getExperienceInfo: () => {
    return [
      {
        title: "Scratch Goat",
        icon: "simple-icons:scratch",
        duration: "2014 - present",
        description:
          "Jeg har et spill på scratch med nesten 700 visninger altså, ikke for å flexe for hardt, men det har også 33 likes og 24 stjerner. Yup, I'm kind of a big deal",
      },
    ];
  },
};
