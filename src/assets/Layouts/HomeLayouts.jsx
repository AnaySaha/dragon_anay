import React from 'react';
import Header from '../Components/Header';
import LatestNews from '../Components/LatestNews';
import Navbar from '../Components/Navbar';

const HomeLayouts = () => {
    return (
        <div className='font-poppins'>
            <header><Header></Header>
            <section className="m w-auto">
                <LatestNews></LatestNews>
            </section>
            </header>
            <nav className='w-11/12 mx-auto'>
              <Navbar>
              </Navbar>
            </nav>
            <main className='w-11/12 mx-auto pt-5 grid md:grid-cols-12 gap-3'>
            <aside className='col-span-3'>Left Navbar</aside>
            <section className='col-span-6'>Main Content</section>
            <aside className='col-span-3'>Right Navbar</aside>
            </main>
        </div>
    );
};

export default HomeLayouts;