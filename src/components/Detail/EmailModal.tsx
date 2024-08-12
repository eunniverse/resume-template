// @flow
import * as React from 'react';
import {useRef} from "react";
import emailjs from '@emailjs/browser';
import ReactDOM from "react-dom";
import {useTranslations} from "next-intl";

type Props = {
    show: boolean,
    onClose: () => void,
    onShow: () => void
};

export const EmailModal = (props: Props) => {
    const form = useRef<HTMLFormElement>(null);
    const t = useTranslations('common.emailModal');

    const onSubmitForm = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (!form.current) return;

        try {
            emailjs
                .sendForm(
                    process.env.NEXT_PUBLIC_MAIL_SERVICE_KEY as string,
                    process.env.NEXT_PUBLIC_MAIL_TEMPLATE_KEY as string,
                    form.current,
                    process.env.NEXT_PUBLIC_MAIL_PUBLIC_KEY as string
                )
                .then(() => {
                    alert(t('finishedSend'));
                    props.onClose();

                });
        } catch (error:any) {
            console.log(error.text);
            alert(t('errorSend'));
        }
    };

    const closeHandler = (e: React.MouseEvent<HTMLElement>) => {
        e.stopPropagation();
        props.onClose();
    };

    const modalContent:React.JSX.Element = (
        <div className="modal-overlay">
            <div className="modal-wrapper">
                <div className="modal bg-white dark:bg-black dark:border-2 dark:border-slate-600">
                    <div className="modal-header w-full flex-container">
                        <span className='h-full w-full pl-2 text-left'>
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                                {t('modalTitle')}
                            </h3>
                        </span>
                        <span className='h-full'>
                            <button className='cursor-pointer' onClick={closeHandler}>
                                X
                            </button>
                        </span>
                    </div>
                    <div className="modal-body">
                        <form ref={form} className="p-4 md:p-5" onSubmit={onSubmitForm}>
                            <div className="grid gap-4 mb-4 grid-cols-2">
                                <div className="col-span-2">
                                    <label htmlFor="from_corporate" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{t('company')}</label>
                                    <input type="text" name="from_corporate" id="from_corporate" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder={t('company')} required/>
                                </div>
                                <div className="col-span-2">
                                    <label htmlFor="from_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{t('name')}</label>
                                    <input type="text" name="from_name" id="from_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder={t('name')} required/>
                                </div>
                                <div className="col-span-2">
                                    <label htmlFor="from_email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{t('email')}</label>
                                    <input type="text" name="from_email" id="from_email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder={t('email')} required/>
                                </div>
                                <div className="col-span-2">
                                    <label htmlFor="from_tel" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{t('mobile')}</label>
                                    <input type="text" name="from_tel" id="from_tel" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder={t('mobile')}/>
                                </div>
                                <div className="col-span-2">
                                    <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{t('message')}</label>
                                    <input type="text" name="message" id="message" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder={t('message')} required/>
                                </div>
                            </div>

                            {/*div 를 flex 로 하고 button 에 ml-auto 추가하면 오른쪽 정렬됨 */}
                            <div className='flex w-100 pt-6'>
                                <button type="submit" className="ml-auto text-white inline-flex items-center common-btn focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-1.5 text-right">
                                    {t('send')}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )

    if(!props.show) {
        return null;

    } else {
        // modal 을 만드는 요소 createPortal
        return ReactDOM.createPortal(
            modalContent,
            // @ts-ignore
            document.getElementById("modal-root")
        );
    }
}