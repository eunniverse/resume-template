// @flow
import * as React from 'react';
import {useRef} from "react";
import emailjs from '@emailjs/browser';
import ReactDOM from "react-dom";

type Props = {
    show: boolean,
    onClose: () => void,
    onShow: () => void
};

export const EmailModal = (props: Props) => {
    const form = useRef<HTMLFormElement>(null);

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
                    alert('연락주셔서 감사합니다! 빠른 시간 내에 답변드리겠습니다!');
                    props.onClose();

                });
        } catch (error:any) {
            console.log(error.text);
            alert('메시지 전송이 실패했습니다.\neunisss98@gmail.com 으로 연락 부탁드립니다!');
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
                                메일전송
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
                                    <label htmlFor="from_corporate" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">기업명</label>
                                    <input type="text" name="from_corporate" id="from_corporate" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="기업명" required/>
                                </div>
                                <div className="col-span-2">
                                    <label htmlFor="from_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">성함</label>
                                    <input type="text" name="from_name" id="from_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="성함" required/>
                                </div>
                                <div className="col-span-2">
                                    <label htmlFor="from_email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">이메일</label>
                                    <input type="text" name="from_email" id="from_email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="이메일" required/>
                                </div>
                                <div className="col-span-2">
                                    <label htmlFor="from_tel" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">전화번호</label>
                                    <input type="text" name="from_tel" id="from_tel" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="전화번호"/>
                                </div>
                                <div className="col-span-2">
                                    <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">메시지</label>
                                    <input type="text" name="message" id="message" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="메시지" required/>
                                </div>
                            </div>

                            {/*div 를 flex 로 하고 button 에 ml-auto 추가하면 오른쪽 정렬됨 */}
                            <div className='flex w-100 pt-6'>
                                <button type="submit" className="ml-auto text-white inline-flex items-center common-btn focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-1.5 text-right">
                                    전송
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