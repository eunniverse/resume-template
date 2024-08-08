import {getRequestConfig} from 'next-intl/server';

export default getRequestConfig(async () => {
    const locale:string = 'ko';

    return {
        locale,
        messages: (await import(`/messages/${locale}.json`)).default
    };
});