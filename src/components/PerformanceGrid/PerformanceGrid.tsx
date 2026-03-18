'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { usePathname } from 'next/navigation';
import LocaleLink from '../LocaleLink/LocaleLink';

const PerformanceSection: React.FC = () => {
  const pathname = usePathname();
  const isEnglish = pathname.startsWith('/en');
  
  const t = (key: string) => {
    const translations: Record<string, Record<string, string>> = {
      en: {
        title: 'Book a Performance',
        paragraph1: 'Looking to elevate your event with exceptional organ music? Kimi Tin is available for performances at churches, concerts, weddings, and special events.',
        paragraph2: 'With a diverse repertoire spanning classical, contemporary, and sacred music, Kimi tailors each performance to create the perfect atmosphere for your occasion.',
        email: 'Email: kimitin@example.com',
        phone: 'Phone: +1 (555) 123-4567',
        button: 'Contact for Booking',
      },
      zh: {
        title: '预约演出',
        paragraph1: '想要通过卓越的管风琴音乐提升您的活动吗？田昊天可为您提供教堂、音乐会、婚礼和特别活动的演出服务。',
        paragraph2: '凭借涵盖古典、当代和宗教音乐的多样化曲目，田昊天会为您的场合量身定制每场演出，营造完美的氛围。',
        email: '邮箱: kimitin@example.com',
        phone: '电话: +1 (555) 123-4567',
        button: '联系预订',
      },
    };
    
    const locale = isEnglish ? 'en' : 'zh';
    return translations[locale]?.[key] || key;
  };
  
  return (
    <section className="performance-section" id="performances" role="region" aria-label="Book a performance">
      <div className="performance-section__container site__container">
        <div className="performance-section__content">
          <motion.h2 
            className="performance-section__title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {t('title')}
          </motion.h2>
          <motion.p 
            className="performance-section__paragraph"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {t('paragraph1')}
          </motion.p>
          <motion.p 
            className="performance-section__paragraph"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {t('paragraph2')}
          </motion.p>
          <motion.div 
            className="performance-section__contact"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <p className="performance-section__contact-item">
              <strong>{t('email')}</strong>
            </p>
            <p className="performance-section__contact-item">
              <strong>{t('phone')}</strong>
            </p>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <LocaleLink 
              href="/contact" 
              className="performance-section__button btn btn--primary"
            >
              {t('button')}
            </LocaleLink>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PerformanceSection;