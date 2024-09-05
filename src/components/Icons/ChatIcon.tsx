import Image from "next/image";
import { ReactElement } from "react";
import chatICON from '/public/icons/chat-icon.png'

const ChatIcon = ():ReactElement => {
    return <Image 
    src={chatICON.src}
    alt="Icone de balão com três pontos dentro"
    width={55}
    height={55}
    />    
}

export default ChatIcon;