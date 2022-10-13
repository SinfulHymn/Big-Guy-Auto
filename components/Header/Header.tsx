import React from 'react';
import Nav from './Nav';
import TopHeader from './TopHeader';

// notes: Header is a container for TopHeader and BottomHeader
// css: flex flex-col min-w-full


const Header = () => {
  return (
    <header className='flex flex-col min-w-full'>
      <TopHeader />
      <Nav />
    </header>
  );
}

export default Header;
