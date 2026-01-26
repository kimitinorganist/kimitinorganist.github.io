import { getRequestConfig } from 'next-intl/server';

export const locales = ['zh', 'en'] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = 'zh';

export default getRequestConfig(async ({ requestLocale }) => {
  // For static export, locale comes from route params
  let locale = await requestLocale;
  
  // Fallback to default locale if not provided
  if (!locale) {
    locale = defaultLocale;
  }

  return {
    locale: locale as string,
    messages: (await import(`./messages/${locale}.json`)).default
  };
});
