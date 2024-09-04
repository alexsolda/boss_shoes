import Image from "next/image";
import { ReactElement } from "react";
import bagICON from '/public/icons/bag-icon.svg'

const BagIcon = ():ReactElement => {
    return <Image 
    src={bagICON.src}
    alt="Icone de sacola de compras"
    width={33}
    height={33}
    />    
}

export default BagIcon