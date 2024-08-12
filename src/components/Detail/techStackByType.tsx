import React from 'react';
import {PiCheckFat} from "react-icons/pi";
import {useTranslations} from "next-intl";
import {useTranslationArray} from "../../../utils/CommonUtil";

interface Props {
    type: string; // frontend, backend ...
    length: number; // 각 type 별 기재할 기술스택
}

const TechStackByType = ({type, length} :Props) => {
    const t = useTranslations('techStack');
    const tech = useTranslationArray(`techStack.${type}.tech`, length);

    return (
        <div className='flex w-full mt-5 flex-col sm:flex-row'>
            <div className='flex-shrink-0 w-full sm:w-72 tech-type ml-2 mb-4 sm:mb-0'>
                <PiCheckFat className='text-primaryColor mb-1.5 inline mr-2 sm:mr-3'/>
                <span className='text-lg sm:text-xl'>{ t('type.' + type) }</span>
            </div>
            <div className='flex-grow w-full'>
                <div className='grid grid-cols-2 sm:grid-cols-3 gap-4 mb-4 mt-1.5'>
                    {tech && tech.map((text, index) => (
                        <span className='tech-cell' key={index}>
                            {text}
                            <span className='level-tag'>{t(`${type}.level.${index}`)}</span>
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default TechStackByType;