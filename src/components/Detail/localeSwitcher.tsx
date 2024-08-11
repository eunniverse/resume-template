import React from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { useTranslations } from 'next-intl';
import { useTransition } from 'react';

const LocaleSwitcher = () => {
    const t = useTranslations('common');
    const router = useRouter();
    const pathname = usePathname();
    const [isPending, startTransition] = useTransition();

    const changeLocale = (newLocale: string) => {
        const segments = pathname.split('/');
        segments[1] = newLocale; // Replace the locale segment
        startTransition(() => {
            router.push(segments.join('/'));
        });
    };

    const handleToggle = () => {
        const currentLocale = pathname.split('/')[1];
        const newLocale = currentLocale === 'en' ? 'ko' : 'en';
        changeLocale(newLocale);
    };

    return (
        <div className="flex justify-end">
            <div className="flex items-center mb-5 float-right">
                <span className="mr-3 text-sm font-medium text-gray-600">{t('ko')}</span>
                <label className="relative flex items-center cursor-pointer">
                    <input
                        type="checkbox"
                        value=""
                        className="sr-only peer"
                        onChange={handleToggle} // onChange 이벤트 핸들러 추가
                        checked={pathname.split('/')[1] === 'en'} // 현재 경로의 로케일을 기준으로 체크 상태를 결정
                    />
                    <div className="w-9 h-5 bg-gray-200 hover:bg-gray-300 peer-focus:outline-0 rounded-full peer transition-all ease-in-out duration-500 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-indigo-600 hover:peer-checked:bg-indigo-700"></div>
                </label>
                <span className="ml-3 text-sm font-medium text-gray-600">{t('en')}</span>
            </div>
        </div>
    );
};

export default LocaleSwitcher;