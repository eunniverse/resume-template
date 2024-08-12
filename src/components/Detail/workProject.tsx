import React from 'react';
import {useTranslations} from "next-intl";
import {useTranslationArray} from "../../../utils/CommonUtil";

interface Props {
    index: number;
    office: string;
    myWorkCount: number;
    techCount: number;
}

/**
 * #WORK EXPERIENCE 의 오른쪽 영역
 * @param index
 * @param office
 * @param myWorkCount
 * @param techCount
 * @constructor
 */
const WorkProject = ({index, office, myWorkCount, techCount}: Props) => {
    const t = useTranslations('workExperience');
    const myWork = useTranslationArray(`workExperience.${office}.project.${index}.myWork`, myWorkCount);
    const techList = useTranslationArray(`workExperience.${office}.project.${index}.tech`, techCount);

    return (
        <div className='w-full'>
            <h1 className='text-lg sm:text-2xl font-bold pt-1.5'>
                {t(`${office}.project.${index}.title`)}
            </h1>
            <div className='date-text'>{t(`${office}.project.${index}.dueDate`)}</div>
            <div className='pt-4'>
                <div className='title-tag'>{t('intro')}</div>
                <span className='text-sm sm:text-md'>{t(`${office}.project.${index}.intro`)}</span>
            </div>
            <div className='pt-4'>
                <div className='title-tag'>{t('myWork')}</div>
                <ul className='list-disc pl-5'>
                    {myWork && myWork.map((work, index) => (
                        <li key={index} className='custom-list-disc'>
                            {work}
                        </li>
                    ))}
                </ul>
            </div>
            <div className='pt-4'>
                <div className='title-tag'>{t('tech')}</div>
                <div className='flex flex-wrap gap-2'>
                    {techList && techList.map((tech, index) => (
                    <span key={index} className='tech-stack-tag'>
                        {tech}
                    </span>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default WorkProject;