import NavLinks from "./NavLinks";
import MobNavLinks from "./MobNavLinks";

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
    <div className="flex p-4 w-full">
      <p className="grow font-bold text-4xl">John Doe</p>
      <NavLinks links={navLinks} />
      <MobNavLinks links={navLinks} />
    </div>
  );
};
