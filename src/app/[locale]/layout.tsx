import type { Metadata } from "next";

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

export default function LocaleLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
