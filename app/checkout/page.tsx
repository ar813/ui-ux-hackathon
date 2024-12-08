import Image from "next/image"

const page = () => {
    return (
        <div className="p-[20px] py-[50px] sm:px-[40px] pd:mx-[60px] lg:px-[200px]">
            <div className="flex flex-col lg:flex-row gap-[50px]">
                <div className="lg:w-[60%]">
                    <h1 className="text-[21px] font-[500]">How would you like to get your order?</h1>
                    <p className="text-[15px] text-[#757575] mt-[10px]">Customs regulation for India require a copy of the recipient&apos;s KYC. The address on the KYC needs to match the shipping address. Our courier will contact you via SMS/email to obtain a copy of your KYC. The KYC will be stored securely and used solely for the purpose of clearing customs (including sharing it with customs officials) for all orders and returns. If your KYC does not match your shipping address, please click the link for more information. Learn More</p>
                    <div className="flex gap-[20px] p-[20px] rounded-[5px] my-[30px] border-[1px] border-black">
                        <Image src={"/images/nikeOne/deliver.svg"} alt="Frames" width={24} height={24} ></Image>
                        <h1>Deliver It</h1>
                    </div>
                    <h1 className="text-[21px] font-[500] mb-[20px]">Enter your name and address:</h1>
                    <div className="grid gap-[20px]">
                        <input type="text" placeholder="First Name" className="p-[10px] border-[1px] border-[#ccc] w-full rounded-[4px]" />
                        <input type="text" placeholder="Last Name" className="p-[10px] border-[1px] border-[#ccc] w-full rounded-[4px]" />
                        <div>
                            <input type="text" placeholder="Address Line 1" className="p-[10px] border-[1px] border-[#ccc] w-full rounded-[4px]" />
                            <h1 className="text-[gray] ml-[10px] mt-[5px] text-[11px]">We do not ship to P.O. boxes</h1>
                        </div>
                        <input type="text" placeholder="Address Line 2" className="p-[10px] border-[1px] border-[#ccc] w-full rounded-[4px]" />
                        <input type="text" placeholder="Address Line 3" className="p-[10px] border-[1px] border-[#ccc] w-full rounded-[4px]" />
                        <div className="flex gap-[20px] justify-between">
                            <input type="text" placeholder="Postal Code" className="p-[10px] border-[1px] border-[#ccc] w-full rounded-[4px]" />
                            <input type="text" placeholder="Locality" className="p-[10px] border-[1px] border-[#ccc] w-full rounded-[4px]" />
                        </div>
                        <div className="flex gap-[20px] justify-between">
                            <select className="p-[10px] border-[1px] border-[gray] w-full rounded-[4px] text-[#ccc]"><option>State/Territory</option></select>
                            <input type="text" placeholder="India" className="p-[10px] border-[1px] border-[#ccc] w-full rounded-[4px]" />
                        </div>
                    </div>
                    <div className="flex gap-[20px] mt-[20px]">
                        <input type="checkbox" />
                        <h1>Save this address to my profile</h1>
                    </div>
                    <div className="flex gap-[20px] my-[20px]">
                        <input type="checkbox" />
                        <h1>Make this my preferred address</h1>
                    </div>
                    <h1 className="text-[21px] font-[500] mb-[20px]">What&apos;s your contact information?</h1>
                    <input type="text" placeholder="Email" className="p-[10px] border-[1px] border-[#ccc] w-full rounded-[4px]" />
                    <p className="text-[gray] ml-[10px] mt-[5px] text-[11px] mb-[20px]">A confirmation email will be sent after checkout.</p>
                    <input type="text" placeholder="Phone Number" className="p-[10px] border-[1px] border-[#ccc] w-full rounded-[4px]" />
                    <p className="text-[gray] ml-[10px] mt-[5px] text-[11px] mb-[20px]">A carrier might contact you to confirm delivery.</p>
                    <h1 className="text-[21px] font-[500] mt-[40px] mb-[20px]">What&apos;s your PAN?</h1>
                    <input type="text" placeholder="PAN" className="p-[10px] mb-[20px] border-[1px] border-[#ccc] w-full rounded-[4px]" />
                    <p className="text-[12px] text-[gray] mb-[20px]">Enter your PAN to enable payment with UPI, Net Banking or local card methods</p>
                    <div className="flex gap-[20px] text-[12px] text-[#ccc] mb-[50px]">
                        <input type="checkbox" />
                        <h1>Save PAN details to Nike Profile</h1>
                    </div>
                    <div className="flex gap-[20px] text-[12px] text-[gray] mb-[20px]">
                        <input type="checkbox" />
                        <h1>I have read and consent to eShopWorld processing my information in accordance with the Privacy Statement and Cookie Policy. eShopWorld is a trusted Nike partner.</h1>
                    </div>
                    <button className="w-full rounded-[30px] bg-[#F5F5F5] text-[gray] py-[10px] px-[20px] mt-[30px] mb-[20px]">Continue</button>
                    <div>
                        <h1 className="py-[20px] border-t-[1px] border-t-[#ccc] text-[20px]">Delivery</h1>
                        <h1 className="py-[20px] border-t-[1px] border-t-[#ccc] text-[21px] text-[gray]">Shipping</h1>
                        <h1 className="py-[20px] border-t-[1px] border-t-[#ccc] text-[21px] text-[gray]">Billing</h1>
                        <h1 className="py-[20px] border-t-[1px] border-t-[#ccc] text-[21px] text-[gray]">Payment</h1>
                    </div>
                </div>

                <div className="lg:w-[40%] lg:ml-[30px] mt-[50px] lg:mt-[0px]">
                    <h1 className="text-[21px] font-[500] mb-[20px]">Order Summary</h1>
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
                    <p className="text-[9px] mt-[10px] mb-[20px]">(The total reflects the price of your order, including all duties and taxes)</p>
                    <h1 className="text-[15px] font-[700] mb-[20px]">Arrives Mon, 27 Mar - Wed, 12 Apr</h1>
                    <div>
                        <div className="flex flex-col gap-[30px] sm:flex-row pb-[20px]">
                            <Image src={"/images/nikeOne/boy.svg"} alt="boy" width={60} height={20} className="w-full sm:w-[150px] sm:h-[150px]"></Image>
                            <div className="flex flex-col">
                                <h1>Nike Dri-FIT ADV TechKnit Ultra Men&apos;s Short-Sleeve Running Top</h1>
                                <p className="text-[13px] text-[gray]">Qty 1</p>
                                <p className="text-[13px] text-[gray]">Size L</p>
                                <p className="text-[13px] text-[gray]">₹ 3 895.00</p>
                            </div>
                        </div>
                        <div className="flex flex-col gap-[30px] sm:flex-row pb-[20px]">
                            <Image src={"/images/nikeOne/shoesTwo.svg"} alt="boy" width={60} height={20} className="w-full sm:w-[150px] sm:h-[150px]"></Image>
                            <div className="flex flex-col">
                                <h1>Nike Dri-FIT ADV TechKnit Ultra Men&apos;s Short-Sleeve Running Top</h1>
                                <p className="text-[13px] text-[gray]">Qty 1</p>
                                <p className="text-[13px] text-[gray]">Size UK 8</p>
                                <p className="text-[13px] text-[gray]">₹ 16 995.00</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default page