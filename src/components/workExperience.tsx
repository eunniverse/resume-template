// @flow
import * as React from 'react';
import {useTranslations} from "next-intl";
import WorkOffice from "@/components/workOffice";
import {useTranslationArray} from "../../utils/CommonUtil";
import WorkProject from "@/components/Detail/workProject";

export const WorkExperience = () => {
    const t = useTranslations('workExperience');

    return (
        <div className="w-full max-w-screen-lg mx-auto px-4 pt-4 mt-12">
            <h1 className='h1-title pb-6'>{t('title')}</h1>
            <div className='flex flex-col sm:flex-row w-full'>
                <WorkOffice
                    companyName={t('pnpSecure.name')}
                    roles={useTranslationArray('workExperience.pnpSecure.roles', 4)}
                    hireDate={t('pnpSecure.hireDate')}
                    teamInfo={t('pnpSecure.teamInfo')} />

                <div className='flex-grow w-full'>
                    <WorkProject index={0} office={'pnpSecure'} myWorkCount={5} techCount={9}/>
                    <hr className='mt-5 mb-3'/>
                    <WorkProject index={1} office={'pnpSecure'} myWorkCount={5} techCount={10}/>
                    <hr className='mt-5 mb-3'/>
                    <WorkProject index={2} office={'pnpSecure'} myWorkCount={3} techCount={5}/>
                    <hr className='mt-5 mb-3'/>
                    <WorkProject index={3} office={'pnpSecure'} myWorkCount={3} techCount={2}/>
                    <hr className='mt-5 mb-3'/>
                    <WorkProject index={4} office={'pnpSecure'} myWorkCount={3} techCount={8}/>
                    <hr className='mt-5 mb-3'/>
                </div>
            </div>

            <div className='flex flex-col sm:flex-row w-full'>
                <WorkOffice
                    companyName={t('KLNet.name')}
                    roles={useTranslationArray('workExperience.KLNet.roles', 2)}
                    hireDate={t('KLNet.hireDate')}
                    teamInfo={t('KLNet.teamInfo')} />

                <div className='flex-grow w-full'>
                    <WorkProject index={0} office={'KLNet'} myWorkCount={3} techCount={6}/>
                    <hr className='mt-5 mb-3'/>
                    <WorkProject index={1} office={'KLNet'} myWorkCount={3} techCount={7}/>
                    <hr className='mt-5 mb-3'/>
                </div>
            </div>
        </div>
    );
};