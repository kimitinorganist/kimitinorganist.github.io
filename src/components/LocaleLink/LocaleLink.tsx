import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

interface LocaleLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

const LocaleLink: React.FC<LocaleLinkProps> = ({ 
  href, 
  children, 
  className,
  onClick,
  ...props 
}) => {
  const router = useRouter();
  const currentLocale = router.locale || 'zh-CN';
  
  // 构建带 locale 前缀的 href
  const localizedHref = href === '/' 
    ? `/${currentLocale}`
    : `/${currentLocale}${href}`;

  return (
    <Link href={localizedHref} className={className} onClick={onClick} {...props}>
      {children}
    </Link>
  );
};

export default LocaleLink;