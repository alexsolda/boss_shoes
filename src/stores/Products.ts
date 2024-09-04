import { IMockProducts, mockProducts } from '@/utils/mockProducts';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface ICartData extends IMockProducts  {
    quantity: number;
}

type IProductsState = {
    products: IMockProducts[];
    cart: ICartData[];
    addCart: (id: number) => void;
};

export const useProducts = create<IProductsState>()(persist((set, get) => ({
    products: mockProducts,
    cart: [],
    addCart: (id) => {
       const productExists = get().cart.findIndex((prod) => prod.id === id);

       if(productExists !== -1) {
        const newData = get().cart.map((prod) => {
            if(prod.id === id) {
                return {...prod, quantity: prod.quantity + 1}
            }

            return prod
        })

        set({cart: newData})
       }else {
        const productToAdd = get().products.filter((prod) => prod.id === id);
        const newData = [...get().cart, {...productToAdd[0], quantity: 1}];
        set({cart: newData})
       }
    }
  }), {
    name: 'products'
  }))