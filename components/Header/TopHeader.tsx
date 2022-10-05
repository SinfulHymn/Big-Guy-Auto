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
            <div className='container mx-auto flex lg:flex-row flex-col justify-between px-4 transition-all'>

                {/* logo */}
                <div className=' lg:mx-0 mx-auto'>
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
                <div className='flex md:justify-evenly lg:justify-center items-center px-4 space'>

                    {/* call us now */}
                    <div className='flex flex-1 justify-center items-center px-4 border-slate-400 border-r'>
                        <div className=' mr-2 mt-1'>

                            <Image
                                src={PhoneIcon}
                                alt='PhoneIcon'
                                width={30}
                                height={30}
                            />
                        </div>

                        <div className='flex flex-col ml-1.5 '>
                            <p className=' font-semibold text-sm'>Call Us Now</p>
                            <p className=' font-normal text-sm'>+1 (818) 645 7172</p>
                            <p className=' font-semibold text-sm'>Hablamos Espanol!</p>
                        </div>
                    </div>
                    {/* end call us now */}

                    {/* hours */}
                    <div className='flex flex-1 justify-center items-center  px-4'>
                        <div className=' mr-2 mt-1'>
                        <Image
                                src={TimerIcon}
                                alt='TimerIcon'
                                width={27}
                                height={30}
                            />

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