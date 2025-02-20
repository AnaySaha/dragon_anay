import React from 'react';
import Header from '../Components/Header';
import LatestNews from '../Components/LatestNews';
import Navbar from '../Components/Navbar';
import LeftNavbar from '../Components/layout_components/LeftNavbar';
import RightNavbar from '../Components/layout_components/RightNavbar';
import { Outlet } from 'react-router-dom';

const HomeLayouts = () => {
    return (
        <div className='font-poppins'>
            <header>
                <Header />
                <section className="m w-auto">
                    <LatestNews />
                </section>
            </header>
            <nav className='w-11/12 mx-auto'>
                <Navbar />
            </nav>
            <main className='w-11/12 mx-auto pt-5 grid md:grid-cols-12 gap-3'>
                <aside className='col-span-3'>
                    <LeftNavbar />
                </aside>
                <section className='col-span-6'>
                    <Outlet /> {/* Required to render child routes */}
                </section>
                <aside className='col-span-3'>
                    <RightNavbar />
                </aside>
            </main>
        </div>
    );
};

export default HomeLayouts;
