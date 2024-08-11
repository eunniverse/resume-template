// @flow
import * as React from 'react';
import { FaCheck } from "react-icons/fa";
import {useTranslations} from "next-intl";
import { useTranslationArray } from '../../utils/CommonUtil';

export const Introduce = () => {
    const t = useTranslations('introduce');
    const descriptions = useTranslationArray('introduce.commentList', 5);

    return (
        <div className='w-full max-w-screen-lg mx-auto px-4 pt-4'>
            <h1 className='h1-title'>{t('title')}</h1>
            <div className='flex flex-col sm:flex-row w-full'>
                <div className='flex-shrink-0 w-full sm:w-72'>
                    <img className='mt-4 mx-auto sm:mx-0' src='/images/avatar.png' alt='Avatar'/>
                </div>
                <div className='flex-grow w-full pt-4 sm:pt-0 sm:pl-6'>
                    <h1 className='text-xl sm:text-2xl font-medium'>
                        { t('headerComment') }
                    </h1>
                    {descriptions && descriptions.map((text, index) => (
                        <div className='pt-4' key={index}>
                            <FaCheck className='inline mr-3 fill-primary'/>
                            <span className='text-base sm:text-lg'>{text}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};