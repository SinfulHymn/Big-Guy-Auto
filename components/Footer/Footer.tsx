import React from 'react';
import TopFooter from './TopFooter';
import BottomFooter from './BottomFooter';

const Footer = () => {
    return (
        <footer className='flex flex-col min-w-full'>
            <TopFooter />
            <BottomFooter />
        </footer>

    );
};

export default Footer;
