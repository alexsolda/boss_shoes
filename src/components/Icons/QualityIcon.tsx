import Image from "next/image";
import { ReactElement } from "react";
import qualityICON from '/public/icons/exclusive1.png'

const QualityIcon = ():ReactElement => {
    return <Image 
    src={qualityICON.src}
    alt="Icone de medalha"
    width={33}
    height={33}
    />    
}

export default QualityIcon;