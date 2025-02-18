import React from 'react';
import { Link } from 'react-router-dom';
import userIcon from "../Photos/user.png";
const Navbar = () => {
    return (
        <div >
            <div className='flex justify-between items-center'>
        <div className="nav space-x-5 m-auto">
            <Link to="/">Home</Link>
            <Link to="/career">Career</Link>
            <Link to="/about">About</Link>
        </div>
        <div className="login">
              <div className='flex gap-2 items-center'>
              <img src={userIcon} alt=""/>
              <button className='btn btn-neutral rounded-none'>Login</button>
                </div> 
        </div>
            </div>
         
        </div>
    );
};

export default Navbar;