import Image from "next/image";
import { ReactElement } from "react";
import avatarICON from '/public/icons/avatar.png';

const AvatarIcon = ():ReactElement => {
    return <Image 
    src={avatarICON.src}
    alt="Icone com a ilustração de uma pessoa com um fundo vermelho."
    width={55}
    height={55}
    />    
}

export default AvatarIcon;