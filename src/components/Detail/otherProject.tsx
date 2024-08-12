import React from 'react';
import {FaCheck, FaNpm} from "react-icons/fa";
import {FaGithub} from "react-icons/fa6";
import {useTranslations} from "next-intl";
import {useTranslationArray} from "../../../utils/CommonUtil";

interface Props {
    index: number;
    techCount: number;
    npm?: any;
    github?: any;
}

/**
 * #OTHER EXPERIENCE 영역
 * @param index
 * @param techCount
 * @param npm
 * @param github
 * @constructor
 */
const OtherProject = ({index, techCount, npm, github}: Props) => {
    const t = useTranslations(`otherExperience.project.${index}`);
    const techList = useTranslationArray(`otherExperience.project.${index}.tech`, techCount);

    return (
        <>
            <h1 className='text-xl sm:text-2xl font-bold pt-1.5 inline italic'>
                {t('title')}
            </h1>
            <span className='other-experience-tag ml-2 text-xs sm:text-xs'>{t('role')}</span>
            <div className='pt-4'>
                <span className='text-sm sm:text-md'>{t('desc')}</span>
            </div>
            <div className='pt-4 flex space-x-4'>
                {npm ?
                    <a href={`${npm}`} target="_blank" rel="noopener noreferrer">
                        <FaNpm className='text-2xl sm:text-3xl text-red-500' />
                    </a>
                    :
                    <></>
                }
                <a href={`${github}`} target="_blank" rel="noopener noreferrer">
                    <FaGithub className='text-2xl sm:text-3xl' />
                </a>
            </div>
            <div className='pt-4 flex flex-wrap gap-2'>
                {techList && techList.map((tech, index) => (
                    <span key={index} className='tech-stack-tag'>{tech}</span>
                ))}
            </div>
            <hr className='mt-5 mb-5'/>
        </>
    );
};

export default OtherProject;