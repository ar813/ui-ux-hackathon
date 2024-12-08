import Image from "next/image"
import { MdOutlineShoppingCart } from "react-icons/md";

const page = () => {
    return (
        <div className="p-[30px] lg:pb-[200px] md:p-[80px] gap-[80px] grid lg:grid-cols-2">
            <Image src={`/images/nikeOne/allProducts/3.svg`} alt="Frames" width={60} height={20} className="w-full" ></Image>
            <div className="flex flex-col gap-[20px] lg:w-[367px] lg:ml-[60px]">
                <h1 className="md:text-[48px] text-[35px] font-[500]">Nike Air Force 1 <br /> PLT.AF.ORM</h1>
                <p className="text-[15px]">Turn style on its head with this crafted take on the Air Jordan 1 Mid. Its &quot;inside out&quot;-inspired construction, including unique layering and exposed foam accents, ups the ante on this timeless Jordan Brand silhouette. Details like the deco stitching on the Swoosh add coveted appeal, while the unexpected shading, rich mixture of materials and aged midsole aesthetic give this release an artisan finish.</p>
                <h1 className="md:text-[36px] text-[30px] font-[500]">₹ 8 695.00</h1>
                <button className={`px-[22px] py-[8px] bg-black text-[white] hover:text-[black] hover:bg-white hover:border-[1px] hover:border-black rounded-[30px] w-[174px]`}> <MdOutlineShoppingCart className="text-[24px] mr-[10px] inline" />Add To Card</button>

            </div>
        </div>
    )
}

export default page