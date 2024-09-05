import { ReactElement } from "react";

type ISectionTitleProps = {
    text: string;
    showDivisor?: boolean;
    align?: 'center' | 'right' | 'left';
}

const SectionTitle = ({text, showDivisor = true, align = 'center'}: ISectionTitleProps):ReactElement => {
    return (
        <div className={`${align === 'center' ? 'items-center' : ''} relative z-50 flex flex-col gap-8`}>
            <h2 className={`xl:max-w-[50%] w-full xl:text-7xl text-3xl font-bold text-${align}`}>{text}</h2>
            {showDivisor && <div className="h-[5px] w-[110px] bg-white self-center" />}
        </div>
    )
};

export default SectionTitle;