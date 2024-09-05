'use client'
import { Carousel } from "flowbite-react";
import { ReactElement } from "react";

const BannerTemplate = ():ReactElement => {
    return (
        <div className="h-[100vh]">
            <Carousel>
                <div className="relative h-full bg-red-500">
                    <p className="text-[560px] font-bold">BIGAIR</p>
                </div>
            </Carousel>
        </div>
    )
};

export default BannerTemplate;