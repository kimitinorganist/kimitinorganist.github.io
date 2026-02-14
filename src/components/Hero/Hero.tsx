'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useScroll, useTransform, useSpring } from 'framer-motion';
import { useTranslations } from 'next-intl';

interface HeroProps {
  className?: string;
}

const Hero: React.FC<HeroProps> = ({}) => {
  const t = useTranslations();
  const { scrollY } = useScroll();
  const rawY = useTransform(scrollY, [0, 600], [0, -48]);
  const y = useSpring(rawY, { stiffness: 60, damping: 14 });

  return (
    <section className="hero" role="banner">
      <div className="hero__bg">
        <Image 
          src="/images/hero.png" 
          alt="Kimi Tin Organist" 
          fill 
          priority 
          style={{ objectFit: 'cover' }}
          sizes="100vw"
        />
        <div className="hero__overlay"></div>
      </div>
      <motion.div 
        className="hero__content"
        style={{ y }}
      >
        <h1 className="hero__title">{t('hero.title')}</h1>
        <p className="hero__subtitle">{t('hero.subtitle')}</p>
        <motion.a 
          className="hero__cta" 
          href="/#about"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {t('hero.cta')}
        </motion.a>
      </motion.div>
    </section>
  );
};

export default Hero;
