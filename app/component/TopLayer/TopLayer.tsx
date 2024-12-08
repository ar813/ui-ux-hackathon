import Image from "next/image"
import Link from "next/link"

const TopLayer = () => {
  return (
    <div className="h-[36px] bg-[#F5F5F5] flex items-center md:justify-between justify-center md:px-[50px]">

      <Image src={"/images/nikeOne/Frame.svg"} alt="Frames" width={24} height={24} className="hidden md:block"></Image>
      <h1 className="text-[13px] font-[500] hidden md:block">Skip to main content</h1>

      <div className="flex gap-[15px] text-[11px] font-[500]">
        <h1><Link href={"/allProducts"}>Find a Store</Link></h1>
        <h1>|</h1>
        <h1><Link href={"/help"}>Help</Link></h1>
        <h1>|</h1>
        <h1><Link href={"/joinUs"}>Join Us</Link></h1>
        <h1>|</h1>
        <h1><Link href={"/signUp"}>Sign In</Link></h1>
      </div>
    </div>
  )
}

export default TopLayer