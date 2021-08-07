import React from 'react';

const Header: React.FC<any> = () => {
  return (
    <header className='bg-primary mb-[59px]'>
      <div className='max-w-6xl mx-auto'>
        <h2 className='text-lg text-white text-center py-[25px] uppercase font-light'>
          Calculator
        </h2>
      </div>
    </header>
  );
};

export default Header;
