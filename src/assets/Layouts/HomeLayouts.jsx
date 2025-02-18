import React from 'react';
import Header from '../Components/Header';
import LatestNews from '../Components/LatestNews';
import Navbar from '../Components/Navbar';
import LeftNavbar from '../Components/layout_components/LeftNavbar';
import RightNavbar from '../Components/layout_components/RightNavbar';
import { Outlet } from 'react-router-dom';
import CategoryNews from '../../Pages/CategoryNews';



const HomeLayouts = () => {
    return (
        
        <div className='font-poppins'>
            <header><Header></Header>
            <section className="m w-auto">
                <LatestNews></LatestNews>
            </section>
            </header>
            <Outlet /> {/* Required to render child routes */}
            <nav className='w-11/12 mx-auto'>
              <Navbar>
              </Navbar>
            </nav>
            <main className='w-11/12 mx-auto pt-5 grid md:grid-cols-12 gap-3'>
            <aside className='col-span-3'>
                <LeftNavbar></LeftNavbar>
            </aside>
            <section className='col-span-6'>
            
            </section>
            <aside className='col-span-3'>
                <RightNavbar></RightNavbar>
            </aside>
            </main>
        </div>

        
    );
};




export default HomeLayouts;