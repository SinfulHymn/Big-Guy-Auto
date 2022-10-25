import React from "react";
import { useState, useEffect } from "react";
import { Squash as Hamburger, Squash } from 'hamburger-react'
import Link from "next/link";

const BottomHeader = () => {
    const [isOpen, setOpen] = useState(false)

    return (
        // main container
        <div className='bg-main'>
            {/* content container */}
            <div className='container mx-auto px-4 transition-all'>
                {/* inner content container */}
                <div className="flex flex-wrap items-center justify-between">

                    {/* estimate container */}
                    <div className=" order-none md:order-last">
                        <button className="text-white font-semibold bg-main-red p-2 px-4 text-xs sm:text-sm rounded-md">
                            Request an Estimate
                        </button>
                    </div>
                    {/* end social media container */}

                    {/* hamburger menu */}
                    <div className="md:hidden">
                        <Squash color="#FFF" label="Show menu"
                            toggled={isOpen} toggle={setOpen} />
                    </div>
                    {/* end hamburger menu */}

                    {/* nav link container */}
                    <nav className={"w-full md:w-auto md:block z-50 " + (isOpen  ? 'block' : 'hidden')}>
                        <ul className='flex flex-col transition-colors mt-4 pb-4z text-main-background md:flex-row  md:pb-0 md:mt-0'>
                            <li>
                                <Link className=' border-b block  p-3 sm:p-4 hover:bg-main-red  transition-colors md:border-0' href='/'>Home</Link>
                            </li>
                            <li>
                                <Link className='border-b block   p-3  sm:p-4 hover:bg-main-red  transition-colors md:border-0' href='/'>About</Link>
                            </li>
                            <li>
                                <Link  className='border-b block  p-3 sm:p-4 hover:bg-main-red transition-colors md:border-0' href='/'>Services</Link>
                            </li>
                            <li>
                                <Link className='border-b block  p-3  sm:p-4 hover:bg-main-red transition-colors md:border-0' href='/'>Gallery</Link>
                            </li>
                            <li>
                                <Link className='border-b block  p-3 sm:p-4 hover:bg-main-red transition-colors md:border-0' href='/'>Blog</Link>
                            </li>
                            <li>
                                <Link className='border-b block p-3 sm:p-4 hover:bg-main-red transition-colors md:border-0' href='/'>FAQ</Link>
                            </li>
                            <li>
                                <Link className=' border-b block p-3 sm:p-4 hover:bg-main-red transition-colors md:border-0' href='/'>Contact</Link>
                            </li>
                        </ul>
                    </nav>
                    {/* end nav link container */}

                </div>
                {/* end inner content container */}
            </div>
            {/* end content container */}

        </div>
    );
}

export default BottomHeader;