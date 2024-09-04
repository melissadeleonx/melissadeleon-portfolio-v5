import React from 'react';
import Email from './Email';
import Footer from './Footer';
import Navbar from './Navbar';
import Social from './Social';
import DarkModeButton from '../components/DarkModeButton';

type Props = {
  children: React.ReactNode;
  className?: string;
};

const Layout = ({ children, className = '' }: Props) => {
  return (
    <>
      <Navbar />
      <main
        className={`mx-auto px-6 sm:px-8 md:px-28 lg:px-20 xl:px-0 max-w-screen-lg ${className}`}
      >

        {children}
      </main>
      <div className="fixed right-4 bottom-4 ">
        <DarkModeButton />
      </div>
      <Footer />
      {/* <Social />
      <Email /> */}
    </>
  );
};

export default Layout;
