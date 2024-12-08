import Image from "next/image"
import Link from "next/link"


const page = () => {
    return (
        <div className="min-[425px]:w-[380px] m-auto">
            <div className="p-[20px] grid gap-[20px]">
                <Image src={"/images/nikeOne/Vector.svg"} alt="Frames" width={60} height={20} className="m-auto" ></Image>
                <h1 className="text-center text-[18px] font-bold">BECOME A NIKE MEMBER</h1>
                <p className="text-[14px] text-[gray] text-center w-[282px] m-auto">Create your Nike Member profile and get first access to the very best of Nike products, inspiration and community.</p>
                <input type="email" placeholder="Email address" className="p-[10px] w-full rounded-[4px] border-[1px] border-[#ccc] outline-none" />
                <input type="password" placeholder="Password" className="p-[10px] w-full rounded-[4px] border-[1px] border-[#ccc] outline-none" />
                <input type="text" placeholder="First Name" className="p-[10px] w-full rounded-[4px] border-[1px] border-[#ccc] outline-none" />
                <input type="text" placeholder="Last Name" className="p-[10px] w-full rounded-[4px] border-[1px] border-[#ccc] outline-none" />
                <input type="text" placeholder="Date of Birth" className="p-[10px] w-full rounded-[4px] border-[1px] border-[#ccc] outline-none" />
                <select className="p-[10px] w-full rounded-[4px] border-[1px] border-[#ccc] text-[gray]" >
                    <option>Pakistan</option>
                    <option>India</option>
                </select>
                <div className="flex items-center justify-between">
                    <button className="text-[gray] w-[153px] h-[43px] border-[1px] border-[#ccc]">Male</button>
                    <button className="text-[gray] w-[153px] h-[43px] border-[1px] border-[#ccc]">Female</button>
                </div>
                <div className="flex gap-[10px]">
                    <input type="checkbox" />
                    <p className="text-[gray] text-[11px]">Sign up for emails to get updates from Nike on products, offers and your Member benefits</p>
                </div>
                <p className="text-[12px] text-[gray] text-center w-[279px] m-auto">By logging in, you agree to Nike&apos;s <span className="underline">Privacy Policy</span> and <span className="underline">Terms of Use.</span></p>
                <button className="w-full text-center py-[10px] px-[15px] bg-[black] text-[white] rounded-[4px]">JOIN US</button>
                <p className="text-[12px] text-[gray] text-center">Not a Member? <span className="text-[black]"><Link href={"/signUp"}>Sign In.</Link></span></p>
            </div>
        </div>
    )
}

export default page