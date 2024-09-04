import Image from "next/image";
import { ReactElement } from "react";
import searchICON from '/public/icons/search-icon.svg'

const SearchIcon = ():ReactElement => {
    return <Image 
    src={searchICON.src}
    alt="Icone de lupa para pesquisa"
    width={33}
    height={33}
    />    
}

export default SearchIcon;