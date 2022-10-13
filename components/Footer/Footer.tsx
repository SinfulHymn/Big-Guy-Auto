import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import TopFooter from './TopFooter';
import BottomFooter from './BottomFooter';

const Footer = () => {
    const router = useRouter();
    return (
        <footer className='flex flex-col min-w-full'>
            <TopFooter />
            <BottomFooter />
        </footer>

    );
};

export default Footer;
