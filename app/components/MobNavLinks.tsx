"use client"
import Link from "next/link"
import { FC, useState } from "react"
import { Icon } from "@iconify/react"

interface NavLinksProps {
  links: {
    href: string
    title: string
  }[]
}

const MobNavLinks: FC<NavLinksProps> = ({ links }) => {
  const [open, setOpen] = useState(true);

  return (
    <div id="links" className="grow flex justify-end gap-10 text-xl sm:hidden">
      <Icon icon={"tabler:menu-2"} className="size-10" onClick={() => setOpen(!open)}/>
      {open && (
      <div className="absolute top-20 flex flex-col gap-3 p-5 rounded-md from-blue-750 to-blue-950 bg-gradient-to-br text-right">
        {links.map((link) => {
          return (
            <Link href={link.href}>
              {link.title}
            </Link>
          )
        })}
      </div>
      )}
    </div>
  )
}


export default MobNavLinks