import { ReactElement } from "react";

type ISectionTitleProps = {
    text: string;
}

const SectionTitle = ({text}: ISectionTitleProps):ReactElement => {
    return (
        <div className="flex flex-col gap-3 items-center justify-center">
            <h2 className="xl:text-7xl text-3xl font-bold text-center">{text}</h2>
            <div className="h-[5px] w-[110px] bg-white" />
        </div>
    )
};

export default SectionTitle;