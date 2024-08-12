import React from 'react';
import {FaInfoCircle} from "react-icons/fa";
import {useTranslations} from "next-intl";
import TechStackByType from "@/components/Detail/techStackByType";

/**
 * #TECH STACK 영역
 * @constructor
 */
const TechStack = () => {
    const t = useTranslations('techStack');

    return (
        <div className='w-full max-w-screen-lg mx-auto px-4 pt-4 mt-12'>
            <h1 className='h1-title inline'>{ t('title') }</h1>
            <div className='has-tooltip inline'>
                <span className='tooltip rounded shadow-lg mt-2 sm:-mt-8 text-xs sm:text-sm'>
                    { t('info') }
                </span>
                <FaInfoCircle className='inline ml-2.5 mb-2 sm:mb-4 cursor-pointer' size='20'/>
            </div>

            <TechStackByType type={'frontend'} length={17}/>
            <hr className='mt-2'/>

            <TechStackByType type={'backend'} length={11}/>
            <hr className='mt-2'/>

            <TechStackByType type={'mobile'} length={2}/>
            <hr className='mt-2'/>

            <TechStackByType type={'devops'} length={5}/>
            <hr className='mt-2'/>
        </div>
    );
};

export default TechStack;