import SectionTitle from "@/components/Typography/SectionTitle";
import { ReactElement } from "react";

const DeploimentsTemplate = ():ReactElement => {
    return (
        <div>
            <div>
                <SectionTitle text="What Our Happy Customer Says" />
                    <p className="font-lg text-center">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
                    </p>
            </div>
        </div>
    )
};

export default DeploimentsTemplate;