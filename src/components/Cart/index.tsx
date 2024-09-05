'use client'
import { ReactElement, useEffect, useState } from "react";
import Button from "../Button";
import BagIcon from "../Icons/BagIcon";
import { useProducts } from "@/stores/Products";
import ModalContainer from "../ModalContainer";
import CardCartProduct from "../Cards/CardCartProduct";
import { formatPrice } from "@/utils/formatters";

const Cart = ():ReactElement => {

    const {cart} = useProducts();

    const [isCartModalOpen, setIsCartModalOpen] = useState(false);
    const [totalCart, setTotalCart] = useState(0);

    useEffect(() => {
      if(cart.length > 0) {
        const total = cart.reduce((acc, curr) => acc + (curr.quantity * curr.price) , 0);

        setTotalCart(total)
      }
    }, [cart])

    return (
        <>
          <div className="relative">
            {cart.length > 0 && (
              <div className="flex items-center justify-center absolute bg-green-800 rounded-full w-[20px] h-[20px] right-0 bottom-0">
                <p className="text-xs">{cart.length}</p>
              </div>
            )}
            <Button icon={<BagIcon />} onlyIcon onClick={() => setIsCartModalOpen(true)} />
          </div>
          <ModalContainer title="Cart" isOpen={isCartModalOpen} onClose={() => setIsCartModalOpen(false)}>
            <div className="relative">
              {cart.length === 0 ? (
                <p className="text-black-900 text-center">Empty cart</p>
              ) : (
                <div className="flex flex-col">
                  {cart.map((prod) => (
                    <CardCartProduct 
                      id={prod.id} 
                      name={prod.name} 
                      description={prod.description} 
                      image={prod.image} 
                      price={prod.price} 
                      quantity={prod.quantity} 
                    />
                  ))}
                  <div className="w-full mt-6 flex items-center justify-between">
                    <div className="flex items-center gap-3 text-black-900 fotn-sm">
                      <p>Total:</p>
                      <p>{formatPrice(totalCart)}</p>
                    </div>
                    <Button outlined={false} title="Comprar" />
                  </div>
                </div>
              )}
            </div>
          </ModalContainer>
        </>
    )
};

export default Cart;