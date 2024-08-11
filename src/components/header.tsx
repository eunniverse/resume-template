// @flow
'use client';

import { useState } from 'react';
import { FaBlogger , FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { EmailModal } from "@/components/Detail/EmailModal";
import {useTranslations} from "next-intl";
import HeaderIcon from "@/components/Detail/headerIcon";
import LocaleSwitcher from "@/components/Detail/localeSwitcher";


export const Header = () => {
    const [show, setShow] = useState(false);
    const t = useTranslations('header');

    const openModal = () => setShow(true);
    const closeModal = () => setShow(false);

    const handleBlogClickEvent = (event: React.MouseEvent<HTMLElement>) => {
        event.preventDefault();
        window.open('https://velog.io/@eunivverse/posts');
    }

    const handleGitClickEvent = (event: React.MouseEvent<HTMLElement>) => {
        event.preventDefault();
        window.open('https://github.com/eunniverse');
    }

    // @ts-ignore
    return (
        <div className='w-full max-w-screen-lg mx-auto px-4 pt-8'>
            <LocaleSwitcher/>
            <div className='flex flex-col sm:flex-row sm:justify-between'>
                <div className='text-center sm:text-left'>
                    <div className='name-div text-2xl sm:text-4xl'>{ t('koDisplayName') + '(' + t('enDisplayName') + ')'}</div>
                    <h2 className='pt-1 occupation-div text-base sm:text-lg'>{ t('job')}</h2>
                </div>
                <div className='flex justify-center sm:justify-end pt-4 sm:pt-2'>
                    <HeaderIcon
                        IconComponent={FaBlogger}
                        tooltipText={ t('iconList.blogTooltipText') }
                        handleClick={handleBlogClickEvent}
                    />
                    <HeaderIcon
                        IconComponent={FaGithub}
                        tooltipText={ t('iconList.gitTooltipText') }
                        handleClick={handleGitClickEvent}
                    />
                    <HeaderIcon
                        IconComponent={MdEmail}
                        tooltipText={ t('iconList.emailTooltipText') }
                        handleClick={openModal}
                    />
                </div>
            </div>
            <EmailModal show={show} onClose={closeModal} onShow={openModal}/>
        </div>
    );
};