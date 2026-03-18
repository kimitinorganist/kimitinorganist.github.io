'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { usePathname } from 'next/navigation';

interface NewsItem {
  id: string;
  image: string;
  title: string;
  date: string;
}

interface NewsSectionProps {
  newsItems: NewsItem[];
  title: string;
}

const NewsSectionContent: React.FC<NewsSectionProps> = ({ newsItems, title }) => {
  const pathname = usePathname();
  const locale = pathname.split('/')[1] || 'en';

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
          {title}
        </motion.h2>
        <div className="news-section__grid">
          {newsItems.map((news, index) => (
            <motion.div 
              key={news.id}
              className={`news-section__item ${index < 3 ? 'news-section__item--large' : 'news-section__item--small'}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
            >
              <a href={`/${locale}/news/${news.id}`} className="news-section__link">
                <div className="news-section__image">
                  <img 
                    src={news.image} 
                    alt={news.title} 
                    style={{ objectFit: 'cover', width: '100%', height: '100%' }}
                  />
                </div>
                <div className="news-section__info">
                  <h3 className="news-section__item-title">{news.title}</h3>
                  <p className="news-section__item-date">{news.date}</p>
                </div>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsSectionContent;