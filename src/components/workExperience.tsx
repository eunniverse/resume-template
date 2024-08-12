// @flow
import * as React from 'react';
import {useTranslations} from "next-intl";
import WorkOffice from "@/components/Detail/workOffice";
import {useTranslationArray} from "../../utils/CommonUtil";
import WorkProject from "@/components/Detail/workProject";

export const WorkExperience = () => {
    const t = useTranslations('workExperience');

    return (
        <div className="w-full max-w-screen-lg mx-auto px-4 pt-4 mt-12">
            <h1 className='h1-title pb-6'>{t('title')}</h1>
            <div className='flex flex-col sm:flex-row w-full'>
                <WorkOffice
                    companyName={t('company1.name')}
                    roles={useTranslationArray('workExperience.company1.roles', 2)}
                    hireDate={t('company1.hireDate')}
                    teamInfo={t('company1.teamInfo')} />

                <div className='flex-grow w-full'>
                    <WorkProject index={0} office={'company1'} myWorkCount={3} techCount={6}/>
                    <hr className='mt-5 mb-3'/>
                </div>
            </div>

            <div className='flex flex-col sm:flex-row w-full'>
                <WorkOffice
                    companyName={t('company2.name')}
                    roles={useTranslationArray('workExperience.company2.roles', 2)}
                    hireDate={t('company2.hireDate')}
                    teamInfo={t('company2.teamInfo')} />

                <div className='flex-grow w-full'>
                    <WorkProject index={0} office={'company2'} myWorkCount={3} techCount={6}/>
                    <hr className='mt-5 mb-3'/>
                </div>
            </div>
        </div>
    );
};