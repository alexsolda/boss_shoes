import Image from "next/image";
import { ReactElement } from "react";
import valueICON from '/public/icons/exclusive3.png'

const ValueIcon = ():ReactElement => {
    return <Image 
    src={valueICON.src}
    alt="Icone de mão segurando um diamante"
    width={33}
    height={33}
    />    
}

export default ValueIcon;