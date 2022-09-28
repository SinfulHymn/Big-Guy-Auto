import React from 'react';
import BottomHeader from './BottomHeader';
import TopHeader from './TopHeader';

// notes: Header is a container for TopHeader and BottomHeader
// css: flex flex-col min-w-full


const Header = () => {
  return (
    <header className='flex flex-col min-w-full'>
      <TopHeader />
      <BottomHeader />
    </header>
  );
}

export default Header;
