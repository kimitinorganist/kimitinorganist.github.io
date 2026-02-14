import Navbar from '../../components/Navbar/Navbar';
import Hero from '../../components/Hero/Hero';
import BioSection from '../../components/BioSection/BioSection';
import PerformanceSection from '../../components/PerformanceGrid/PerformanceGrid';
import MusicSection from '../../components/MusicSection/MusicSection';
import NewsSection from '../../components/NewsSection/NewsSection';
import VideoGrid from '../../components/VideoGrid/VideoGrid';
import Footer from '../../components/Footer/Footer';

const locales = ['en', 'zh'];

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <BioSection />
      <PerformanceSection />
      <MusicSection />
      <NewsSection />
      <VideoGrid />
      <Footer />
    </>
  );
}
