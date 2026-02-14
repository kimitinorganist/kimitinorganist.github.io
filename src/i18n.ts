import {getRequestConfig} from 'next-intl/server';

const locales = ['en', 'zh'];

export default getRequestConfig(async () => {
  return {
    locale: 'en',
    messages: (await import('../messages/en.json')).default
  };
});
