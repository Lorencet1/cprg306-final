import Link from 'next/link';
import React from 'react';

const Navbar = () => {
    return (
        <nav className="flex justify-between items-center px-20 py-10 w-full">
            <div>
                <span className="text-4xl font-bold">Lorence Talay</span>
            </div>
            <div className="flex space-x-10 text-xl text-black">
                <Link href="/" className="hover:bg-blue-500 hover:text-white px-4 py-2 rounded-full transition duration-300 ease-in-out">
                    Homepage
                </Link>
                <Link href="/about" className="hover:bg-blue-500 hover:text-white px-4 py-2 rounded-full transition duration-300 ease-in-out">
                    About
                </Link>
                <Link href="/projects" className="hover:bg-blue-500 hover:text-white px-4 py-2 rounded-full transition duration-300 ease-in-out">
                    Projects
                </Link>
                <Link href="/contact" className="hover:bg-blue-500 hover:text-white px-4 py-2 rounded-full transition duration-300 ease-in-out">
                    Contact
                </Link>
            </div>
        </nav>
    );
};

export default Navbar;



