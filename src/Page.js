import React from 'react';
import Navbar from './Navbar';  // Import your Navbar component
import Bannerkitty from './Bannerkitty';  // Import your Bannerkitty component
import Containerkitty from './Containerkitty';
import Footer from './Footer';
import Informationkitty from './Informationkitty';

const Page = () => {
    return (
        <>
            <Navbar />
            <Bannerkitty />
            <Containerkitty/>
            <Informationkitty/>
            <Footer/>
        </>
    );
};

export default Page;
