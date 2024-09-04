import Image from "next/image";
import { ReactElement } from "react";
import logoIMG from '/public/images/logo.png'

const Logo = ():ReactElement => {
    return (
        <div className="relative xl:w-[96px] xl:h-[42px] w-[80px] h-[26px]">
        <Image
          src={logoIMG.src}
          sizes="50vw"
          style={{ objectFit: 'contain' }}
          alt="Logomarca com a escrita: Boss Shoes"
          fill
        />
      </div>
    )
}

export default Logo;