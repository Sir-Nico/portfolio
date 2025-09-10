import Link from "next/link"

export const Navbar = () => {
    return (
    <div className="flex p-4">
        <p className="grow font-bold text-4xl">Portfolio</p>
        <div id="links" className="grow flex justify-end gap-10 text-2xl">
            <Link href={"#about"}>About</Link>
            <Link href={"#experience"}>Experience</Link>
            <Link href={"#projects"}>Projects</Link>
            <Link href={"#contact"}>Contact</Link>
        </div>
    </div>
    )
}