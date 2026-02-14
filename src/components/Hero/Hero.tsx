import React from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { useTranslation } from '../../hooks/useTranslation';

interface HeroProps {
  title?: string;
  subtitle?: string;
}

const Hero: React.FC<HeroProps> = ({}) => {
  const { t } = useTranslation('common');
  const { scrollY } = useScroll();
  const rawY = useTransform(scrollY, [0, 600], [0, -48]);
  const y = useSpring(rawY, { stiffness: 60, damping: 14 });

  return (
    <section className="hero" role="region" aria-label="Hero">
      <div className="hero__bg">
        <picture>
          <source media="(min-width: 768px)" srcSet="/images/hero.png" />
          <source media="(max-width: 767px)" srcSet="/images/hero-mobile.png" />
          <Image src="/images/hero.png" alt="Kimi Tin — performance" priority fill style={{ objectFit: 'cover' }} />
        </picture>
        <div className="hero__overlay" />
      </div>

      <div className="hero__container site__container">
        <div className="hero__content">
          <motion.h1
            className="hero__title"
            style={{ y }}
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: 'easeOut' }}
          >
            {t('hero.title')}
          </motion.h1>

        </div>
      </div>
    </section>
  );
};

export default Hero;
