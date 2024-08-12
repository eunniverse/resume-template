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
                    <OtherProject index={0} techCount={4} github={'{GITURL}'} npm={'{npmURL}'}/>
                </div>
            </div>
        </div>
    );
};

export default OtherExperience;