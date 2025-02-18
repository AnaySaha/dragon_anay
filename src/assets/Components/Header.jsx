import React from 'react';
import logo from "../Photos/logo.png";
import moment from 'moment';
const Header = () => {
    return (
        <div className="flex flex-col justify-center items-center gap-2 py-4">
         <div className="logo">
         <img className="w-[300px]" src={logo} alt="" />
         </div>
         <h2 className="text-gray-400">Journalism Without Fear or Favour</h2>
         <p>{moment().format('MMMM Do YYYY, h:mm:ss a')}</p>
    
        </div>
    );
};

export default Header;