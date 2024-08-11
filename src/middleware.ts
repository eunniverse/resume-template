import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
    locales: ['en', 'ko'], // 지원 언어
    defaultLocale: 'ko' // 기본 언어
});

export const config = {
    // Match only internationalized pathnames
    matcher: ['/', '/(ko|en)']
};