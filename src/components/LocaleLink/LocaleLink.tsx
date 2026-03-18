'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

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
  const pathname = usePathname();
  const isEnglish = pathname.startsWith('/en');
  const locale = isEnglish ? 'en' : 'zh';
  
  return (
    <Link href={`/${locale}${href}`} className={className} onClick={onClick} {...props}>
      {children}
    </Link>
  );
};

export default LocaleLink;