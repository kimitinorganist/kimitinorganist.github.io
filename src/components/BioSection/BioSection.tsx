'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';

const BioSection: React.FC = () => {
  const t = useTranslations('bio');
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
