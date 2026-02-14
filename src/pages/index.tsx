import Head from 'next/head';
import Navbar from '../components/Navbar/Navbar';
import Hero from '../components/Hero/Hero';
import BioSection from '../components/BioSection/BioSection';
import PerformanceSection from '../components/PerformanceGrid/PerformanceGrid';
import MusicSection from '../components/MusicSection/MusicSection';
import NewsSection from '../components/NewsSection/NewsSection';
import VideoGrid from '../components/VideoGrid/VideoGrid';
import Footer from '../components/Footer/Footer';

export default function Home() {
  return (
    <>
      <Head>
        <title>Kimi Tin — Organist</title>
        <meta name="description" content="Kimi Tin — classical organist, composer and performer." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

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
