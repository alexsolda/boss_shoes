import CardProduct from "@/components/Cards/CardProduct";
import SectionTitle from "@/components/Typography/SectionTitle";
import Wrapper from "@/components/Wrapper";
import { mockProducts } from "@/utils/mockProducts";
import { ReactElement } from "react";

const ProductsTemplate = ():ReactElement => {
    return (
       <Wrapper className="xl:mt-24 mt-16">
         <SectionTitle text="Our Products" />
         <div className="mt-16 grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 items-stretch xl:gap-24 gap-8">
            {mockProducts.map((prod) => (
              <CardProduct 
                key={`key-${prod.id}`}
                id={prod.id}
                name={prod.name}
                description={prod.description}
                image={prod.image}
                price={prod.price}
              />
            ))}
         </div>
       </Wrapper>
    )
};

export default ProductsTemplate;