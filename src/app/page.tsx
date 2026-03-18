'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function RootPage() {
  const router = useRouter();
  
  useEffect(() => {
    const userAgent = navigator.userAgent || '';
    let targetLocale = 'en';
    
    if (userAgent) {
      const lowerAgent = userAgent.toLowerCase();
      
      if (lowerAgent.includes('zh-cn') || lowerAgent.includes('zh_tw')) {
        targetLocale = 'zh';
      } else if (lowerAgent.includes('zh-hk')) {
        targetLocale = 'en';
      }
    }
    
    router.replace(`/${targetLocale}`);
  }, [router]);
  
  return null;
}
