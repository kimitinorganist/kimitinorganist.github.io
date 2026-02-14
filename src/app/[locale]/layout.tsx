import type { Metadata } from "next";
import {NextIntlClientProvider} from 'next-intl';
import {notFound} from 'next/navigation';

export const metadata: Metadata = {
  title: "KIMI TIN ORGANIST",
  description: "Professional Organist & Musician",
};

const locales = ['en', 'zh'];

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

  return (
    <NextIntlClientProvider
      locale={locale}
      messages={{
        // Empty messages for now - we'll load them on the client
      }}
    >
      {children}
    </NextIntlClientProvider>
  );
}
