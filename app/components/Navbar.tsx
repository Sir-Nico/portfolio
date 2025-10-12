import NavLinks from "./NavLinks";
import MobNavLinks from "./MobNavLinks";
import Link from "next/link";

const navLinks = [
  {
    title: "About",
    href: "#about",
  },
  {
    title: "Experience",
    href: "#experience",
  },
  {
    title: "Projects",
    href: "#projects",
  },
  {
    title: "Contact",
    href: "#contact",
  },
];

export const Navbar = () => {
  return (
    <div className="flex p-10 w-full fixed top-0 z-50 bg-background">
      <Link href="/" className="grow font-bold text-4xl text-accent hover:text-accent/80 hover:font-extrabold transition-all duration-200">Nicolay B.</Link>
      <NavLinks links={navLinks} />
      <MobNavLinks links={navLinks} />
    </div>
  );
};
