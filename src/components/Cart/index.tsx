'use client'
import { ReactElement } from "react";
import Button from "../Button";
import BagIcon from "../Icons/BagIcon";
import { useProducts } from "@/stores/Products";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";

const Cart = ():ReactElement => {

    const {cart} = useProducts();

    return (
        <Menu>
        <MenuButton className='relative'>
            {cart.length > 0 && (
            <div className="flex items-center justify-center absolute bg-green-800 rounded-full w-[20px] h-[20px] right-0 bottom-0">
                <p className="text-xs">{cart.length}</p>
            </div>
            )}
            <Button icon={<BagIcon />} onlyIcon />
        </MenuButton>

        <MenuItems
          transition
          anchor="bottom end"
          className='mt-3 bg-white rounded-lg'
        >
          <MenuItem>
            <p className="w-[200px]">opa</p>
          </MenuItem>
        </MenuItems>
      </Menu>
    )
};

export default Cart;