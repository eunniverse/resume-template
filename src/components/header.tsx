// @flow
'use client';

import { useState } from 'react';
import { FaBlogger , FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { EmailModal } from "@/components/Detail/EmailModal";
import {useTranslations} from "next-intl";

export const Header = () => {
    const [show, setShow] = useState(false);
    const t = useTranslations('header');

    const openModal = () => setShow(true);
    const closeModal = () => setShow(false);

    // @ts-ignore
    return (
        <div className='w-full max-w-screen-lg mx-auto px-4 pt-8'>
            <div className='flex flex-col sm:flex-row sm:justify-between'>
                <div className='text-center sm:text-left'>
                    <div className='name-div text-2xl sm:text-4xl'>장은희 (Eunhee Jang)</div>
                    <h2 className='pt-1 occupation-div text-base sm:text-lg'>Frontend Engineer</h2>
                </div>
                <div className='flex justify-center sm:justify-end pt-4 sm:pt-2'>
                    <div className='has-tooltip inline-block'>
                        <span className='tooltip rounded shadow-lg -mt-8 hidden sm:block'>공부를 기록합니다.</span>
                        <FaBlogger className='ml-2 sm:ml-5 cursor-pointer' size='32' onClick={() => {window.open('https://velog.io/@eunivverse/posts')}}/>
                    </div>
                    <div className='has-tooltip inline-block ml-4 sm:ml-5'>
                        <span className='tooltip rounded shadow-lg -mt-8 hidden sm:block'>프로젝트를 만듭니다.</span>
                        <FaGithub className='cursor-pointer' size='32' onClick={() => {window.open('https://github.com/eunniverse')}}/>
                    </div>
                    <div className='has-tooltip inline-block ml-4 sm:ml-5'>
                        <span className='tooltip rounded shadow-lg -mt-8 hidden sm:block'>메일로 연락부탁드립니다.</span>
                        <MdEmail className='cursor-pointer' size='36' onClick={openModal}/>
                    </div>
                </div>
            </div>
            <EmailModal show={show} onClose={closeModal} onShow={openModal}/>
        </div>
    );
};