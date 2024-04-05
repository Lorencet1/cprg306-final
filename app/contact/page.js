import React from 'react';
import Navbar from '@/components/navbar';
import Image from 'next/image'; // Import the Image component
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Contact = () => {
    return (
        <div className="min-h-screen bg-gradient-to-r from-black to-gray-300">
            <Navbar />
            <h1 className="text-center text-5xl p-20">Contacts</h1>
            <div className="flex flex-col md:flex-row justify-center items-center">
                <div className="w-full md:w-1/2 flex flex-col items-center space-y-10 p-10">
                    <div className="flex space-x-10">
                        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                            <FaFacebook size={100} />
                        </a>
                        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                            <FaInstagram size={100} />
                        </a>
                        <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                            <FaLinkedin size={100} />
                        </a>
                        <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                            <FaTwitter size={100} />
                        </a>
                    </div>
                    <p className='text-3xl font-bold'>Lorence.talay@edu.sait.ca</p>
                </div>
                
                <div className="w-full md:w-1/2 flex justify-center p-10">
                    <Image src="/myGif/happy-dance.gif" alt="Happy Dance" width={500} height={500} />
                </div>
            </div>
        </div>
    );
};

export default Contact;
