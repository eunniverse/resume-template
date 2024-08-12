import React from 'react';
import {useTranslations} from "next-intl";

interface Props {
    index: number;
}

/**
 * #EDUCATION > 세부영역
 * @param index
 * @constructor
 */
const Education = ({index}:Props) => {
    const t = useTranslations(`educationList.${index}`);

    return (
        <>
            <h1 className='text-xl sm:text-2xl font-bold pt-1.5 inline italic'>
                {t('name')}
            </h1>
            <span className='other-experience-tag ml-2 text-xs sm:text-xs'>{t('status')}</span>
            <div className='pt-4'>
                <span className='text-sm sm:text-md'>{t('desc')}</span>
            </div>
            <hr className='mt-8 mb-3'/>
        </>
    );
};

export default Education;