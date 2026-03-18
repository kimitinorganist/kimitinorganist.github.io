import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "KIMI TIN ORGANIST",
  description: "Professional Organist & Musician",
};

const locales = ['en', 'zh'];

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