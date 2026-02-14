import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from '../../hooks/useTranslation';

const MusicSection: React.FC = () => {
  const { t } = useTranslation();
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
          {t('music.title')}
        </motion.h2>
        <div className="music-section__placeholder">
          {/* 留空给后面使用 */}
        </div>
      </div>
    </section>
  );
};

export default MusicSection;