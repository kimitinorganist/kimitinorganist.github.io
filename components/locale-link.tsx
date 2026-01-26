import NextLink from 'next/link';

export function Link({
  href,
  locale,
  ...props
}: {
  href: string;
  locale: string;
  [key: string]: any;
}) {
  const localePrefix = locale === 'zh' ? '' : `/${locale}`;
  const path = href === '/' ? localePrefix : `${localePrefix}${href}`;
  
  return <NextLink href={path} {...props} />;
}
