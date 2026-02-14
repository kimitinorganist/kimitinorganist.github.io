import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useTranslation } from '../../hooks/useTranslation';

interface NewsItem {
  id: number;
  image: string;
  title: string;
}

const NewsSection: React.FC = () => {
  const { t } = useTranslation();
  // Mock data for news
  const newsItems: NewsItem[] = [
    {
      id: 1,
      image: '/images/hero.png',
      title: t('news.item1')
    },
    {
      id: 2,
      image: '/images/hero.png',
      title: t('news.item2')
    },
    {
      id: 3,
      image: '/images/hero.png',
      title: t('news.item3')
    },
    {
      id: 4,
      image: '/images/hero.png',
      title: t('news.item4')
    },
    {
      id: 5,
      image: '/images/hero.png',
      title: t('news.item5')
    },
    {
      id: 6,
      image: '/images/hero.png',
      title: t('news.item6')
    }
  ];

  return (
    <section className="news-section" id="news" role="region" aria-label="News">
      <div className="news-section__container site__container">
        <motion.h2 
          className="news-section__title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {t('news.title')}
        </motion.h2>
        <div className="news-section__grid">
          {newsItems.map((news) => (
            <motion.div 
              key={news.id}
              className={`news-section__item ${news.id <= 3 ? 'news-section__item--large' : 'news-section__item--small'}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: news.id * 0.1 }}
              whileHover={{ scale: 1.12, transition: { duration: 0.3 } }}
            >
              <div className="news-section__image">
                <Image 
                  src={news.image} 
                  alt={news.title} 
                  fill 
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <div className="news-section__info">
                <h3 className="news-section__item-title">{news.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsSection;