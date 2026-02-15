'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function HomePage() {
  const router = useRouter();
  
  useEffect(() => {
    // 从 navigator 中获取 userAgent
    const userAgent = navigator.userAgent || '';
    
    // 判断是否为中文用户
    const isChinese = /zh-CN|zh-TW|zh-HK/.test(userAgent);
    
    // 根据判断结果重定向到对应的语言路径
    router.push(`/${isChinese ? 'zh' : 'en'}`);
  }, [router]);
  
  return null;
}
