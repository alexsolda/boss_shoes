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
    updateQuantity: (id: number, type: 'plus' | 'minus') => void;
    removeTotalQuantity: (id: number) => void;
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
    },
    removeTotalQuantity: (id: number) => {
        const newData = get().cart.filter((prod) => prod.id !== id);

        set({cart: newData});
    },
    updateQuantity: (id: number, type: 'plus' | 'minus') => {
        const verifyQuantity = get().cart.findIndex((prod) => prod.id === id);

        if(get().cart[verifyQuantity].quantity === 1 && type === 'minus') {
            const newData = get().cart.filter((prod) => prod.id !== id);
            set({cart: newData});
        }else {
            const newData = get().cart.map((prod) => {
                if(prod.id === id) {
                    return {...prod, quantity: type === 'plus' ? prod.quantity + 1 : prod.quantity - 1}
                }

                return prod
            })

            set({cart: newData});
        }
    }
  }), {
    name: 'products'
  }))