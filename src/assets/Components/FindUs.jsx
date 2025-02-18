import React from 'react';
import { FaFacebook, FaGithub, FaInstagram } from 'react-icons/fa';

const FindUs = () => {
    return (
        <div>
             <h2 className='font-semibold mt-5 bg-gray-500 '>Find Us On</h2>
            <div className="join flex join-vertical  *:bg-base-100 ">
            <button className="btn join-item justify-start">
                <FaFacebook>   
                </FaFacebook>
                Facebook</button>
            <button className="btn join-item justify-start">
                <FaInstagram></FaInstagram>
                Instagram</button>
            <button className="btn join-item justify-start">
                <FaGithub></FaGithub>
                GitHub</button>
</div>

        </div>
    );
};

export default FindUs;