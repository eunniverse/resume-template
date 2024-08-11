import React from 'react';
import { FaNpm } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import {useTranslations} from "next-intl";
import OtherProject from "@/components/Detail/otherProject";

const OtherExperience = () => {
    const t = useTranslations('otherExperience');

    return (
        <div className="w-full max-w-screen-lg mx-auto px-4 pt-4 mt-12">
            <h1 className='h1-title pb-6'>{t('title')}</h1>
            <div className='flex flex-col w-full'>
                <div className='w-full'>
                    <OtherProject index={0} techCount={4} github={'https://www.npmjs.com/package/react-scroll-header-loading'} npm={'https://github.com/eunniverse/react-scroll-header-loading'}/>
                    <OtherProject index={1} techCount={6} github={'https://github.com/hyunzi/MyVitaminsAi'}/>
                    <OtherProject index={2} techCount={6} github={'https://github.com/eunniverse/resume-template'}/>
                    <OtherProject index={3} techCount={7} github={'https://github.com/AI-Employment-Consulting'}/>
                </div>
            </div>
        </div>
    );
};

export default OtherExperience;