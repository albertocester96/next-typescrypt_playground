import Link from "next/link"
import { TiThList } from "react-icons/ti";

const NavBar = () => {

  const menu = [
    { label: "Dasboard", href: "/dashboard"},
    { label: "About", href: "/about"}
  ]

  return (
    <nav className="flex space-x-6 border-b mb-3 h-14 items-center">
      <Link href="/" className="ml-6"> <TiThList /> </Link>
      {menu.map(link => 
          <Link className="hover:text-black text-zinc-600"
            href={link.href}>
              {link.label}
          </Link>

        )
      }

    </nav>
  )
}

export default NavBar
