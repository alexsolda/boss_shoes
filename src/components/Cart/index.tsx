'use client'
import { ReactElement } from "react";
import Button from "../Button";
import BagIcon from "../Icons/BagIcon";
import { useProducts } from "@/stores/Products";

const Cart = ():ReactElement => {

    const {cart} = useProducts();

    return (
       <div className="relative">
            {cart.length > 0 && (
            <div className="flex items-center justify-center absolute bg-green-800 rounded-full w-[20px] h-[20px] right-0 bottom-0">
                <p className="text-xs">{cart.length}</p>
            </div>
            )}
            <Button icon={<BagIcon />} onlyIcon />
       </div>
    )
};

export default Cart;