import Image from "next/image";
import { ReactElement } from "react";

type ICardInfo = {
    title: string;
    description: string;
    icon: string;
}

const CardInfo = ({title, description, icon}: ICardInfo):ReactElement => {
    return (
        <div className="backdrop-blur-sm bg-white/10 border border-white rounded-2xl flex xl:flex-row flex-col items-center gap-6 xl:p-10 p-8">
            <Image 
                src={icon}
                alt="Icone de sacola de compras"
                width={37}
                height={37}
            /> 
            <div className="flex flex-1 flex-col items-center justify-center text-center xl:gap-0 gap-3">
                <p className="font-bold">{title}</p>
                <p className="opacity-80 text-sm">{description}</p>
            </div>
        </div>
    )
};

export default CardInfo;