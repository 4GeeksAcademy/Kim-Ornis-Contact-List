import React from 'react';
import { Outlet } from 'react-router-dom/dist';
import Navbar from '../components/navbar';
import ScrollToTop from '../components/scrollToTop';
import Footer from '../components/footer';

const Layout= () => {
    return (
        <div className="app-container">
            <ScrollToTop>
                <Navbar />
                <Outlet />
                <Footer />
            </ScrollToTop>
        </div>
    );
};

export default Layout