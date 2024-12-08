import Card from "../component/allProductsCard/allProductsCard"
import { VscSettings } from "react-icons/vsc";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";

const page = () => {
    return (
        <div className="md:px-[30px] px-[15px] lg:flex">
            <div className="lg:w-[20%] mt-[60px] lg:pr-[50px] ">
                <h1 className="text-[24px] font-[500] mb-[20px]">New (500)</h1>
                <div className="grid gap-[8px] font-[500] text-[15px] pb-[20px] border-b-[1px] border-b-[#ccc] lg:border-r-[7px] border-r-[gray]">
                    <h1>Shoes</h1>
                    <h1>Sports Bras</h1>
                    <h1>Tops & T-Shirts</h1>
                    <h1>Hoodies & Sweatshirts</h1>
                    <h1>Jackets</h1>
                    <h1>Trousers & Tights</h1>
                    <h1>Shorts</h1>
                    <h1>Tracksuits</h1>
                    <h1>Jumpsuits & Rompers</h1>
                    <h1>Skirts & Dresses</h1>
                    <h1>Socks</h1>
                    <h1>Accessories</h1>
                    <h1>Equipment</h1>
                </div>
                <div>
                    <div className="flex mb-[10px] items-center justify-between mt-[20px] font-[550] text-[15px]  ">
                        <h1>Gender</h1>
                        <IoIosArrowUp />
                    </div>
                    <div className="flex items-center gap-[5px]">
                        <input type="checkbox" />
                        <h1>Men</h1>
                    </div>
                    <div className="flex items-center gap-[5px]">
                        <input type="checkbox" />
                        <h1>Women</h1>
                    </div>
                    <div className="flex items-center gap-[5px] mb-[20px]">
                        <input type="checkbox" />
                        <h1>Unisex</h1>
                    </div>
                </div>
                <div>
                    <div className="flex  mb-[10px]  pt-[20px] border-t-[1px] border-t-[#ccc] items-center justify-between font-[550] text-[15px]">
                        <h1>Kid</h1>
                        <IoIosArrowUp />
                    </div>
                    <div className="flex items-center gap-[5px]">
                        <input type="checkbox" />
                        <h1>Boys</h1>
                    </div>
                    <div className="flex items-center gap-[5px] mb-[20px]">
                        <input type="checkbox" />
                        <h1>Girls</h1>
                    </div>
                </div>
                <div>
                    <div className="flex  mb-[10px]  pt-[20px] border-t-[1px] border-t-[#ccc] items-center justify-between font-[550] text-[15px]">
                        <h1>Shop By Price</h1>
                        <IoIosArrowUp />
                    </div>
                    <div className="flex items-center gap-[5px]">
                        <input type="checkbox" />
                        <h1>Under ₹ 2 500.00</h1>
                    </div>
                    <div className="flex items-center gap-[5px]">
                        <input type="checkbox" />
                        <h1>₹ 2 501.00</h1>
                    </div>
                </div>
            </div>
            <div className="lg:w-[80%]">
                <div className="flex items-center justify-end mt-[60px] mb-[25px]">
                    <div className="flex items-center gap-[20px]">
                        <div className="flex items-center gap-[10px]">
                            <h1>Hide Filters</h1>
                            <VscSettings className="text-[24px]" />
                        </div>
                        <div className="flex items-center gap-[10px]">
                            <h1>Sort By</h1>
                            <IoIosArrowDown className="text-[24px]" />
                        </div>
                    </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-[20px] md:grid-cols-3 pb-[80px]">
                    <Card picture="1" highlight="Just In" heading="Nike Air Force 1 Mid '07" subHeding="Men's Shoes" price="MRP : ₹ 10 795.00" />
                    <Card picture="2" highlight="Just In" heading="Nike Court Vision Low Next Nature" subHeding="Men's Shoes" price="MRP : ₹ 4 995.00" />
                    <Card picture="3" highlight="Just In" heading="Nike Air Force 1 PLT.AF.ORM" subHeding="Women's Shoes" price="MRP : ₹ 8 695.00" />
                    <Card picture="4" highlight="Just In" heading="Nike Air Force 1 React" subHeding="Men's Shoes" price="MRP : ₹ 13 295.00" />
                    <Card picture="5" highlight="Promo Exclusion" heading="Air Jordan 1 Elevate Low" subHeding="Women's Shoes" price="MRP : ₹ 11 895.00" />
                    <Card picture="6" highlight="Just In" heading="Nike Standard Issue" subHeding="Women's Basketball Jersey" price="MRP : ₹ 2 895.00" />
                    <Card picture="7" highlight="Promo Exclusion" heading="Nike Dunk Low Retro SE" subHeding="Men's Shoes" price="MRP : ₹ 10 795.00" />
                    <Card picture="8" highlight="Sustainable Materials" heading="Nike Dri-FIT UV Hyverse" subHeding="Men's Short-Sleeve Graphic Fitness Top" price="MRP : ₹ 9 695.00" />
                    <Card picture="9" highlight="Just In" heading="Nike Court Vision Low" subHeding="Men's Shoes" price="MRP : ₹ 2 495.00" />
                    <Card picture="10" highlight="Just In" heading="Nike Dri-FIT Ready" subHeding="Men's Short-Sleeve Fitness Top" price="MRP : ₹ 2 495.00" />
                    <Card picture="11" highlight="Just In" heading="Nike Air Force 1 Mid '07" subHeding="Men's Shoes" price="MRP : ₹ 10 795.00" />
                    <Card picture="12" highlight="Just In" heading="Nike Court Vision Low Next Nature" subHeding="Men's Shoes" price="MRP : ₹ 4 995.00" />
                    <Card picture="13" highlight="Just In" heading="Nike Air Force 1 PLT.AF.ORM" subHeding="Women's Shoes" price="MRP : ₹ 8 695.00" />
                    <Card picture="14" highlight="Just In" heading="Nike Air Force 1 React" subHeding="Men's Shoes" price="MRP : ₹ 13 295.00" />
                    <Card picture="15" highlight="Promo Exclusion" heading="Air Jordan 1 Elevate Low" subHeding="Women's Shoes" price="MRP : ₹ 11 895.00" />
                    <Card picture="16" highlight="Just In" heading="Nike Standard Issue" subHeding="Women's Basketball Jersey" price="MRP : ₹ 2 895.00" />
                    <Card picture="17" highlight="Promo Exclusion" heading="Nike Dunk Low Retro SE" subHeding="Men's Shoes" price="MRP : ₹ 10 795.00" />
                    <Card picture="18" highlight="Sustainable Materials" heading="Nike Dri-FIT UV Hyverse" subHeding="Men's Short-Sleeve Graphic Fitness Top" price="MRP : ₹ 9 695.00" />
                    <Card picture="19" highlight="Just In" heading="Nike Court Vision Low" subHeding="Men's Shoes" price="MRP : ₹ 2 495.00" />
                    <Card picture="20" highlight="Just In" heading="Nike Dri-FIT Ready" subHeding="Men's Short-Sleeve Fitness Top" price="MRP : ₹ 2 495.00" />
                    <Card picture="21" highlight="Just In" heading="Nike Air Force 1 Mid '07" subHeding="Men's Shoes" price="MRP : ₹ 10 795.00" />
                    <Card picture="22" highlight="Just In" heading="Nike Court Vision Low Next Nature" subHeding="Men's Shoes" price="MRP : ₹ 4 995.00" />
                    <Card picture="23" highlight="Just In" heading="Nike Air Force 1 PLT.AF.ORM" subHeding="Women's Shoes" price="MRP : ₹ 8 695.00" />
                    <Card picture="24" highlight="Just In" heading="Nike Air Force 1 React" subHeding="Men's Shoes" price="MRP : ₹ 13 295.00" />
                    <Card picture="25" highlight="Promo Exclusion" heading="Air Jordan 1 Elevate Low" subHeding="Women's Shoes" price="MRP : ₹ 11 895.00" />
                    <Card picture="26" highlight="Just In" heading="Nike Standard Issue" subHeding="Women's Basketball Jersey" price="MRP : ₹ 2 895.00" />
                    <Card picture="27" highlight="Promo Exclusion" heading="Nike Dunk Low Retro SE" subHeding="Men's Shoes" price="MRP : ₹ 10 795.00" />
                    <Card picture="28" highlight="Sustainable Materials" heading="Nike Dri-FIT UV Hyverse" subHeding="Men's Short-Sleeve Graphic Fitness Top" price="MRP : ₹ 9 695.00" />
                    <Card picture="29" highlight="Just In" heading="Nike Court Vision Low" subHeding="Men's Shoes" price="MRP : ₹ 2 495.00" />
                    <Card picture="30" highlight="Just In" heading="Nike Dri-FIT Ready" subHeding="Men's Short-Sleeve Fitness Top" price="MRP : ₹ 2 495.00" />
                    <Card picture="31" highlight="Just In" heading="Nike Air Force 1 Mid '07" subHeding="Men's Shoes" price="MRP : ₹ 10 795.00" />
                    <Card picture="32" highlight="Just In" heading="Nike Court Vision Low Next Nature" subHeding="Men's Shoes" price="MRP : ₹ 4 995.00" />
                    <Card picture="33" highlight="Just In" heading="Nike Air Force 1 PLT.AF.ORM" subHeding="Women's Shoes" price="MRP : ₹ 8 695.00" />
                    <Card picture="34" highlight="Just In" heading="Nike Air Force 1 React" subHeding="Men's Shoes" price="MRP : ₹ 13 295.00" />
                    <Card picture="35" highlight="Promo Exclusion" heading="Air Jordan 1 Elevate Low" subHeding="Women's Shoes" price="MRP : ₹ 11 895.00" />
                    <Card picture="36" highlight="Just In" heading="Nike Standard Issue" subHeding="Women's Basketball Jersey" price="MRP : ₹ 2 895.00" />
                    <Card picture="37" highlight="Promo Exclusion" heading="Nike Dunk Low Retro SE" subHeding="Men's Shoes" price="MRP : ₹ 10 795.00" />
                    <Card picture="38" highlight="Sustainable Materials" heading="Nike Dri-FIT UV Hyverse" subHeding="Men's Short-Sleeve Graphic Fitness Top" price="MRP : ₹ 9 695.00" />
                    <Card picture="39" highlight="Just In" heading="Nike Court Vision Low" subHeding="Men's Shoes" price="MRP : ₹ 2 495.00" />
                    <Card picture="40" highlight="Just In" heading="Nike Dri-FIT Ready" subHeding="Men's Short-Sleeve Fitness Top" price="MRP : ₹ 2 495.00" />
                    <Card picture="23" highlight="Just In" heading="Nike Air Force 1 PLT.AF.ORM" subHeding="Women's Shoes" price="MRP : ₹ 8 695.00" />
                    <Card picture="24" highlight="Just In" heading="Nike Air Force 1 React" subHeding="Men's Shoes" price="MRP : ₹ 13 295.00" />
                    <Card picture="25" highlight="Promo Exclusion" heading="Air Jordan 1 Elevate Low" subHeding="Women's Shoes" price="MRP : ₹ 11 895.00" />
                    <Card picture="26" highlight="Just In" heading="Nike Standard Issue" subHeding="Women's Basketball Jersey" price="MRP : ₹ 2 895.00" />
                    <Card picture="27" highlight="Promo Exclusion" heading="Nike Dunk Low Retro SE" subHeding="Men's Shoes" price="MRP : ₹ 10 795.00" />
                    <Card picture="28" highlight="Sustainable Materials" heading="Nike Dri-FIT UV Hyverse" subHeding="Men's Short-Sleeve Graphic Fitness Top" price="MRP : ₹ 9 695.00" />
                    <Card picture="29" highlight="Just In" heading="Nike Court Vision Low" subHeding="Men's Shoes" price="MRP : ₹ 2 495.00" />
                    <Card picture="30" highlight="Just In" heading="Nike Dri-FIT Ready" subHeding="Men's Short-Sleeve Fitness Top" price="MRP : ₹ 2 495.00" />
                    <Card picture="31" highlight="Just In" heading="Nike Air Force 1 Mid '07" subHeding="Men's Shoes" price="MRP : ₹ 10 795.00" />
                    <Card picture="32" highlight="Just In" heading="Nike Court Vision Low Next Nature" subHeding="Men's Shoes" price="MRP : ₹ 4 995.00" />
                    <Card picture="19" highlight="Just In" heading="Nike Court Vision Low" subHeding="Men's Shoes" price="MRP : ₹ 2 495.00" />
                    <Card picture="20" highlight="Just In" heading="Nike Dri-FIT Ready" subHeding="Men's Short-Sleeve Fitness Top" price="MRP : ₹ 2 495.00" />
                    <Card picture="21" highlight="Just In" heading="Nike Air Force 1 Mid '07" subHeding="Men's Shoes" price="MRP : ₹ 10 795.00" />
                    <Card picture="22" highlight="Just In" heading="Nike Court Vision Low Next Nature" subHeding="Men's Shoes" price="MRP : ₹ 4 995.00" />
                    <Card picture="23" highlight="Just In" heading="Nike Air Force 1 PLT.AF.ORM" subHeding="Women's Shoes" price="MRP : ₹ 8 695.00" />
                    <Card picture="24" highlight="Just In" heading="Nike Air Force 1 React" subHeding="Men's Shoes" price="MRP : ₹ 13 295.00" />
                    <Card picture="25" highlight="Promo Exclusion" heading="Air Jordan 1 Elevate Low" subHeding="Women's Shoes" price="MRP : ₹ 11 895.00" />
                    <Card picture="26" highlight="Just In" heading="Nike Standard Issue" subHeding="Women's Basketball Jersey" price="MRP : ₹ 2 895.00" />
                    <Card picture="27" highlight="Promo Exclusion" heading="Nike Dunk Low Retro SE" subHeding="Men's Shoes" price="MRP : ₹ 10 795.00" />
                    <Card picture="28" highlight="Sustainable Materials" heading="Nike Dri-FIT UV Hyverse" subHeding="Men's Short-Sleeve Graphic Fitness Top" price="MRP : ₹ 9 695.00" />
                    <Card picture="15" highlight="Promo Exclusion" heading="Air Jordan 1 Elevate Low" subHeding="Women's Shoes" price="MRP : ₹ 11 895.00" />
                    <Card picture="16" highlight="Just In" heading="Nike Standard Issue" subHeding="Women's Basketball Jersey" price="MRP : ₹ 2 895.00" />
                    <Card picture="17" highlight="Promo Exclusion" heading="Nike Dunk Low Retro SE" subHeding="Men's Shoes" price="MRP : ₹ 10 795.00" />
                    <Card picture="18" highlight="Sustainable Materials" heading="Nike Dri-FIT UV Hyverse" subHeding="Men's Short-Sleeve Graphic Fitness Top" price="MRP : ₹ 9 695.00" />
                    <Card picture="19" highlight="Just In" heading="Nike Court Vision Low" subHeding="Men's Shoes" price="MRP : ₹ 2 495.00" />
                    <Card picture="20" highlight="Just In" heading="Nike Dri-FIT Ready" subHeding="Men's Short-Sleeve Fitness Top" price="MRP : ₹ 2 495.00" />
                    <Card picture="21" highlight="Just In" heading="Nike Air Force 1 Mid '07" subHeding="Men's Shoes" price="MRP : ₹ 10 795.00" />
                    <Card picture="22" highlight="Just In" heading="Nike Court Vision Low Next Nature" subHeding="Men's Shoes" price="MRP : ₹ 4 995.00" />
                    <Card picture="23" highlight="Just In" heading="Nike Air Force 1 PLT.AF.ORM" subHeding="Women's Shoes" price="MRP : ₹ 8 695.00" />
                    <Card picture="24" highlight="Just In" heading="Nike Air Force 1 React" subHeding="Men's Shoes" price="MRP : ₹ 13 295.00" />
                    <Card picture="25" highlight="Promo Exclusion" heading="Air Jordan 1 Elevate Low" subHeding="Women's Shoes" price="MRP : ₹ 11 895.00" />
                    <Card picture="26" highlight="Just In" heading="Nike Standard Issue" subHeding="Women's Basketball Jersey" price="MRP : ₹ 2 895.00" />
                    <Card picture="27" highlight="Promo Exclusion" heading="Nike Dunk Low Retro SE" subHeding="Men's Shoes" price="MRP : ₹ 10 795.00" />
                    <Card picture="28" highlight="Sustainable Materials" heading="Nike Dri-FIT UV Hyverse" subHeding="Men's Short-Sleeve Graphic Fitness Top" price="MRP : ₹ 9 695.00" />
                    <Card picture="29" highlight="Just In" heading="Nike Court Vision Low" subHeding="Men's Shoes" price="MRP : ₹ 2 495.00" />
                    <Card picture="30" highlight="Just In" heading="Nike Dri-FIT Ready" subHeding="Men's Short-Sleeve Fitness Top" price="MRP : ₹ 2 495.00" />
                    <Card picture="31" highlight="Just In" heading="Nike Air Force 1 Mid '07" subHeding="Men's Shoes" price="MRP : ₹ 10 795.00" />
                    <Card picture="32" highlight="Just In" heading="Nike Court Vision Low Next Nature" subHeding="Men's Shoes" price="MRP : ₹ 4 995.00" />
                    <Card picture="33" highlight="Just In" heading="Nike Air Force 1 PLT.AF.ORM" subHeding="Women's Shoes" price="MRP : ₹ 8 695.00" />
                    <Card picture="34" highlight="Just In" heading="Nike Air Force 1 React" subHeding="Men's Shoes" price="MRP : ₹ 13 295.00" />
                    <Card picture="30" highlight="Just In" heading="Nike Dri-FIT Ready" subHeding="Men's Short-Sleeve Fitness Top" price="MRP : ₹ 2 495.00" />
                </div>
                <div className="pt-[60px] border-t-[1px] border-t-[#ccc]">
                    <h1 className="mb-[30px] text-[24px]">Related Categories</h1>
                    <div className="grid sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 2xl:grid-cols-7 gap-[10px]">
                        <button className="bg-[white] text-[black] border-[1px] border-[#ccc] text-[12px] py-[10px] px-[10px] rounded-[30px]">
                            Best Selling Products
                        </button>
                        <button className="bg-[white] text-[black] border-[1px] border-[#ccc] text-[12px] py-[10px] px-[10px] rounded-[30px]">
                            Best Shoes
                        </button>
                        <button className="bg-[white] text-[black] border-[1px] border-[#ccc] text-[12px] py-[10px] px-[10px] rounded-[30px]">
                            New Basketball Shoes
                        </button>
                        <button className="bg-[white] text-[black] border-[1px] border-[#ccc] text-[12px] py-[10px] px-[10px] rounded-[30px]">
                            New Football Shoes
                        </button>
                        <button className="bg-[white] text-[black] border-[1px] border-[#ccc] text-[12px] py-[10px] px-[10px] rounded-[30px]">
                            New Men&amp;s Shoes
                        </button>
                        <button className="bg-[white] text-[black] border-[1px] border-[#ccc] text-[12px] py-[10px] px-[10px] rounded-[30px]">
                            New Running Shoes
                        </button>
                        <button className="bg-[white] text-[black] border-[1px] border-[#ccc] text-[12px] py-[10px] px-[10px] rounded-[30px]">
                            Best Men&amp;s Shoes
                        </button>
                        <button className="bg-[white] text-[black] border-[1px] border-[#ccc] text-[12px] py-[10px] px-[10px] rounded-[30px]">
                            New Jordan Shoes
                        </button>
                        <button className="bg-[white] text-[black] border-[1px] border-[#ccc] text-[12px] py-[10px] px-[10px] rounded-[30px]">
                            Best Women&amp;s Shoes
                        </button>
                        <button className="bg-[white] text-[black] border-[1px] border-[#ccc] text-[12px] py-[10px] px-[10px] rounded-[30px]">
                            Best Training & Gym
                        </button>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default page