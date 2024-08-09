import React from 'react';
import { PiCheckFat } from "react-icons/pi";
import { FaBlogger, FaInfoCircle } from "react-icons/fa";

const TechStack = () => {
    return (
        <div className='w-full max-w-screen-lg mx-auto px-4 pt-4 mt-12'>
            <h1 className='text-primaryColor font-extrabold text-3xl sm:text-4xl inline'>#TECH STACK</h1>
            <div className='has-tooltip inline'>
                <span className='tooltip rounded shadow-lg mt-2 sm:-mt-8 text-xs sm:text-sm'>
                    3: 업무에 바로 적용 가능 <br/>2: 경험 기반으로 사용 가능 <br/>1: 사용 경험이 있음
                </span>
                <FaInfoCircle className='inline ml-2.5 mb-2 sm:mb-4 cursor-pointer' size='20'/>
            </div>
            <div className='flex w-full mt-5 flex-col sm:flex-row'>
                <div className='flex-shrink-0 w-full sm:w-72 tech-type ml-2 mb-4 sm:mb-0'>
                    <PiCheckFat className='text-primaryColor mb-1.5 inline mr-2 sm:mr-3'/>
                    <span className='text-lg sm:text-xl'>Frontend</span>
                </div>
                <div className='flex-grow w-full'>
                    <div className='grid grid-cols-2 sm:grid-cols-3 gap-4 mb-4 mt-1.5'>
                        <span className='tech-cell'>VueJS
                            <span className='level-tag'>3</span>
                        </span>
                        <span className='tech-cell'>ReactJS
                             <span className='level-tag'>3</span>
                        </span>
                        <span className='tech-cell'>Javascript
                             <span className='level-tag'>3</span>
                        </span>
                        <span className='tech-cell'>HTML/CSS
                             <span className='level-tag'>3</span>
                        </span>
                        <span className='tech-cell'>NodeJS
                             <span className='level-tag'>3</span>
                        </span>
                        <span className='tech-cell'>Typescript
                             <span className='level-tag'>3</span>
                        </span>
                        <span className='tech-cell'>Vite
                             <span className='level-tag'>2</span>
                        </span>
                        <span className='tech-cell'>Webpack
                             <span className='level-tag'>2</span>
                        </span>
                        <span className='tech-cell'>Rollup
                             <span className='level-tag'>2</span>
                        </span>
                        <span className='tech-cell'>Babel
                             <span className='level-tag'>2</span>
                        </span>
                        <span className='tech-cell'>Tailwind CSS
                             <span className='level-tag'>2</span>
                        </span>
                        <span className='tech-cell'>SCSS
                             <span className='level-tag'>2</span>
                        </span>
                        <span className='tech-cell'>Zustand
                             <span className='level-tag'>2</span>
                        </span>
                        <span className='tech-cell'>Cypress
                             <span className='level-tag'>2</span>
                        </span>
                        <span className='tech-cell'>Storybook
                             <span className='level-tag'>2</span>
                        </span>
                        <span className='tech-cell'>GraphQL
                             <span className='level-tag'>1</span>
                        </span>
                        <span className='tech-cell'>Pinia
                             <span className='level-tag'>1</span>
                        </span>
                    </div>
                </div>
            </div>
            <hr className='mt-2'/>

            <div className='flex w-full mt-5 flex-col sm:flex-row'>
                <div className='flex-shrink-0 w-full sm:w-72 tech-type ml-2 mb-4 sm:mb-0'>
                    <PiCheckFat className='text-primaryColor mb-1.5 inline mr-2 sm:mr-3'/>
                    <span className='text-lg sm:text-xl'>Backend</span>
                </div>
                <div className='flex-grow w-full'>
                    <div className='grid grid-cols-2 sm:grid-cols-3 gap-4 mb-4 mt-1.5'>
                        <span className='tech-cell'>Spring
                             <span className='level-tag'>3</span>
                        </span>
                        <span className='tech-cell'>SpringBoot
                             <span className='level-tag'>3</span>
                        </span>
                        <span className='tech-cell'>JAVA
                             <span className='level-tag'>3</span>
                        </span>
                        <span className='tech-cell'>NodeJS
                             <span className='level-tag'>3</span>
                        </span>
                        <span className='tech-cell'>Tomcat
                             <span className='level-tag'>2</span>
                        </span>
                        <span className='tech-cell'>MyBatis
                             <span className='level-tag'>2</span>
                        </span>
                        <span className='tech-cell'>MySQL
                             <span className='level-tag'>2</span>
                        </span>
                        <span className='tech-cell'>MariaDB
                             <span className='level-tag'>2</span>
                        </span>
                        <span className='tech-cell'>MongoDB
                             <span className='level-tag'>1</span>
                        </span>
                        <span className='tech-cell'>nginx
                             <span className='level-tag'>1</span>
                        </span>
                        <span className='tech-cell'>Redis
                             <span className='level-tag'>1</span>
                        </span>
                    </div>
                </div>
            </div>
            <hr className='mt-2'/>

            <div className='flex w-full mt-5 flex-col sm:flex-row'>
                <div className='flex-shrink-0 w-full sm:w-72 tech-type ml-2 mb-4 sm:mb-0'>
                    <PiCheckFat className='text-primaryColor mb-1.5 inline mr-2 sm:mr-3'/>
                    <span className='text-lg sm:text-xl'>Mobile</span>
                </div>
                <div className='flex-grow w-full'>
                    <div className='grid grid-cols-2 sm:grid-cols-3 gap-4 mb-4 mt-1.5'>
                        <span className='tech-cell'>Swift
                             <span className='level-tag'>2</span>
                        </span>
                        <span className='tech-cell'>Android
                             <span className='level-tag'>2</span>
                        </span>
                    </div>
                </div>
            </div>
            <hr className='mt-2'/>

            <div className='flex w-full mt-5 flex-col sm:flex-row'>
                <div className='flex-shrink-0 w-full sm:w-72 tech-type ml-2 mb-4 sm:mb-0'>
                    <PiCheckFat className='text-primaryColor mb-1.5 inline mr-2 sm:mr-3'/>
                    <span className='text-lg sm:text-xl'>DevOps</span>
                </div>
                <div className='flex-grow w-full'>
                    <div className='grid grid-cols-2 sm:grid-cols-3 gap-4 mb-4 mt-1.5'>
                        <span className='tech-cell'>Github
                             <span className='level-tag'>2</span>
                        </span>
                        <span className='tech-cell'>Gitlab
                             <span className='level-tag'>2</span>
                        </span>
                        <span className='tech-cell'>Docker
                             <span className='level-tag'>1</span>
                        </span>
                        <span className='tech-cell'>Jenkins
                             <span className='level-tag'>1</span>
                        </span>
                        <span className='tech-cell'>Teamcity
                             <span className='level-tag'>1</span>
                        </span>
                    </div>
                </div>
            </div>
            <hr className='mt-2'/>
        </div>
    );
};

export default TechStack;