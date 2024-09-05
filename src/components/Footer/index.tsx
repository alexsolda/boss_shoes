import { ReactElement } from "react";
import Logo from "../Logo";
import Link from "next/link";

const Footer = ():ReactElement => {
    return (
        <footer className="relative z-50 xl:mt-32 mt-16 bg-black-900 p-userView flex flex-col items-center gap-16">
            <Logo />
            <nav className="w-full flex xl:flex-row flex-col items-center justify-center xl:gap-24 gap-3">
                <Link passHref href="#">
                    <p>Terms of Service</p>
                </Link>
                <Link passHref href="#">
                    <p>Privacy Policy</p>
                </Link>
                <Link passHref href="#">
                    <p>Security</p>
                </Link>
                <Link passHref href="#">
                    <p>Faq</p>
                </Link>
            </nav>
            <nav className="w-full grid xl:grid-cols-3 grid-cols-1 xl:gap-0 gap-6">
                <p className="xl:text-left text-center">English</p>
                <div className="flex flex-1 items-center justify-center gap-8 font-bold">
                    <a href="#" target="_blank">FB</a>
                    <a href="#" target="_blank">TW</a>
                    <a href="#" target="_blank">LI</a>
                    <a href="#" target="_blank">IN</a>
                </div>
                <p className="xl:text-right text-center">
                    BOSS SHOES © All right Reserved
                </p>
            </nav>
        </footer>
    )
}

export default Footer;