'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { usePathname } from 'next/navigation';

const MusicSection: React.FC = () => {
  const pathname = usePathname();
  const isEnglish = pathname.startsWith('/en');
  
  const t = (key: string) => {
    const translations: Record<string, Record<string, string>> = {
      en: {
        title: 'Music',
      },
      zh: {
        title: '音乐',
      },
    };
    
    const locale = isEnglish ? 'en' : 'zh';
    return translations[locale]?.[key] || key;
  };
  
  return (
    <section className="music-section" id="music" role="region" aria-label="Music">
      <div className="music-section__container site__container">
        <motion.h2 
          className="music-section__title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {t('title')}
        </motion.h2>
        <div className="music-section__placeholder">
        </div>
      </div>
    </section>
  );
};

export default MusicSection;