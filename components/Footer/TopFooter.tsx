import React from "react";
import { AiFillRightCircle } from 'react-icons/ai';
import TopFooterItem from "./TopFooterItem";

const TopFooter = () => {
    return (
        <div className="bg-main mt-2 pt-6 pb-2 transition-all">

            <div className="mx-auto flex container flex-col text-slate-200 md:flex-row">
                <div className="flex-1 px-4 mb-3 sm:mb-6">
                    <h1 className="mb-3 sm:mb-6 font-semibold text-xl">Contact Us</h1>
                    <ul className="text-sm font-medium">
                        <li className="my-3">
                            Email <span className="text-main-red pl-2">support@bigguyauto.com</span>
                        </li>

                        <li className="my-3">
                            Phone <span className="text-main-red pl-2">+1 (818) 365 8018</span>
                        </li>
                        <li className="my-3">
                            Address <span className="text-main-red pl-2">1517 Truman St, San Fernando, CA 91340</span>
                        </li>
                    </ul>


                </div>
                <div className="flex-1 px-4 mb-3 sm:mb-6">
                    <h1 className="mb-3 sm:mb-6 font-semibold text-xl">Our Services</h1>
                    <ul>
                        <TopFooterItem text="Auto Body Repair" />
                        <TopFooterItem text="Auto Glass Repair" />
                        <TopFooterItem text="Auto Detailing" />
                        <TopFooterItem text="Auto Paint" />
                        <TopFooterItem text="Auto Upholstery" />
                    </ul>



                </div>
                <div className="basis-1/2 sm:flex-1 px-4 mb-3 sm:mb-6">
                    <h1 className="mb-3 sm:mb-6 font-semibold text-xl">Our Support</h1>
                    <ul>
                        <TopFooterItem text="Auto Body Repair" />
                        <TopFooterItem text="Auto Glass Repair" />
                        <TopFooterItem text="Auto Detailing" />
                        <TopFooterItem text="Auto Paint" />
                        <TopFooterItem text="Auto Upholstery" />
                    </ul>

                </div>
                <div className="flex-1 px-4 mb-3 sm:mb-6">
                    <h1 className="mb-3 sm:mb-6 font-semibold text-xl">Quick Contact</h1>
                    <ul>
                    <TopFooterItem text="Auto Body Repair" />
                    <TopFooterItem text="Auto Glass Repair" />
                    <TopFooterItem text="Auto Detailing" />
                    <TopFooterItem text="Auto Paint" />
                    <TopFooterItem text="Auto Upholstery" />
                    </ul>


                </div>
            </div>
        </div>
    );
}
export default TopFooter;


