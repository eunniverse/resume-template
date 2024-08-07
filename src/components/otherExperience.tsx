import React from 'react';
import { FaNpm } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";

const OtherExperience = () => {
    return (
        <div className="w-3/5 px-2 pt-4 mt-12">
            <h1 className='text-primaryColor font-extrabold	text-4xl pb-6'>#OTHER EXPERIENCE</h1>
            <div className='flex w-full'>
                <div className='flex-initial w-full'>
                    <h1 className='text-2xl font-bold pt-1.5 inline italic'>
                        react-scroll-header-loading
                    </h1>
                    <span className='other-experience-tag'>Owner</span>
                    <div className='pt-4'>
                        <span className='text-md'>Javascript의 scroll event 기반으로 움직이는 상단 loading bar 컴포넌트입니다. 출시한지 2주만에 300회 이상의 다운로드를 기록하고 있습니다.</span>
                    </div>
                    <div className='pt-4 flex space-x-4'>
                        <a href="https://www.npmjs.com/package/react-scroll-header-loading" target="_blank" rel="noopener noreferrer">
                            <FaNpm color='red' className='text-5xl inline' />
                        </a>
                        <a href="https://github.com/eunniverse/react-scroll-header-loading" target="_blank" rel="noopener noreferrer">
                            <FaGithub color='black' className='text-4xl ml-1 mt-1.5' />
                        </a>
                    </div>
                    <div className='pt-4'>
                        <span className='tech-stack-tag'>ReactJS</span>
                        <span className='tech-stack-tag'>Javascript</span>
                        <span className='tech-stack-tag'>rollup</span>
                        <span className='tech-stack-tag'>Babel</span>
                    </div>
                    <hr className='mt-5 mb-5'/>

                    {/* AI 챌린지 */}
                    <h1 className='text-2xl font-bold pt-1.5 inline italic'>
                        조코딩 AI 해커톤 with Google 참여 - 나만의 비타민 AI 솔루션 서비스
                    </h1>
                    <span className='other-experience-tag'>Frontend 개발</span>
                    <div className='pt-4'>
                        <span className='text-md'>Gemini API를 통해 영양제 추천, 영양제 조합을 제공합니다. Frontend 개발을 혼자 담당하였고, 기술환경 세팅, Skeleton loading 구현 등을 4일 동안 개발했습니다. </span>
                    </div>
                    <div className='pt-4 flex space-x-4'>
                        <a href="https://github.com/hyunzi/MyVitaminsAi" target="_blank" rel="noopener noreferrer">
                            <FaGithub color='black' className='text-4xl ml-1 mt-1.5' />
                        </a>
                    </div>
                    <div className='pt-4'>
                        <span className='tech-stack-tag'>ReactJS</span>
                        <span className='tech-stack-tag'>Javascript</span>
                        <span className='tech-stack-tag'>SCSS</span>
                        <span className='tech-stack-tag'>Tailwind CSS</span>
                        <span className='tech-stack-tag'>Zustand</span>
                        <span className='tech-stack-tag'>Babel</span>
                    </div>
                    <hr className='mt-5 mb-3'/>

                    {/* resume-form */}
                    <h1 className='text-2xl font-bold pt-1.5 inline italic'>
                        resume-form
                    </h1>
                    <span className='other-experience-tag'>Owner</span>
                    <div className='pt-4'>
                        <span className='text-md'>NextJS와 Typescript 기반 저의 이력서 웹을 구현했습니다. Github을 통해 배포를 진행했습니다.</span>
                    </div>
                    <div className='pt-4 flex space-x-4'>
                        <a href="https://github.com/eunniverse/resume-form" target="_blank" rel="noopener noreferrer">
                            <FaGithub color='black' className='text-4xl ml-1 mt-1.5' />
                        </a>
                    </div>
                    <div className='pt-4'>
                        <span className='tech-stack-tag'>ReactJS</span>
                        <span className='tech-stack-tag'>Typescript</span>
                        <span className='tech-stack-tag'>NextJS</span>
                        <span className='tech-stack-tag'>SCSS</span>
                        <span className='tech-stack-tag'>Tailwind CSS</span>
                        <span className='tech-stack-tag'>Babel</span>
                    </div>
                    <hr className='mt-5 mb-3'/>

                    {/* AI 입사 컨설팅 */}
                    <h1 className='text-2xl font-bold pt-1.5 inline italic'>
                        AI 입사 컨설팅
                    </h1>
                    <span className='other-experience-tag'>Frontend 개발</span>
                    <div className='pt-4'>
                        <span className='text-md'>사용자의 코딩 수준, 진행한 프로젝트 등 여러 정보를 AI 로 처리하여 회사를 추천합니다. Frontend 개발을 전반적으로 담당하며, 진행 중입니다.</span>
                    </div>
                    <div className='pt-4 flex space-x-4'>
                        <a href="https://github.com/AI-Employment-Consulting" target="_blank" rel="noopener noreferrer">
                            <FaGithub color='black' className='text-4xl ml-1 mt-1.5' />
                        </a>
                    </div>
                    <div className='pt-4'>
                        <span className='tech-stack-tag'>ReactJS</span>
                        <span className='tech-stack-tag'>Typescript</span>
                        <span className='tech-stack-tag'>Vite</span>
                        <span className='tech-stack-tag'>Zustand</span>
                        <span className='tech-stack-tag'>Tailwind CSS</span>
                        <span className='tech-stack-tag'>Storybook</span>
                        <span className='tech-stack-tag'>Cypress</span>
                    </div>
                    <hr className='mt-5 mb-7'/>

                    {/* 인하대학교 */}
                    <h1 className='text-2xl font-bold pt-1.5 inline italic'>
                        인하대학교
                    </h1>
                    <span className='other-experience-tag'>졸업예정</span>
                    <div className='pt-4'>
                        <span className='text-md'>소프트웨어융합공학과 21학번으로, 2025년 2월 졸업예정입니다.</span>
                    </div>
                    <hr className='mt-8 mb-3'/>

                    {/* 미림여자정보과학고등학교 */}
                    <h1 className='text-2xl font-bold pt-1.5 inline italic'>
                        미림여자정보과학고등학교
                    </h1>
                    <span className='other-experience-tag'>졸업</span>
                    <div className='pt-4'>
                        <span className='text-md'>2014년도 뉴미디어 솔루션과에 입학한 후 2016년 졸업했습니다. 이후 바로 웹개발자로서 커리어를 시작했습니다.</span>
                    </div>
                    <hr className='mt-8 mb-3'/>
                </div>
            </div>
        </div>
    );
};

export default OtherExperience;