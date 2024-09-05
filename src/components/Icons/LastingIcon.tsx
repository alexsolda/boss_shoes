import Image from "next/image";
import { ReactElement } from "react";
import lastingICON from '/public/icons/exclusive2.png'

const LastingIcon = ():ReactElement => {
    return <Image 
    src={lastingICON.src}
    alt="Icone de um braço simulando força"
    width={33}
    height={33}
    />    
}

export default LastingIcon;