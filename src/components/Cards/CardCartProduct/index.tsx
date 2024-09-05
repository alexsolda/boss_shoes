'use client'
import { formatPrice } from "@/utils/formatters";
import Image from "next/image";
import { ReactElement, useEffect, useState } from "react";
import { IoCloseOutline } from 'react-icons/io5'

type ICardCartProductProps = {
    name: string;
    description: string;
    image: string;
    price: number;
    quantity: number;
}

const CardCartProduct = ({name, description, image, price, quantity}: ICardCartProductProps):ReactElement => {

    const [totalPrice, setTotalPrice] = useState(0);

    useEffect(() => {
        if(quantity) {
            const total = quantity * price;
            setTotalPrice(total);
        }
    }, [quantity]);

    return (
       <div className="max-h-[100px] overflow-scroll">
         <div className="flex items-center gap-3 border-b border-gray-200 py-1">
             <div className="relative xl:w-[60px] xl:h-[60px] w-[300px] h-[300px]">
                <Image
                    src={image}
                    sizes="50vw"
                    style={{ objectFit: 'contain' }}
                    alt={`${name} - ${description}`}
                    fill
                 />
            </div>
            <div className="flex flex-col gap-1 w-full text-black-900 font-light text-xs">
                <div className="flex items-center justify-between">
                    <p>{name}</p>
                </div>
                <div className="flex items-center gap-3">
                    <div className="cursor-pointer p-1 shadow-lg">-</div>
                    <p className="font-sm">{String(quantity)}</p>
                    <div className="cursor-pointer p-1 shadow-lg">+</div>
                </div>
            </div>
            <p className="font-bold text-primary text-sm">{formatPrice(totalPrice)}</p>
            <div className="text-red-600 cursor-pointer">
                <IoCloseOutline size={15} />
            </div>
        </div>
       </div>
    )
};

export default CardCartProduct;