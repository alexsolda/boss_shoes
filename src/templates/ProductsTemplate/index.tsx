import SectionTitle from "@/components/Typography/SectionTitle";
import Wrapper from "@/components/Wrapper";
import { ReactElement } from "react";

const ProductsTemplate = ():ReactElement => {
    return (
       <Wrapper className="xl:mt-24 mt-16">
         <SectionTitle text="Our Products" />
       </Wrapper>
    )
};

export default ProductsTemplate;