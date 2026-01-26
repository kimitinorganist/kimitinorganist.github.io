import { getTranslations } from 'next-intl/server';
import { Link } from '@/components/locale-link';

export const dynamic = 'force-static';
export const dynamicParams = false;

export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'home' });

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-zinc-50 to-zinc-100 dark:from-black dark:to-zinc-900">
      <main className="flex min-h-screen w-full max-w-4xl flex-col items-center justify-center px-8 py-16">
        <div className="flex flex-col items-center gap-8 text-center">
          <h1 className="text-5xl font-bold leading-tight tracking-tight text-black dark:text-zinc-50 md:text-6xl">
            {t('title')}
          </h1>
          <p className="max-w-2xl text-xl leading-8 text-zinc-600 dark:text-zinc-400">
            {t('description')}
          </p>
          <div className="flex gap-4 mt-4">
            <Link 
              href="/" 
              locale="zh" 
              className="px-6 py-3 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl"
            >
              中文
            </Link>
            <Link 
              href="/" 
              locale="en" 
              className="px-6 py-3 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl"
            >
              English
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
