'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { usePathname } from 'next/navigation';

const BioSection: React.FC = () => {
  const pathname = usePathname();
  const isEnglish = pathname.startsWith('/en');
  
  const t = (key: string) => {
    const translations: Record<string, Record<string, string>> = {
      en: {
        title: 'Biography',
        paragraph1: 'Kimi Tin is a distinguished organist and musician known for his exceptional performances and deep understanding of classical organ repertoire.',
        paragraph2: 'With years of training and performance experience, Kimi has established himself as a sought-after performer in churches, concert halls, and music festivals.',
        paragraph3: 'His dedication to the art of organ music continues to inspire audiences and fellow musicians alike.',
      },
      zh: {
        title: '简介',
        paragraph1: '田昊天是一位杰出的管风琴演奏家和音乐家，以其卓越的表演和对古典管风琴曲目的深刻理解而闻名。',
        paragraph2: '经过多年的训练和表演经验，田昊天已成为教堂、音乐厅和音乐节中备受追捧的演奏家。',
        paragraph3: '他对管风琴艺术的执着继续激励着观众和音乐家们。',
      },
    };
    
    const locale = isEnglish ? 'en' : 'zh';
    return translations[locale]?.[key] || key;
  };
  
  return (
    <section className="bio-section" id="bio" role="region" aria-label="Biography">
      <div className="bio-section__container site__container">
        <div className="bio-section__content">
          <motion.h2 
            className="bio-section__title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {t('title')}
          </motion.h2>
          <motion.p 
            className="bio-section__paragraph"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {t('paragraph1')}
          </motion.p>
          <motion.p 
            className="bio-section__paragraph"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {t('paragraph2')}
          </motion.p>
          <motion.p 
            className="bio-section__paragraph"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            {t('paragraph3')}
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default BioSection;