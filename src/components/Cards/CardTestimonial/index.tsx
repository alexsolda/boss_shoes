import AvatarIcon from "@/components/Icons/AvatarIcon";
import ChatIcon from "@/components/Icons/ChatIcon";
import { ReactElement } from "react";

const CardTestimonial = ():ReactElement => {
    return (
        <div className="flex flex-col gap-8 backdrop-blur-sm bg-white/10 rounded-2xl p-16">
            <div className="flex items-center justify-between">
                <AvatarIcon />
                <ChatIcon />
            </div>
            <p className="text-justify">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
            </p>
            <div className="flex flex-col">
                <p className="font-bold text-2xl">Ajex Vento</p>
                <p className="text-sm opacity-80">Happy Customer</p>
            </div>
        </div>
    )
};

export default CardTestimonial;