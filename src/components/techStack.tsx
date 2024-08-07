import React from 'react';
import { PiCheckFat } from "react-icons/pi";
import { FaBlogger, FaInfoCircle } from "react-icons/fa";

const TechStack = () => {
    return (
        <div className='w-3/5 px-2 pt-4 mt-12'>
            <h1 className='text-primaryColor font-extrabold	text-4xl inline'>#TECH STACK</h1>
            <div className='has-tooltip inline'>
                <span className='tooltip rounded shadow-lg -mt-8'>3: 업무에 바로 적용 가능 <br/>2: 경험 기반으로 사용 가능 <br/>1: 사용 경험이 있음</span>
                <FaInfoCircle className='inline ml-2.5 mb-4 cursor-pointer' size='28'/>
            </div>
            <div className='flex w-full mt-5'>
                <div className='flex-initial w-72 tech-type ml-2'>
                    <PiCheckFat className='text-primaryColor mb-1.5 inline mr-3'/>
                    <span>Frontend</span>
                </div>
                <div className='flex-initial w-full'>
                    <div className='grid grid-cols-3 mb-4 mt-1.5'>
                        <span className='tech-cell'>VueJS
                            <span className='level-tag'>3</span>
                        </span>
                        <span className='tech-cell'>ReactJS
                             <span className='level-tag'>3</span>
                        </span>
                        <span className='tech-cell'>Javascript
                             <span className='level-tag'>3</span>
                        </span>
                    </div>
                    <div className='grid grid-cols-3 mb-4'>
                        <span className='tech-cell'>HTML/CSS
                             <span className='level-tag'>3</span>
                        </span>
                        <span className='tech-cell'>NodeJS
                             <span className='level-tag'>3</span>
                        </span>
                        <span className='tech-cell'>Typescript
                             <span className='level-tag'>3</span>
                        </span>
                    </div>
                    <div className='grid grid-cols-3 mb-4'>
                         <span className='tech-cell'>Vite
                             <span className='level-tag'>2</span>
                        </span>
                        <span className='tech-cell'>Webpack
                             <span className='level-tag'>2</span>
                        </span>
                        <span className='tech-cell'>Rollup
                             <span className='level-tag'>2</span>
                        </span>
                    </div>
                    <div className='grid grid-cols-3 mb-4'>
                       <span className='tech-cell'>Babel
                             <span className='level-tag'>2</span>
                        </span>
                        <span className='tech-cell'>Tailwind CSS
                             <span className='level-tag'>2</span>
                        </span>
                        <span className='tech-cell'>SCSS
                             <span className='level-tag'>2</span>
                        </span>
                    </div>
                    <div className='grid grid-cols-3 mb-4'>
                        <span className='tech-cell'>Zustand
                             <span className='level-tag'>2</span>
                        </span>
                        <span className='tech-cell'>Cypress
                             <span className='level-tag'>2</span>
                        </span>
                        <span className='tech-cell'>Storybook
                             <span className='level-tag'>2</span>
                        </span>
                    </div>
                    <div className='grid grid-cols-3 mb-4'>
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

            <div className='flex w-full mt-5'>
                <div className='flex-initial w-72 tech-type ml-2'>
                    <PiCheckFat className='text-primaryColor mb-1.5 inline mr-3'/>
                    <span>Backend</span>
                </div>
                <div className='flex-initial w-full'>
                    <div className='grid grid-cols-3 mb-4 mt-1.5'>
                        <span className='tech-cell'>Spring
                             <span className='level-tag'>3</span>
                        </span>
                        <span className='tech-cell'>SpringBoot
                             <span className='level-tag'>3</span>
                        </span>
                        <span className='tech-cell'>JAVA
                             <span className='level-tag'>3</span>
                        </span>
                    </div>
                    <div className='grid grid-cols-3 mb-4'>
                        <span className='tech-cell'>NodeJS
                             <span className='level-tag'>3</span>
                        </span>
                        <span className='tech-cell'>Tomcat
                             <span className='level-tag'>2</span>
                        </span>
                        <span className='tech-cell'>MyBatis
                             <span className='level-tag'>2</span>
                        </span>
                    </div>
                    <div className='grid grid-cols-3 mb-4'>
                         <span className='tech-cell'>MySQL
                             <span className='level-tag'>2</span>
                        </span>
                        <span className='tech-cell'>MariaDB
                             <span className='level-tag'>2</span>
                        </span>
                        <span className='tech-cell'>MongoDB
                             <span className='level-tag'>1</span>
                        </span>
                    </div>
                    <div className='grid grid-cols-3 mb-4'>
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

            <div className='flex w-full mt-5'>
                <div className='flex-initial w-72 tech-type ml-2'>
                    <PiCheckFat className='text-primaryColor mb-1.5 inline mr-3'/>
                    <span>Mobile</span>
                </div>
                <div className='flex-initial w-full'>
                    <div className='grid grid-cols-3 mb-4 mt-1.5'>
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

            <div className='flex w-full mt-5'>
                <div className='flex-initial w-72 tech-type ml-2'>
                    <PiCheckFat className='text-primaryColor mb-1.5 inline mr-3'/>
                    <span>DevOps</span>
                </div>
                <div className='flex-initial w-full'>
                    <div className='grid grid-cols-3 mb-4 mt-1.5'>
                        <span className='tech-cell'>Github
                             <span className='level-tag'>2</span>
                        </span>
                        <span className='tech-cell'>Gitlab
                             <span className='level-tag'>2</span>
                        </span>
                        <span className='tech-cell'>Docker
                             <span className='level-tag'>1</span>
                        </span>
                    </div>
                    <div className='grid grid-cols-3 mb-4'>
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