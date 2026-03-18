import { getNewsData } from '@/lib/markdownParser';
import Navbar from '../../../components/Navbar/Navbar';
import Footer from '../../../components/Footer/Footer';
import NewsListContent from '../../../components/NewsList/NewsListContent';

export default async function NewsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  
  const newsItems = await getNewsData(locale);
  
  return (
    <>
      <Navbar />
      <main className="news-page">
        <div className="news-page__hero">
          <div className="news-page__hero-overlay"></div>
          <img 
            src="/images/hero.png" 
            alt="News Hero" 
            className="news-page__hero-image"
          />
        </div>
        <div className="news-page__container site__container">
          <h1 className="news-page__title">News</h1>
          <NewsListContent newsItems={newsItems} locale={locale} />
        </div>
      </main>
      <Footer />
    </>
  );
}
