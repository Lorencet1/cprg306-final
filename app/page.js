import React from 'react';
import Image from 'next/image';

const HomePage = () => {
    return (
        <div className="flex flex-col items-start justify-center min-h-screen ml-20 bg-gradient-to-r from-black to-gray-300">
            <div className="flex justify-between w-full mt-20">
                <header className="flex-grow mt-20">
                    <h1 className='text-7xl text-white'>Hi, I'm Lorence</h1>
                    <br></br>
                    <p className='text-3xl text-white'>Welcome to my portfolio</p>
                </header>

                <div className="flex flex-col items-center mr-20 text-black mt-20">
                    <h1 className='text-7xl'>&lt;Coder&gt;</h1>
                    <p className="text-2xl mt-8 max-w-md mx-auto text-center">
                        An aspiring front-end developer dedicated to crafting standout, user-friendly digital experiences.
                    </p>
                </div>
            </div>

            <div className="flex justify-center w-full">
                <Image
                    src="/myGif/linux-computer.gif"
                    alt="Linux Computer"
                    width={400}
                    height={400}
                    layout="intrinsic"
                />
            </div>
        </div>
    );
};

export default HomePage;
