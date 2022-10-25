import React from 'react';
import Nav from './Nav';
import TopHeader from './TopHeader';
import AddressHeader from './AddressHeader';
// notes: Header is a container for TopHeader and BottomHeader
// css: flex flex-col min-w-full


const Header = () => {
  return (
    <header className='flex flex-col min-w-full'>
      <AddressHeader/>
      <TopHeader />
      <Nav />
    </header>
  );
}

export default Header;
