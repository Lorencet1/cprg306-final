import React from 'react';
import Navbar from '@/components/navbar';

const AboutMePage = () => {
    const skills = ['JavaScript', 'Python', 'Java', 'C#', 'JavaScript', 'Swift', 'Kotlin', 'TypeScript', 'SQL', 'HTML', 'CSS', 'GitHub', 'Git'];

    return (
        <div className="min-h-screen bg-gradient-to-r from-black to-gray-300">
            <Navbar />
            <div className="pt-10 pb-20 flex">
                <div className="w-1/2 pl-40 pt-20">
                    <h1 className="text-3xl font-bold text-center mb-4 text-white">About Me</h1>
                    <div className="text-lg text-white space-y-4 text-center whitespace-normal">
                        <p>
                            Hello, I'm Lorence Talay. My professional journey is deeply rooted in a passion for design and an active interest in front-end development. I see design as a tool for storytelling, where aesthetics meet function to create meaningful user experiences. In front-end development, I find the perfect outlet for bringing these designs to life, ensuring they are not only visually appealing but also intuitive and accessible.
                        </p>
                        <p>
                            I'm committed to staying at the forefront of industry trends and technologies, continually refining my skills to blend creativity with technical prowess. My goal is to create digital experiences that resonate on a personal level, seamlessly integrating form and function.
                        </p>
                        <p>
                            If you're seeking to elevate your digital presence with thoughtful design and sophisticated front-end solutions, I'd love to explore how we can collaborate. Let's craft something remarkable together.
                        </p>
                    </div>
                </div>
                <div className="w-1/3 ml-40">
                    <img src="/myGif/magic-computer.gif" alt="Magic Computer" />
                </div>
            </div>
            <div className="pt-10 pb-30 flex">
                <div className="w-1/2 pl-40  pr-20">
                    <h2 className="text-2xl font-bold text-center mb-4 text-white">Skills</h2>
                    <ul className="text-lg text-white space-y-9 text-center">
                        {skills.map((skill, index) => (
                            <li key={index} className="text-2xl border mt-5 p-4 m-3 inline-block">{skill}</li>
                        ))}
                    </ul>
                </div>
                <div className="w-1/2 pr-40 pt-20">
                    <p className="text-xl text-gray-900 font-bold text-center">
                        My journey in coding has been quite the adventure, picking up all sorts of tricks and tools along the way. From building back-end systems front-end interfaces, I've learned to mix function with a bit of flair. Mobile app development has been a blast, diving into what makes users tick and creating interfaces that just feel right. 
                    </p>
                    <p className="text-xl text-gray-900 font-bold text-center mt-5 mb-20">
                        Collaboration is key, too. I love how version control systems let us all work together seamlessly. But at the end of the day, it's all about creating digital experiences that people really connect with, making tech feel more like a friend than just lines of code.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default AboutMePage;