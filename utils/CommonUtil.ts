import { useTranslations } from "next-intl";

/**
 * 고정된 길이의 배열 생성, 각 항목을 번역 키로 변환
 * @param prefix
 * @param length
 */
export const useTranslationArray = (prefix: string, length: number) => {
    const t = useTranslations();
    return Array.from({ length }, (_, i) => t(`${prefix}.${i}`));
};