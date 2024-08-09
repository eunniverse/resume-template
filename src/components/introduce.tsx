// @flow
import * as React from 'react';
import { FaCheck } from "react-icons/fa";

export const Introduce = () => {
    return (
        <div className='w-full max-w-screen-lg mx-auto px-4 pt-4'>
            <h1 className='text-primaryColor font-extrabold text-3xl sm:text-4xl'>#INTRODUCE</h1>
            <div className='flex flex-col sm:flex-row w-full'>
                <div className='flex-shrink-0 w-full sm:w-72'>
                    <img className='mt-4 mx-auto sm:mx-0' src='/images/avatar.png' alt='Avatar'/>
                </div>
                <div className='flex-grow w-full pt-4 sm:pt-0 sm:pl-6'>
                    <h1 className='text-xl sm:text-2xl font-medium'>
                        다양한 개발 경험을 기반으로 지속적인 성장을 해나아가는 6년차 개발자, 장은희입니다.
                    </h1>
                    <div className='pt-4'>
                        <FaCheck className='inline mr-3 fill-primaryColor'/>
                        <span className='text-base sm:text-lg'>Backend 개발 경험이 있어서 제품의 전체적인 구조를 빠르게 이해할 수 있습니다.</span>
                    </div>
                    <div className='pt-4'>
                        <FaCheck className='inline mr-3 fill-primaryColor'/>
                        <span className='text-base sm:text-lg'>테스트 자동화, 렌더링 속도 최적화 등 Frontend 관련 다양한 개선 경험이 있습니다.</span>
                    </div>
                    <div className='pt-4'>
                        <FaCheck className='inline mr-3 fill-primaryColor'/>
                        <span className='text-base sm:text-lg'>함께 성장하는 개발 문화를 추구하여 사내 주니어 스터디를 운영합니다.</span>
                    </div>
                    <div className='pt-4'>
                        <FaCheck className='inline mr-3 fill-primaryColor'/>
                        <span className='text-base sm:text-lg'>사이드 프로젝트 및 공부를 통한 산출물을 블로그에 기록합니다.</span>
                    </div>
                    <div className='pt-4'>
                        <FaCheck className='inline mr-3 fill-primaryColor'/>
                        <span className='text-base sm:text-lg'>좋은 UX에 대하여 끊임없이 고민하고, 늘 사용자 관점을 고안하며 개발합니다.</span>
                    </div>
                </div>
            </div>
        </div>
    );
};