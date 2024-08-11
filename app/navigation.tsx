"use client"

import Link from "next/link"
import { TiThList } from "react-icons/ti";
import { usePathname } from "next/navigation";
import classNames from "classnames";


const NavBar = () => {

  const currenPath = usePathname()

  const menu = [
    { label: "Dasboard", href: "/dashboard"},
    { label: "Issue", href: "/issue"}
  ]

  return (
    <nav className="flex space-x-6 border-b mb-3 h-14 items-center">
      <Link href="/" className="ml-6"> <TiThList /> </Link>
      {menu.map(link => 
          <Link className= {classNames({
            "text-zinc-900": link.href === currenPath,
            "text-zinc-500": link.href !== currenPath,
            "hover:text-zinc-800 transition-colors": true
          })}
            key={link.href}
            href={link.href}>
              {link.label}
          </Link>

        )
      }

    </nav>
  )
}

export default NavBar
