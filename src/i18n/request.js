import { getRequestConfig } from 'next-intl/server';

export default getRequestConfig(async () => {
    const locale = typeof window !== "undefined"
        ? localStorage.getItem("lang") || "en"
        : "en";

    return {
        locale,
        messages: (await import(`../../messages/${locale}.json`)).default
    };
});