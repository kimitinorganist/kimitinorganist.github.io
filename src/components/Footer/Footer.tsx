'use client';

import React from 'react';
import { usePathname } from 'next/navigation';
import LocaleLink from '../LocaleLink/LocaleLink';

const Footer: React.FC = () => {
  const pathname = usePathname();
  const isEnglish = pathname.startsWith('/en');
  const currentYear = new Date().getFullYear();
  
  const t = (key: string, params?: Record<string, string | number>) => {
    const translations: Record<string, Record<string, string>> = {
      en: {
        copyright: `© ${currentYear} Kimi Tin. All rights reserved.`,
        privacy: 'Privacy Policy',
        terms: 'Terms of Service',
        contact: 'Contact',
      },
      zh: {
        copyright: `© ${currentYear} 田昊天. 保留所有权利.`,
        privacy: '隐私政策',
        terms: '服务条款',
        contact: '联系',
      },
    };
    
    const locale = isEnglish ? 'en' : 'zh';
    return translations[locale]?.[key] || key;
  };

  return (
    <footer className="footer" role="contentinfo">
      <div className="footer__container site__container">
        <div className="footer__content">
          <div className="footer__brand">
            <LocaleLink href="/">Kimi Tin Organist</LocaleLink>
          </div>
          <div className="footer__info">
            <p className="footer__copyright">
              {t('copyright')}
            </p>
            <div className="footer__links">
              <LocaleLink href="/privacy" className="footer__link">{t('privacy')}</LocaleLink>
              <LocaleLink href="/terms" className="footer__link">{t('terms')}</LocaleLink>
              <LocaleLink href="/contact" className="footer__link">{t('contact')}</LocaleLink>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;