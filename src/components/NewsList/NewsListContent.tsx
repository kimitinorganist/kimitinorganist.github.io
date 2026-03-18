'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface NewsItem {
  id: string;
  image: string;
  title: string;
  date: string;
  description?: string;
}

interface NewsListContentProps {
  newsItems: NewsItem[];
  locale: string;
}

const NewsListContent: React.FC<NewsListContentProps> = ({ newsItems, locale }) => {
  return (
    <div className="news-page__list">
      {newsItems.map((news, index) => (
        <motion.div 
          key={news.id}
          className={`news-page__item ${index < 3 ? 'news-page__item--large' : 'news-page__item--small'}`}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: index * 0.1 }}
          whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
        >
          <a href={`/${locale}/news/${news.id}`} className="news-page__link">
            <div className="news-page__image">
              <img 
                src={news.image} 
                alt={news.title} 
                style={{ objectFit: 'cover', width: '100%', height: '100%' }}
              />
            </div>
            <div className="news-page__info">
              <h3 className="news-page__item-title">{news.title}</h3>
              <p className="news-page__item-date">{news.date}</p>
            </div>
          </a>
        </motion.div>
      ))}
    </div>
  );
};

export default NewsListContent;
