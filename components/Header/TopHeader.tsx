import React from 'react'
import Image from 'next/image';
import Logo from 'public/images/logo.png';
import Link from 'next/link';
import PhoneIcon from 'public/images/icons/header-phone.png';
import TimerIcon from 'public/images/icons/header-timer.png';

// import Link from 'next/link'
// import { useRouter } from 'next/router'
// import { useSession, signIn, signOut } from 'next-auth/client'
// import { Menu, Transition } from '@headlessui/react'
// import { Fragment } from 'react'
// import { ChevronDownIcon } from '@heroicons/react/solid'
// import { useUser } from '@auth0/nextjs-auth0'
// import { useAuth } from '@redwoodjs/auth'
// import { useAuth0 } from '@auth0/auth0-react'
// import { useAuth0 as useAuth0React } from '@auth0/auth0-react'

// notes: TopHeader is a container for Logo, Phone, and Timer Icon
// css layers: 
//  - flex flex-wrap py-5
//  - flex justify-center items-center min-w-full

const TopHeader = () => {
    return (
        // main container
        <div className='py-4'>

            {/* content container mx-auto */}
            <div className='container mx-auto flex justify-between px-4'>

                {/* logo */}
                <div className=''>
                    <a href="/">
                        <Image
                            src={Logo}
                            alt='Logo'
                            width={300}
                            height={80}
                        />
                    </a>
                </div>
                {/* end logo */}

                {/* phone and hours  */}
                <div className='flex justify-center items-center px-4'>

                    {/* call us now */}
                    <div className='flex justify-center items-center px-4 border-slate-400 border-r'>
                        <div className=' mr-2 mt-1'>

                            <svg xmlns="http://www.w3.org/2000/svg" className=" text-red-600 ionicon" viewBox="0 0 512 512"><title>Phone Portrait</title><rect x="128" y="16" width="256" height="480" rx="48" ry="48" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"/><path d="M176 16h24a8 8 0 018 8h0a16 16 0 0016 16h64a16 16 0 0016-16h0a8 8 0 018-8h24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"/></svg>
                        </div>

                        <div className='flex flex-col ml-1.5 '>
                            <p className=' font-semibold text-sm'>Call Us Now</p>
                            <p className=' font-normal text-sm'>+1 (818) 645 7172</p>
                            <p className=' font-semibold text-sm'>Hablamos Espanol!</p>
                        </div>
                    </div>
                    {/* end call us now */}

                    {/* hours */}
                    <div className='flex justify-center items-center ml-1.5 px-4'>
                        <div className=' mr-2 mt-1'>
                        <svg xmlns="http://www.w3.org/2000/svg" className="text-red-600 ionicon" viewBox="0 0 512 512"><title>Time</title><path d="M256 64C150 64 64 150 64 256s86 192 192 192 192-86 192-192S362 64 256 64z" fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32"/><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M256 128v144h96"/></svg>

                        </div>
                        <div className='flex flex-col ml-1.5 '>
                            <p className='font-semibold text-sm'>Opening Hours</p>
                            <p className=' font-normal text-sm'>Mon - Fri 8:00 - 5:00</p>
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