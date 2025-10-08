import { AboutSectionType } from "@/types/About";

interface IAboutService {
  getAboutInfo: () => AboutSectionType[];
}

export const AboutService: IAboutService = {
  getAboutInfo: () => {
    return [
      {
        title: "Who am I?",
        icon: "tabler:pointer",
        description:
          "I am a 19 year old student and aspiring developer, with a passion for learning and creating. I've been coding since 10, and always try to improve day by day.",
      },
      {
        title: "Education",
        icon: "tabler:database",
        description:
          "I am currently pursuing a Bachelor's degree in Computer Science (Informatikk) at NTNU, as well as having completed an IT-relevant high school education.",
      },
      {
        title: "Skills",
        icon: "tabler:directions",
        description:
          "I have experience with both frontend and backend development, and I enjoy working on all aspects of web applications.",
      },
    ];
  },
};
