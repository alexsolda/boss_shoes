'use client'
import Button from "@/components/Button";
import BagIcon from "@/components/Icons/BagIcon";
import { useProducts } from "@/stores/Products";
import { IMockProducts } from "@/utils/mockProducts";
import Image from "next/image";
import { ReactElement } from "react";

const CardProduct = ({id, name, description, image, price}: IMockProducts):ReactElement => {

    const {addCart} = useProducts();

    return (
        <div className="group bg-gradient-to-t from-white/10 to-transparent shadow-lg rounded-3xl shadow-md xl:p-16 p-8">
           <div className="flex flex-col items-center">
           <div className="relative xl:w-[461px] xl:h-[461px] w-[300px] h-[300px]">
                <Image
                    src={image}
                    sizes="50vw"
                    style={{ objectFit: 'contain' }}
                    alt={`${name} - ${description}`}
                    fill
                    className="mt-[-30px] group-hover:scale-110 group-hover:-translate-y-5 transition"
                 />
            </div>
            <div className="mt-[-100px] xl:max-w-[70%] w-full text-center flex flex-col items-center justify-center">
                <p className="text-3xl font-bold">{name}</p>
                <p className="text-sm mt-3">{description}</p>
            </div>
           </div>
            <div className="flex items-center justify-between mt-8">
                <p className="text-2xl font-semibold">Rs. 3500,00</p>
                <Button icon={<BagIcon />} onClick={() => addCart(id)} />
            </div>
        </div>
    )
};

export default CardProduct;