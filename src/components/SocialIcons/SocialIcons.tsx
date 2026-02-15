'use client';

import React from 'react';
import './SocialIcons.scss';

interface SocialIcon {
  name: string;
  src: string;
  alt: string;
  url: string;
}

const SocialIcons: React.FC = () => {
  const socialIcons: SocialIcon[] = [
    {
      name: 'apple',
      src: '/icons/apple.svg',
      alt: 'Apple',
      url: '#',
    },
    {
      name: 'facebook',
      src: '/icons/facebook.svg',
      alt: 'Facebook',
      url: '#',
    },
    {
      name: 'instagram',
      src: '/icons/instagram.svg',
      alt: 'Instagram',
      url: '#',
    },
    {
      name: 'redbook',
      src: '/icons/redbook.svg',
      alt: 'Red Book',
      url: 'https://www.xiaohongshu.com/user/profile/5f93f224000000000101f415',
    },
    {
      name: 'telegram',
      src: '/icons/telegram.svg',
      alt: 'Telegram',
      url: '#',
    },
    {
      name: 'tiktok',
      src: '/icons/tiktok.svg',
      alt: 'TikTok',
      url: 'https://www.douyin.com/user/MS4wLjABAAAABsgLtxWm5TObmVTb_0hupDEUpZkwOnoRADJr7C7KWFo',
    },
    {
      name: 'twitter-x',
      src: '/icons/twitter-x.svg',
      alt: 'Twitter X',
      url: '#',
    },
    {
      name: 'wechat',
      src: '/icons/wechat.svg',
      alt: 'WeChat',
      url: '#',
    },
  ];

  return (
    <div className="social-icons">
      {socialIcons.map((icon) => (
        <a
          key={icon.name}
          href={icon.url}
          target="_blank"
          rel="noopener noreferrer"
          className="social-icons__link"
          aria-label={icon.alt}
        >
          <img src={icon.src} alt={icon.alt} className="social-icons__icon" />
        </a>
      ))}
    </div>
  );
};

export default SocialIcons;