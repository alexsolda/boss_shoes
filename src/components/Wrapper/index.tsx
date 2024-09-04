import { ReactElement, ReactNode } from "react";

type IWrapperProps = {
    children: ReactNode;
    className?: string;
}

const Wrapper = ({className = '', children}: IWrapperProps):ReactElement => {
    return <div className={`${className} xl:mx-userView mx-3`}>{children}</div>
};

export default Wrapper;