import React from 'react';
import { useTranslation } from '../../hooks/useTranslation';
import LocaleLink from '../LocaleLink/LocaleLink';

const Footer: React.FC = () => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer" role="contentinfo">
      <div className="footer__container site__container">
        <div className="footer__content">
          <div className="footer__brand">
            <LocaleLink href="/">Kimi Tin Organist</LocaleLink>
          </div>
          <div className="footer__info">
            <p className="footer__copyright">
              © {currentYear} Kimi Tin Organist. All rights reserved.
            </p>
            <div className="footer__links">
              <LocaleLink href="/privacy" className="footer__link">{t('footer.privacy')}</LocaleLink>
              <LocaleLink href="/terms" className="footer__link">{t('footer.terms')}</LocaleLink>
              <LocaleLink href="/contact" className="footer__link">{t('footer.contact')}</LocaleLink>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;