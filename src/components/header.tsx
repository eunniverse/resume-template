// @flow
'use client';

import { useState } from 'react';
import { FaBlogger , FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { EmailModal } from "@/components/Detail/EmailModal";
import {useTranslations} from "next-intl";

export const Header = () => {
    const [show, setShow] = useState(false);
    const t = useTranslations('Index');

    const openModal = () => setShow(true);
    const closeModal = () => setShow(false);

    return (
    <div className='w-4/5 px-2 pt-8'>
        <div className='float-left'>
            <div className='name-div text-4xl'>장은희 (Eunhee Jang)</div>
            <h2 className='pt-1 occupation-div text-lg'>Frontend Engineer</h2>
        </div>
        <div className='float-right pt-2'>
            <div className='has-tooltip inline'>
                <span className='tooltip rounded shadow-lg -mt-8'>공부를 기록합니다.</span>
                <FaBlogger className='inline ml-5 cursor-pointer' size='40' onClick={() => {window.open('https://velog.io/@eunivverse/posts')}}/>
            </div>
            <div className='has-tooltip inline'>
                <span className='tooltip rounded shadow-lg -mt-8'>프로젝트를 만듭니다.</span>
                <FaGithub className='inline ml-5 cursor-pointer' size='40' onClick={() => {window.open('https://github.com/eunniverse')}}/>
            </div>
            <div className='has-tooltip inline'>
                <span className='tooltip rounded shadow-lg -mt-8'>메일로 연락부탁드립니다.</span>
                <MdEmail className='inline ml-4 cursor-pointer' size='45' onClick={openModal}/>
            </div>
        </div>
        <EmailModal show={show} onClose={closeModal} onShow={openModal}/>
    </div>
    );
};