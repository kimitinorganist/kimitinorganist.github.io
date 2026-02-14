import type { Metadata } from "next";
import {NextIntlClientProvider} from 'next-intl';
import {notFound} from 'next/navigation';

// Static imports for messages
import enMessages from '../../../messages/en.json';
import zhMessages from '../../../messages/zh.json';

export const metadata: Metadata = {
  title: "KIMI TIN ORGANIST",
  description: "Professional Organist & Musician",
};

const locales = ['en', 'zh'];
const messagesMap = {
  en: enMessages,
  zh: zhMessages
};

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{locale: string}>;
}) {
  const {locale} = await params;
  
  if (!locales.includes(locale)) {
    notFound();
  }

  const messages = messagesMap[locale as keyof typeof messagesMap];

  return (
    <NextIntlClientProvider messages={messages} locale={locale}>
      {children}
    </NextIntlClientProvider>
  );
}
