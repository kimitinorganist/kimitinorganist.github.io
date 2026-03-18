'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useScroll, useTransform, useSpring } from 'framer-motion';
import { usePathname } from 'next/navigation';

interface HeroProps {
  className?: string;
}

const Hero: React.FC<HeroProps> = ({}) => {
  const pathname = usePathname();
  const isEnglish = pathname.startsWith('/en');
  
  const t = (key: string) => {
    const translations: Record<string, Record<string, string>> = {
      en: {
        title: 'KIMI TIN ORGANIST',
        subtitle: 'Organist & Musician',
        cta: 'Learn More',
      },
      zh: {
        title: 'KIMI TIN ORGANIST',
        subtitle: '管风琴演奏家',
        cta: '了解更多',
      },
    };
    
    const locale = isEnglish ? 'en' : 'zh';
    return translations[locale]?.[key] || key;
  };
  
  const { scrollY } = useScroll();
  const rawY = useTransform(scrollY, [0, 600], [0, -48]);
  const y = useSpring(rawY, { stiffness: 60, damping: 14 });
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // 检测屏幕宽度，判断是否为移动端
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // 初始化检测
    checkIsMobile();

    // 监听窗口大小变化
    window.addEventListener('resize', checkIsMobile);

    // 清理事件监听器
    return () => {
      window.removeEventListener('resize', checkIsMobile);
    };
  }, []);

  return (
    <section className="hero" role="banner">
      <div className="hero__bg">
        <Image 
          src={isMobile ? "/images/hero-mobile.jpg" : "/images/hero.jpg"} 
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
        initial={{ opacity: 1, y: 0 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h1 className="hero__title">{t('title')}</h1>
      </motion.div>
    </section>
  );
};

export default Hero;