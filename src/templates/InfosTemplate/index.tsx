import CardInfo from "@/components/Cards/CardInfo";
import Wrapper from "@/components/Wrapper";
import { mockHomeInfos } from "@/utils/mockHomeInfos";
import { ReactElement } from "react";

const InfosTemplate = ():ReactElement => {
    return (
       <Wrapper className="xl:mt-24 mt-16">
         <div id='infos' className="backdrop-blur-sm grid grid-cols-1 xl:grid-cols-3 xl:gap-56 gap-16 items-stretch xl:p-16 p-8 rounded-2xl">
            {mockHomeInfos.map((info) => (
                <CardInfo 
                    key={`key-${info.id}`} 
                    title={info.title}
                    description={info.description}
                    icon={info.icon}
                />
            ))}
        </div>
       </Wrapper>
    )
};

export default InfosTemplate;