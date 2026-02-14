'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';

interface VideoItem {
  id: number;
  thumbnail: string;
  title: string;
  date: string;
}

const VideoGrid: React.FC = () => {
  const t = useTranslations('video');
  const videos: VideoItem[] = [
    {
      id:1,
      thumbnail: '/images/hero.png',
      title: t('item1'),
      date: '2024.05.15'
    },
    {
      id: 2,
      thumbnail: '/images/hero.png',
      title: t('item2'),
      date: '2024.04.20'
    },
    {
      id: 3,
      thumbnail: '/images/hero.png',
      title: t('item3'),
      date: '2024.03.10'
    },
    {
      id: 4,
      thumbnail: '/images/hero.png',
      title: t('item4'),
      date: '2024.02.05'
    },
    {
      id: 5,
      thumbnail: '/images/hero.png',
      title: t('item5'),
      date: '2024.01.18'
    },
    {
      id: 6,
      thumbnail: '/images/hero.png',
      title: t('item6'),
      date: '2023.12.25'
    }
  ];

  return (
    <section className="video-grid" id="videos" role="region" aria-label="Videos">
      <div className="video-grid__container site__container">
        <motion.h2 
          className="video-grid__title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {t('title')}
        </motion.h2>
        <div className="video-grid__grid">
          {videos.map((video) => (
            <motion.div 
              key={video.id}
              className="video-grid__item"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              whileHover={{ y: -10, transition: { duration: 0.2 } }}
            >
              <div className="video-grid__thumbnail">
                <div className="video-grid__play-button">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="12" cy="12" r="10" fill="rgba(0, 0, 0, 0.6)" />
                    <path d="M8 6V18L18 12L8 6Z" fill="white" />
                  </svg>
                </div>
                <Image 
                  src={video.thumbnail} 
                  alt={video.title} 
                  width={400} 
                  height={225} 
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <div className="video-grid__info">
                <h3 className="video-grid__item-title">{video.title}</h3>
                <p className="video-grid__item-date">{video.date}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VideoGrid;
