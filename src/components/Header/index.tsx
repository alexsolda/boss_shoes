import { ReactElement } from "react"
import Logo from "../Logo"
import Link from "next/link"
import SearchIcon from "../Icons/SearchIcon"
import BagIcon from "../Icons/BagIcon"
import BurgerIcon from "../Icons/BurgerIcon"

const Header = ():ReactElement => {
    return (
        <header className="flex items-center justify-between mt-[43px]">
            <div className="xl:ml-userView ml-3">
                <Logo />
            </div>
            <div className="backdrop-blur-sm bg-white/30 xl:py-8 py-4 rounded-l-full">
                <nav className="flex items-center justify-between gap-14 px-userView font-light">
                    <div className="xl:flex items-center jusitfy-between hidden gap-14 ">
                    <Link passHref href="#">
                        <p>HOME</p>
                    </Link>
                    <p>OUR PRODUCTS</p>
                    </div>
                    <SearchIcon />
                    <BagIcon />
                    <BurgerIcon />
                </nav>
            </div>
        </header>
    )
}

export default Header