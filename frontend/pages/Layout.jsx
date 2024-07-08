import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/navbar';
import ScrollToTop from '../components/scrollToTop';
import Footer from '../components/footer';

const Layout= () => {
    return (
        <div className="app-container">
            <ScrollToTop />
            <Navbar />
            <Outlet />
            <Footer />
        </div>
    );
};

export default Layout