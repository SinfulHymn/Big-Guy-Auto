import React from 'react'
import Image from 'next/image';
import Logo from 'public/images/Logo.png';
import Link from 'next/link';
import PhoneIcon from 'public/images/icons/header-phone.png';


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




const TopHeader = () => {
    return (
        <div className='flex flex-wrap py-5'>

            <div className='flex justify-center items-center min-w-full'>
                <Link
                    href='/'
                >
                    <Image
                        src={Logo}
                        alt='Logo'
                        width={280}
                        height={80}
                    />
                </Link>
            </div>

            <div className='flex flex-col justify-center items-center min-w-full'>
                <div className='flex justify-center items-center min-w-full'>
                    <Image
                        src={PhoneIcon}
                        alt='Phone Icon'
                        width={30}
                        height={30}
                    />
                    <div className='flex flex-col justify-center items-center'>
                        <p>Call Us Now</p>
                        <p>+1 818 645 7172</p>
                    </div>
                </div>
                <div className='flex justify-center items-center min-w-full'>
                    <Image
                        src={PhoneIcon}
                        alt='Phone Icon'
                        width={30}
                        height={30}
                    />
                    <div className='flex flex-col justify-center items-center'>
                        <p>Opening Hours</p>
                        <p>Mon - Fri 8:00 - 5:00</p>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default TopHeader;