import { ReactElement } from "react";
import Logo from "../Logo";
import Link from "next/link";
import SearchIcon from "../Icons/SearchIcon";
import BurgerIcon from "../Icons/BurgerIcon";
import Cart from "../Cart";
import Dropdown from "../Dropdown";

const Header = ():ReactElement => {
    return (
        <header className="flex items-center justify-between absolute right-0 left-0 mt-[43px] z-50">
            <div className="xl:ml-userView ml-3">
                <Logo />
            </div>
            <div className="backdrop-blur-sm bg-white/10 xl:py-8 py-4 rounded-l-full">
                <nav className="flex items-center justify-between gap-14 px-userView font-medium">
                    <div className="xl:flex items-center jusitfy-between hidden gap-14 ">
                    <Link passHref href="#">
                        <p>HOME</p>
                    </Link>
                    <Dropdown title="OUR PRODUCTS" menus={['Menu 1', 'Menu 2', 'Menu 3']} />
                    </div>
                    <div className="xl:block hidden">
                        <SearchIcon />
                    </div>
                    <Cart />
                    <BurgerIcon />
                </nav>
            </div>
        </header>
    )
};

export default Header;