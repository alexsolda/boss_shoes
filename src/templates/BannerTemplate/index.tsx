'use client'
import Button from "@/components/Button";
import { Carousel } from "flowbite-react";
import Image from "next/image";
import { ReactElement, useState } from "react";
import { MdArrowBackIosNew, MdArrowForwardIos } from "react-icons/md";

const carouselTheme = {
    "root": {
        "base": "relative flex-1",
        "leftControl": "hidden",
        "rightControl": "hidden"
    },
    "indicators": {
        "active": {
            "on": "bg-red-900"
        }
    }
};

const BannerTemplate = ():ReactElement => {

    const [activeIndex, setActiveIndex] = useState('0');

    const slides = [
        <div key='1' className="relative flex items-center justify-center h-full">
        <p className="xl:text-[560px] text-[100px] font-bold">BIGAIR</p>
        <div className="absolute xl:w-[1000px] xl:h-[1000px] w-[600px] h-[600px]">
            <Image
                src="/images/banner-shoes.png"
                sizes="50vw"
                style={{ objectFit: 'contain' }}
                alt="Detalhe da perna utilizando um modelo de tênis"
                fill
            />
        </div>
    </div>,
    <div key='2' className="relative flex items-center justify-center h-full">
    <p className="xl:text-[560px] text-[100px] text-blue-600 font-bold">BIGAIR</p>
    <div className="absolute xl:w-[1000px] xl:h-[1000px] w-[600px] h-[600px]">
        <Image
            src="/images/banner-shoes.png"
            sizes="50vw"
            style={{ objectFit: 'contain' }}
            alt="Detalhe da perna utilizando um modelo de tênis"
            fill
        />
    </div>
</div>

    ];

    return (
        <div className="relative h-[100vh] flex flex-col">
            <Carousel 
                onSlideChange={(index) => setActiveIndex(String(index + 1).padStart(2, '0')) }
                theme={carouselTheme} 
                slideInterval={2000} 
                leftControl="" 
                rightControl=""
                indicators={false}
            >
            {slides}
            </Carousel>
            <div className="relative xl:top-[-80px] top-0 flex xl:flex-row flex-col justify-between xl:gap-0 gap-8">
                <div className="xl:ml mx-6 font-bold flex flex-col xl:items-start items-center">
                    <p className="xl:text-5xl text-md">Walk Like a Boss</p>
                    <p className="text-sm xl:text-left text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>
                    <div className="mt-6">
                        <Button title="Explore" />
                    </div>
                </div>

                <div className="flex items-center justify-between xl:order-none order-first">
                    <div className="pr-16 cursor-pointer">
                        <MdArrowBackIosNew size={25} />
                    </div>
                    <div className="font-medium flex items-center justify-center gap-1">
                        <p className="text-2xl">{activeIndex}</p>
                        <p>/</p>
                        <p className="text-sm">{String(slides.length).padStart(2, '0')}</p>
                    </div>
                    <div className="pl-16 cursor-pointer">
                        <MdArrowForwardIos size={25} />
                    </div>
                </div>

                <div className="flex items-center xl:block relative flex flex-col gap-3 backdrop-blur-sm bg-white/10 p-8 xl:pl-32 pl-0 rounded-lg">
                    <div className="absolute xl:top-[-60px] xl:left-[-100px] top-1 left-1">
                        <div className="relative xl:block hidden">
                            <div className="absolute z-50 xl:top-[20px] xl:right-[40px] top-[5px] right-[5px] xl:w-[50px] xl:h-[50px] w-[500px] h-[500px]">
                                <Image
                                    src='/images/promo.png'
                                    sizes="50vw"
                                    style={{ objectFit: 'contain' }}
                                    alt='Imagem de um tênis'
                                    fill
                                />
                            </div>
                            <div className="relative mt-[20px] xl:w-[230px] xl:h-[230px] w-[80px] h-[80px]">
                                <Image
                                    src='/images/prod5.png'
                                    sizes="50vw"
                                    style={{ objectFit: 'contain' }}
                                    alt='Imagem de um tênis'
                                    fill
                                />
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-3">
                        <p className="xl:text-xl text-md font-bold">Our Trending Arrivals</p>
                        <Button title="Explore" />
                    </div>
                </div>
            </div>
            <a href="#infos" className="xl:block hidden group absolute bottom-0 left-[50%] flex h-[50px] w-[30px] border-4 border-white rounded-full p-1">
                <div className="group-hover:translate-y-5 transition bg-white h-[15px] w-[15px] rounded-full" />
            </a>
        </div>
    )
};

export default BannerTemplate;