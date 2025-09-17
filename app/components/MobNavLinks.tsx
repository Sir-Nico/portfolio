import Link from "next/link"
import { FC } from "react"

interface NavLinksProps {
    links: {
        href: string
        title: string
    }[]
}

const MobNavLinks: FC<NavLinksProps> = ({ links }) => {
    return (
        <div id="links" className="grow flex justify-end gap-10 text-xl sm:hidden">
            {links.map((link) => {
                return (
                    <Link href={link.href}>{link.title}</Link>
                )
            })}
        </div>
    )
}


export default MobNavLinks