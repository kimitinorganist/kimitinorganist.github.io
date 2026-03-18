import { getNewsItemById, getNewsData } from '@/lib/markdownParser';
import Navbar from '../../../../components/Navbar/Navbar';
import Footer from '../../../../components/Footer/Footer';
import { Metadata } from 'next';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; id: string }>;
}): Promise<Metadata> {
  const { locale, id } = await params;
  const newsItem = await getNewsItemById(locale, id);
  
  return {
    title: newsItem?.title || 'News',
  };
}

export async function generateStaticParams() {
  const locales = ['en', 'zh'];
  const paths: { locale: string; id: string }[] = [];
  
  for (const locale of locales) {
    const news = await getNewsData(locale);
    news.forEach((item) => {
      paths.push({
        locale,
        id: item.id,
      });
    });
  }
  
  return paths;
}

export default async function NewsDetailPage({
  params,
}: {
  params: Promise<{ locale: string; id: string }>;
}) {
  const { locale, id } = await params;
  
  const newsItem = await getNewsItemById(locale, id);
  
  if (!newsItem) {
    return (
      <>
        <Navbar />
        <main className="news-detail">
          <div className="news-detail__container site__container">
            <h1>News not found</h1>
            <a href={`/${locale}/#news`} className="btn btn--primary">
              Back to News
            </a>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />
      <main className="news-detail">
        <div className="news-detail__container site__container">
          <div className="news-detail__header">
            <h1 className="news-detail__title">{newsItem.title}</h1>
            <p className="news-detail__date">{newsItem.date}</p>
          </div>
          
          {newsItem.image && (
            <div className="news-detail__image">
              <img 
                src={newsItem.image} 
                alt={newsItem.title} 
                width={1200} 
                height={600}
              />
            </div>
          )}
          
          {newsItem.description && (
            <div className="news-detail__description">
              <p>{newsItem.description}</p>
            </div>
          )}
          
          {newsItem.content && (
            <div className="news-detail__content">
              {newsItem.content.split('\n').map((paragraph: string, index: number) => (
                paragraph.trim() && <p key={index}>{paragraph}</p>
              ))}
            </div>
          )}
          
          <div className="news-detail__back">
            <a href={`/${locale}/news`} className="btn btn--primary">
              Back to News
            </a>
            <a href={`/${locale}`} className="btn btn--ghost">
              Back to Home
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}