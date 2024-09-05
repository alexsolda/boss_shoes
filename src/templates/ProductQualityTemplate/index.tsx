import LastingIcon from "@/components/Icons/LastingIcon";
import QualityIcon from "@/components/Icons/QualityIcon";
import ValueIcon from "@/components/Icons/ValueIcon";
import SectionTitle from "@/components/Typography/SectionTitle";
import Wrapper from "@/components/Wrapper";
import Image from "next/image";
import { ReactElement } from "react";

const ProductQualityTemplate = ():ReactElement => {
    return (
        <Wrapper className="xl:mt-64 mt-16">
            <section className="relative z-50 grid xl:grid-cols-2 grid-cols-1">
            <div className="flex flex-col xl:gap-16 gap-8">
                <SectionTitle text="Our Product Quality" showDivisor={false} align="left" />
                <div className="flex flex-col gap-8">
                    <div className="flex items-center gap-8">
                        <div className="p-3 rounded-2xl border-2 border-white">
                            <QualityIcon />
                        </div>
                        <div>
                            <p className="font-bold text-xl">Best quality shoes</p>
                            <p className="text-sm opacity-70">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod ...</p>
                        </div>
                    </div>

                    <div className="flex items-center gap-8">
                       <div className="p-3 rounded-2xl border-2 border-white">
                            <LastingIcon />
                        </div>
                        <div>
                            <p className="font-bold text-xl">Best quality shoes</p>
                            <p className="text-sm opacity-70">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod ...</p>
                        </div>
                    </div>

                    <div className="flex items-center gap-8">
                          <div className="p-3 rounded-2xl border-2 border-white">
                            <ValueIcon />
                        </div>
                        <div>
                            <p className="font-bold text-xl">Best quality shoes</p>
                            <p className="text-sm opacity-70">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod ...</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex items-center justify-center xl:mt-0 mt-16">
                <div className="bg-gradient-to-b from-blue-600 to-transparent relative xl:h-[600px] xl:w-[600px] w-[300px] h-[300px] rounded-full">
                    <div className="relative flex items-center justify-center xl:w-[858px] xl:h-[858px] w-[400px] h-[400px]">
                        <Image
                            src='/images/highlighted_product.png'
                            sizes="50vw"
                            style={{ objectFit: 'contain' }}
                            alt='Imagem de um tenis com um círculo ao fundo'
                            fill
                            className="absolute xl:mt-[-230px] xl:ml-[-220px] mt-[-100px] ml-[-90px]"
                        />
                    </div>
                </div>
            </div>
        </section>
        </Wrapper>
    )
};

export default ProductQualityTemplate;