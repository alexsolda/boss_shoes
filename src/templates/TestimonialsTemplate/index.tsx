import CardTestimonial from "@/components/Cards/CardTestimonial";
import SectionTitle from "@/components/Typography/SectionTitle";
import Wrapper from "@/components/Wrapper";
import { ReactElement } from "react";

const TestimonialsTemplate = ():ReactElement => {
    return (
        <Wrapper className="xl:mt-64 mt-16 flex flex-col gap-16">
            <div className="flex flex-col items-center gap-8">
                <SectionTitle text="What Our Happy Customer Says" />
                <p className="xl:max-w-[50%] w-full text-2xl text-center">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
                </p>
            </div>
            <div className="grid xl:grid-cols-2 grid-cols-1 xl:gap-64 gap-8">
                <CardTestimonial />
                <CardTestimonial />
            </div>
        </Wrapper>
    )
};

export default TestimonialsTemplate;