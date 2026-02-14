import React from 'react';
import Link from 'next/link';
import {useLocale} from 'next-intl';

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
  const locale = useLocale();
  
  return (
    <Link href={`/${locale}${href}`} className={className} onClick={onClick} {...props}>
      {children}
    </Link>
  );
};

export default LocaleLink;
