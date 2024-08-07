import React from 'react';
import { PiCheckFat } from "react-icons/pi";

const TechStack = () => {
    return (
        <div className='w-3/5 px-2 pt-4 mt-12'>
            <h1 className='text-primaryColor font-extrabold	text-4xl'>#TECH STACK</h1>
            <div className='flex w-full mt-5'>
                <div className='flex-initial w-72 tech-type ml-2'>
                    <PiCheckFat className='text-primaryColor mb-1.5 inline mr-3'/>
                    <span>Frontend</span>
                </div>
                <div className='flex-initial w-full'>
                    <div className='grid grid-cols-3 mb-4 mt-1.5'>
                        <span className='tech-cell'>VueJS</span>
                        <span className='tech-cell'>ReactJS</span>
                        <span className='tech-cell'>Javascript</span>
                    </div>
                    <div className='grid grid-cols-3 mb-4'>
                        <span className='tech-cell'>HTML/CSS</span>
                        <span className='tech-cell'>NodeJS</span>
                        <span className='tech-cell'>Vite</span>
                    </div>
                    <div className='grid grid-cols-3 mb-4'>
                        <span className='tech-cell'>Webpack</span>
                        <span className='tech-cell'>Rollup</span>
                        <span className='tech-cell'>Babel</span>
                    </div>
                    <div className='grid grid-cols-3 mb-4'>
                        <span className='tech-cell'>Typescript</span>
                        <span className='tech-cell'>Tailwind CSS</span>
                        <span className='tech-cell'>SCSS</span>
                    </div>
                    <div className='grid grid-cols-3 mb-4'>
                        <span className='tech-cell'>Zustand</span>
                        <span className='tech-cell'>GraphQL</span>
                        <span className='tech-cell'>Pinia</span>
                    </div>
                    <div className='grid grid-cols-3 mb-4'>
                        <span className='tech-cell'>Cypress</span>
                        <span className='tech-cell'>Storybook</span>
                    </div>
                </div>
            </div>
            <hr className='mt-2'/>

            <div className='flex w-full mt-5'>
                <div className='flex-initial w-72 tech-type ml-2'>
                    <PiCheckFat className='text-primaryColor mb-1.5 inline mr-3'/>
                    <span>Backend</span>
                </div>
                <div className='flex-initial w-full'>
                    <div className='grid grid-cols-3 mb-4 mt-1.5'>
                        <span className='tech-cell'>Spring</span>
                        <span className='tech-cell'>SpringBoot</span>
                        <span className='tech-cell'>JAVA</span>
                    </div>
                    <div className='grid grid-cols-3 mb-4'>
                        <span className='tech-cell'>NodeJS</span>
                        <span className='tech-cell'>MyBatis</span>
                        <span className='tech-cell'>MySQL</span>
                    </div>
                    <div className='grid grid-cols-3 mb-4'>
                        <span className='tech-cell'>MariaDB</span>
                        <span className='tech-cell'>MongoDB</span>
                        <span className='tech-cell'>Redis</span>
                    </div>
                    <div className='grid grid-cols-3 mb-4'>
                        <span className='tech-cell'>nginx</span>
                        <span className='tech-cell'>Tomcat</span>
                        <span className='tech-cell'>Linux</span>
                    </div>
                </div>
            </div>
            <hr className='mt-2'/>

            <div className='flex w-full mt-5'>
                <div className='flex-initial w-72 tech-type ml-2'>
                    <PiCheckFat className='text-primaryColor mb-1.5 inline mr-3'/>
                    <span>Mobile</span>
                </div>
                <div className='flex-initial w-full'>
                    <div className='grid grid-cols-3 mb-4 mt-1.5'>
                        <span className='tech-cell'>Swift</span>
                        <span className='tech-cell'>Android</span>
                    </div>
                </div>
            </div>
            <hr className='mt-2'/>

            <div className='flex w-full mt-5'>
                <div className='flex-initial w-72 tech-type ml-2'>
                    <PiCheckFat className='text-primaryColor mb-1.5 inline mr-3'/>
                    <span>DevOps</span>
                </div>
                <div className='flex-initial w-full'>
                    <div className='grid grid-cols-3 mb-4 mt-1.5'>
                        <span className='tech-cell'>Github</span>
                        <span className='tech-cell'>Gitlab</span>
                        <span className='tech-cell'>Docker</span>
                    </div>
                    <div className='grid grid-cols-3 mb-4'>
                        <span className='tech-cell'>Jenkins</span>
                    </div>
                </div>
            </div>
            <hr className='mt-2'/>
        </div>
    );
};

export default TechStack;