import React from 'react';
import BottomHeader from './BottomHeader';
import TopHeader from './TopHeader';

const Header = () => {
  return (
    <header className='flex flex-col min-w-full'>
      <TopHeader />
      <BottomHeader />
    </header>
  );
}

export default Header;
