import React from "react";
import { useState } from "react";
import { Squash as Squash } from 'hamburger-react'
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
                    <nav className={"w-full md:w-auto md:block  " + (isOpen ? 'block' : 'hidden')}>
                        <ul className='flex flex-col transition-colors mt-4 pb-4 text-main-background md:flex-row  md:pb-0 md:mt-0'>
                            <li>
                                <Link href='/'>
                                    <div className='border-b block  p-3  sm:p-4 hover:bg-main-red transition-colors md:border-0'>
                                        Home
                                    </div>
                                </Link>
                            </li>
                            <li>
                                <Link href='/about'>
                                    <div className='border-b block  p-3  sm:p-4 hover:bg-main-red transition-colors md:border-0'>
                                        About
                                    </div>
                                </Link>
                            </li>
                            <li>
                                <Link href='/gallery'>
                                    <div className='border-b block  p-3  sm:p-4 hover:bg-main-red transition-colors md:border-0'>
                                        Gallery
                                    </div>
                                </Link>
                            </li>
                            <li>
                                <Link href='/blog'>
                                    <div className='border-b block  p-3  sm:p-4 hover:bg-main-red transition-colors md:border-0'>
                                        Blog
                                    </div>
                                </Link>
                            </li>
                            <li>
                                <Link href='/FAQ'>
                                    <div className='border-b block  p-3  sm:p-4 hover:bg-main-red transition-colors md:border-0'>
                                        FAQ
                                    </div>
                                </Link>
                            </li>
                            <li>
                                <Link href='/contact'>
                                    <div className='border-b block  p-3  sm:p-4 hover:bg-main-red transition-colors md:border-0'>
                                        Contact
                                    </div>
                                </Link>
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