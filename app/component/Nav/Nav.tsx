"use client"

import Image from "next/image"
import Link from "next/link"
import { useState } from "react";
import { IoIosSearch } from "react-icons/io";
import { IoMdHeartEmpty } from "react-icons/io";
import { IoBagOutline } from "react-icons/io5";
import { IoReorderThreeOutline } from "react-icons/io5";

const Nav = () => {
    const [isNav, setIsNav] = useState(false)
    return (
        <div>
            <div className="h-[60px] flex items-center justify-between px-[20px] lg:px-[50px]">

                <Link href={"/"}><Image src={"/images/nikeOne/Vector.svg"} alt="Frames" width={60} height={20} ></Image></Link>

                <ul className="gap-[24px] font-[500] hidden lg:flex">
                    <li><Link href={""}>New & Featured</Link></li>
                    <li><Link href={"/men"}>Men</Link></li>
                    <li><Link href={""}>Women</Link></li>
                    <li><Link href={""}>Kids</Link></li>
                    <li><Link href={""}>Sale</Link></li>
                    <li><Link href={""}>SNKRS</Link></li>
                </ul>

                <div className="flex gap-[15px] items-center">
                    <div className=" hidden sm:flex rounded-[30px] bg-[#F5F5F5] items-center gap-[10px] p-[10px] w-[180px]">
                        <IoIosSearch className="text-[24px]" />
                        <input type="text" placeholder="Search" className="w-[100px] bg-[#F5F5F5]" />
                    </div>
                    <IoMdHeartEmpty className="text-[24px]" />
                    <Link href={"/bigCard"}><IoBagOutline className="text-[24px]" /></Link>
                    <IoReorderThreeOutline className="text-[24px] lg:hidden" onClick={() => { setIsNav(!isNav) }} />
                </div>
            </div>
            <div className={`absolute w-[70%] right-0 h-screen bg-[black] text-[white] p-[30px] ${isNav ? "block" : "hidden"} `}>
            <ul className="gap-[10px] grid font-[500]">
                <li><Link href={""}>New & Featured</Link></li>
                <li><Link href={"/men"}>Men</Link></li>
                <li><Link href={""}>Women</Link></li>
                <li><Link href={""}>Kids</Link></li>
                <li><Link href={""}>Sale</Link></li>
                <li><Link href={""}>SNKRS</Link></li>
            </ul>
        </div>
        </div >
    )
}

export default Nav