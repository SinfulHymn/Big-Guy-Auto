import React from 'react'
import Image from 'next/image';
import Logo from 'public/images/logo.png';
import {AiFillPhone,AiFillClockCircle} from 'react-icons/ai';
import Link from 'next/link';

const TopHeader = () => {
    return (
        // main container
        <div className='py-0 xs:py-1 sm:py-3'>

            {/* content container mx-auto */}
            <div className='container mx-auto flex flex-col justify-between items-center px-4 transition-all lg:flex-row'>

                {/* logo */}

                <Link className='max-h-[80px]' href="/">
                    <div className='max-h-[80px]'>

                    <Image
                        src={Logo}
                        alt='Logo'
                        width={300}
                        height={80}
                    />
                    </div>
                </Link>

                {/* end logo */}

                {/* phone and hours  */}
                <div className='flex flex-col items-center h-full w-full md:w-auto md:flex-row md:justify-evenly lg:justify-center'>

                    {/* call us now */}
                    <div className='flex w-full justify-center border-main-green items-center px-4 pb-1  md:pb-0 border-b md:border-r md:border-b-0'>
                        <div className=' mr-2 mt-1'>

                        <AiFillPhone className='rotate-90 text-main-red text-3xl'/>
                        </div>

                        <div className='flex flex-col ml-1.5 w-36 text-xs sm:text-sm items-center'>
                            <p>Call Us Now</p>
                            <p>+1 (818) 645 7172</p>
                            <p>Hablamos Espanol!</p>
                        </div>
                    </div>
                    {/* end call us now */}

                    {/* hours */}
                    <div className='flex w-full justify-center items-center px-4 py-2 md:py-0'>
                        <div className='mr-2 mt-1'>
                        <AiFillClockCircle className='text-main-red text-3xl'/>

                        </div>
                        <div className='flex flex-col ml-1.5 w-36 text-xs sm:text-sm items-center'>
                            <p>Opening Hours</p>
                            <p>Mon - Fri 8:00 - 5:00</p>
                        </div>
                    </div>
                    {/* end hours */}

                </div>
                {/* end phone and hours */}

            </div>
            {/* end content container */}

            {/* // end of main container */}
        </div>
    );
}

export default TopHeader;