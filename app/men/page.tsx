import Image from "next/image"
import { FaRegHeart } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";
import Button from "../component/Button/Button";
import Link from "next/link";

const page = () => {
    return (
        <div className="p-[20px] md:p-[50px] lg:px-[100px] lg:pb-[10px] lg:pt-[50px]">
            <div className="lg:flex">
                <div className="lg:w-[75%]">
                    <div className="p-[20px] bg-[#E5E5E5]">
                        <h1 className="text-[13px] font-[500] mb-[5px]">Free Delivery</h1>
                        <p className="text-[11px]">Applies to orders of ₹ 14 000.00 or more. <span className="sm:ml-[10px] underline sm:inline block"><Link href={"/checkout"}>View details</Link></span></p>
                    </div>
                    <h1 className="text-[22px] font-[500] my-[20px]">Bag</h1>
                    <div className="flex flex-col gap-[30px] sm:flex-row pb-[20px] border-b-[1px] border-b-[#ccc]">
                        <Image src={"/images/nikeOne/boy.svg"} alt="boy" width={60} height={20} className="w-full sm:w-[150px] sm:h-[150px]"></Image>
                        <div className="flex flex-col gap-[10px]">
                            <div className="flex justify-between items-center">
                                <h1>Nike Dri-FIT ADV TechKnit Ultra</h1>
                                <h1 className="hidden sm:block sm:ml-[60px]">MRP: ₹ 3 895.00</h1>
                            </div>
                            <div className="text-[gray] flex flex-col gap-[5px]">
                                <h1>Men&apos;s Short-Sleeve Running Top</h1>
                                <h1>Ashen Slate/Cobalt Bliss</h1>
                                <h1>Size L <span className="ml-[50px]">Quantity 1</span></h1>
                            </div>
                            <div className="flex gap-[10px] text-[24px] mt-[20px]">
                                <FaRegHeart />
                                <RiDeleteBin6Line />
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-[30px] sm:flex-row mt-[40px] pb-[20px] border-b-[1px] border-b-[#ccc]">
                        <Image src={"/images/nikeOne/shoesTwo.svg"} alt="boy" width={60} height={20} className="w-full sm:w-[150px] sm:h-[150px]"></Image>
                        <div className="flex flex-col gap-[10px]">
                            <div className="flex justify-between items-center">
                                <h1>Nike Air Max 97 SE</h1>
                                <h1 className="hidden sm:block sm:ml-[60px]">MRP: ₹ 16 995.00</h1>
                            </div>
                            <div className="text-[gray] flex flex-col gap-[5px]">
                                <h1>Men&apos;s Shoes</h1>
                                <h1>Light</h1>
                                <h1>Size 8 <span className="ml-[50px]">Quantity 1</span></h1>
                            </div>
                            <div className="flex gap-[10px] text-[24px] mt-[20px]">
                                <FaRegHeart />
                                <RiDeleteBin6Line />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="lg:w-[25%] lg:ml-[30px] mt-[50px] lg:mt-[0px]">
                    <h1 className="text-[21px] font-[500] mb-[20px]">Summary</h1>
                    <div className="flex justify-between items-center mb-[10px]">
                        <h1 className="text-[15px]">Subtotal</h1>
                        <h1 className="text-[15px]">₹ 20 890.00</h1>
                    </div>
                    <div className="flex justify-between items-center pb-[20px] border-b-[1px] border-b-[#ccc]">
                        <h1 className="text-[15px]">Estimated Delivery & Handling</h1>
                        <h1 className="text-[15px]">Free</h1>
                    </div>
                    <div className="flex justify-between items-center py-[20px] border-b-[1px] border-b-[#ccc]">
                        <h1 className="text-[15px]">Total</h1>
                        <h1 className="text-[15px]">₹ 20 890.00</h1>
                    </div>
                    <Link href={"/checkout"}><Button value="Member Checkout" className="w-full mt-[40px]" /></Link>
                </div>
            </div>
            <div className="my-[40px]">
                <h1 className="text-[21px] font-[500]">Favourites</h1>
                <p className="text-[15px]">There are no items saved to your favourites.</p>
            </div>
            <div>
                <h1 className="text-[19px] font-[500] mb-[20px]">You Might Also Like</h1>
                <Image src={"/images/nikeOne/shoes.svg"} alt="shoes" width={60} height={20} className="w-full sm:w-[431px] sm:h-[431px]"></Image>
                <h1 className="text-[15px] font-[500] mt-[20px]">Air Jordan 1 Mid SE Craft</h1>
                <p className="text-[15px] text-[gray]">Men&apos;s Shoes</p>
                <p className="text-[15px] font-[500]">MRP : ₹ 12 295.00</p>
            </div>
        </div>
    )
}

export default page