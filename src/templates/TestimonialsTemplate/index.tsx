import CardTestimonial from "@/components/Cards/CardTestimonial";
import SectionTitle from "@/components/Typography/SectionTitle";
import Wrapper from "@/components/Wrapper";
import { ReactElement } from "react";

const TestimonialsTemplate = ():ReactElement => {
    return (
        <Wrapper className="xl:mt-64 mt-16 flex flex-col gap-16">
              <div className="z-0 xl:bottom-[35%] bottom-[30%] absolute right-0 left-0 transform translate-y-full w-0 h-0 border-l-[180vh] border-l-blue-300 border-r-[180vh] border-r-transparent border-t-[200vh] border-t-transparent" />
            <div className="flex flex-col items-center gap-8">
                <SectionTitle text="What Our Happy Customer Says" />
                <p className=" relative z-50 xl:max-w-[60%] w-full text-2xl text-center">
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