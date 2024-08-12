import React from 'react';
import {useTranslations} from "next-intl";
import Education from "@/components/Detail/education";

/**
 * #EDUCATION 영역
 * @constructor
 */
const EducationList = () => {
    const t = useTranslations('educationList');

    return (
        <div className="w-full max-w-screen-lg mx-auto px-4 pt-4 mt-12">
            <h1 className='h1-title pb-6'>{t('title')}</h1>
            <div className='flex flex-col w-full'>
                <div className='w-full'>
                    <Education index={0}/>
                </div>
            </div>
        </div>
    );
};

export default EducationList;