import React from 'react';
import Navbar from '@/components/navbar';
import Image from 'next/image';

const PersonalProjects = () => {
    return (
        <div className="min-h-screen bg-gradient-to-r from-black to-gray-300">
            <Navbar />
            <h1 className="text-center text-5xl p-20">Personal Projects</h1>
            <div className="flex flex-col pl-20 p-200 ">
                <div className="flex flex-row">
                    <div className="w-1/2 p-40 text-3xl font-bold">
                        <p>
                            I'm working on creating a fitness app designed to personalize the workout experience. 
                            It  tracks sets and reps, and smartly recommends exercises focusing on users' 
                            specific goals for muscle groups such as the chest, back, legs, arms, and shoulders. 
                            This app aims to be an intuitive fitness partner, offering a blend of guidance and tracking to help
                            users achieve their ideal physique effectively.
                        </p>
                    </div>
                    <div className="w-1/2 p-10 pl-60">
                        <Image src="/myGif/fitness.jpg" alt="Fitness" width={300} height={400}/>
                    </div>
                </div>
                <div className="flex flex-row-reverse">
                    <div className="w-1/2 p-40 text-3xl mt-auto ml-auto font-bold text-black">
                        <p>
                            I'm currently developing a chess game utilizing JavaScript for the core logic and HTML5 Canvas for rendering. 
                            JavaScript will manage the game's mechanics, such as enforcing chess rules and handling piece movements, 
                            while HTML5 Canvas will be employed to visually present the board and pieces. 
                            This method provides a straightforward yet effective approach to creating an engaging web-based game 
                            without relying on complex frameworks or libraries.
                        </p>
                    </div>
                    <div className="w-1/2 p-20 pl-60">
                        <Image src="/myGif/chess.jpg" alt="Chess" width={600} height={400}/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PersonalProjects;
