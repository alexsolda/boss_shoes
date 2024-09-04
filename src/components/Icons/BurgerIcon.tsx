import Image from "next/image";
import { ReactElement } from "react";
import burgerICON from '/public/icons/burger-icon.svg'

const BurgerIcon = ():ReactElement => {
    return <Image 
    src={burgerICON.src}
    alt="Icone de listras que referência ao menu oculto"
    width={33}
    height={33}
    />    
}

export default BurgerIcon;