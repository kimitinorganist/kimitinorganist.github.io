'use client';

import React, { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { useRouter } from 'next/navigation';
import { useLocale, useTranslations } from 'next-intl';
import { motion, AnimatePresence } from 'framer-motion';
import LocaleLink from '../LocaleLink/LocaleLink';

const Navbar: React.FC = () => {
  const pathname = usePathname();
  const router = useRouter();
  const locale = useLocale();
  const t = useTranslations('navbar');
  const [open, setOpen] = useState(false);
  const [musicDropdownOpen, setMusicDropdownOpen] = useState(false);
  const [mobileMusicOpen, setMobileMusicOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [dropdownTimeout, setDropdownTimeout] = useState<NodeJS.Timeout | null>(null);
  
  const isEnglish = locale === 'en';

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 200);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const switchLanguage = (lang: string) => {
    const newPathname = pathname.replace(`/${locale}`, `/${lang}`);
    router.push(newPathname);
  };

  const handleDropdownShow = () => {
    if (dropdownTimeout) {
      clearTimeout(dropdownTimeout);
      setDropdownTimeout(null);
    }
    setMusicDropdownOpen(true);
  };

  const handleDropdownHide = () => {
    const timeout = setTimeout(() => {
      setMusicDropdownOpen(false);
    }, 200);
    setDropdownTimeout(timeout);
  };

  return (
    <header className={"navbar " + (scrolled ? "navbar--scrolled" : "")}>
      <div className="navbar__container site__container">
        <div className="navbar__brand">
          <LocaleLink href="/">
            <img src="/images/logo.svg" alt="Kimi Tin Organist" className="navbar__logo" />
          </LocaleLink>
        </div>

        <nav className="navbar__nav" aria-label="Primary navigation">
          <LocaleLink className="navbar__link" href="/">{t('home')}</LocaleLink>
          
          <div 
            className="navbar__dropdown"
            onMouseEnter={handleDropdownShow}
            onMouseLeave={handleDropdownHide}
          >
            <a className="navbar__link" href={`/${locale}#music`}>
              {t('music')}
            </a>
            {musicDropdownOpen && (
              <div 
                className="navbar__dropdown-menu"
                onMouseEnter={handleDropdownShow}
                onMouseLeave={handleDropdownHide}
              >
                <LocaleLink className="navbar__dropdown-link" href="/sheet-music">{t('musicSheet')}</LocaleLink>
                <LocaleLink className="navbar__dropdown-link" href="/performances">{t('performance')}</LocaleLink>
              </div>
            )}
          </div>
          
          <LocaleLink className="navbar__link" href="/merchandise">{t('merchandise')}</LocaleLink>
          <LocaleLink className="navbar__link" href="/news">{t('news')}</LocaleLink>
          <LocaleLink className="navbar__link" href="/videos">{t('video')}</LocaleLink>
          <LocaleLink className="navbar__link" href="/events">{t('bookPerformance')}</LocaleLink>
          <LocaleLink className="navbar__link" href="/about">{t('about')}</LocaleLink>
          <LocaleLink className="navbar__link" href="/contact">{t('contact')}</LocaleLink>
          
          <button 
            className="navbar__lang-toggle"
            onClick={() => switchLanguage(isEnglish ? 'zh' : 'en')}
          >
            {isEnglish ? t('chinese') : t('english')}
          </button>
        </nav>

        <button
          className="navbar__toggle"
          aria-expanded={open}
          aria-label="Toggle menu"
          onClick={() => setOpen(v => !v)}
        >
          <span className="hamburger" />
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div 
            className="navbar__mobile" 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            exit={{ opacity: 0 }} 
            transition={{ duration: 0.3 }}
            onClick={() => setOpen(false)}
          >
            <div className="navbar__mobile-inner site__container">
              <LocaleLink className="navbar__mobile-link" href="/">{t('home')}</LocaleLink>
              
              <div className="navbar__mobile-dropdown">
                <button 
                  className="navbar__mobile-link" 
                  onClick={(e) => {
                    e.stopPropagation();
                    setMobileMusicOpen(!mobileMusicOpen);
                  }}
                >
                  {t('music')}
                </button>
                {mobileMusicOpen && (
                  <div className="navbar__mobile-submenu">
                    <LocaleLink className="navbar__mobile-link navbar__mobile-subitem" href="/sheet-music">{t('musicSheet')}</LocaleLink>
                    <LocaleLink className="navbar__mobile-link navbar__mobile-subitem" href="/performances">{t('performance')}</LocaleLink>
                  </div>
                )}
              </div>
              
              <LocaleLink className="navbar__mobile-link" href="/merchandise">{t('merchandise')}</LocaleLink>
              <LocaleLink className="navbar__mobile-link" href="/news">{t('news')}</LocaleLink>
              <LocaleLink className="navbar__mobile-link" href="/videos">{t('video')}</LocaleLink>
              <LocaleLink className="navbar__mobile-link" href="/events">{t('bookPerformance')}</LocaleLink>
              <LocaleLink className="navbar__mobile-link" href="/about">{t('about')}</LocaleLink>
              <LocaleLink className="navbar__mobile-link" href="/contact">{t('contact')}</LocaleLink>
              <button 
                className="navbar__lang-toggle"
                onClick={(e) => {
                  e.stopPropagation();
                  switchLanguage(isEnglish ? 'zh' : 'en');
                }}
              >
                {isEnglish ? t('chinese') : t('english')}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
