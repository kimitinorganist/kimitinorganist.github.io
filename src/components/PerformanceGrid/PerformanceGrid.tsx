import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from '../../hooks/useTranslation';
import LocaleLink from '../LocaleLink/LocaleLink';

const PerformanceSection: React.FC = () => {
  const { t } = useTranslation();
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
            {t('performance.title')}
          </motion.h2>
          <motion.p 
            className="performance-section__paragraph"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {t('performance.paragraph1')}
          </motion.p>
          <motion.p 
            className="performance-section__paragraph"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {t('performance.paragraph2')}
          </motion.p>
          <motion.div 
            className="performance-section__contact"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <p className="performance-section__contact-item">
              <strong>{t('performance.email')}</strong>
            </p>
            <p className="performance-section__contact-item">
              <strong>{t('performance.phone')}</strong>
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
              {t('performance.button')}
            </LocaleLink>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PerformanceSection;