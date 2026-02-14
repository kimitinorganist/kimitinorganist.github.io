import { useRouter } from 'next/router';
import translations from '../utils/translations';

export function useTranslation() {
  const router = useRouter();
  const locale = router.locale || 'zh-CN';
  
  const t = (key: string): string => {
    const keys = key.split('.');
    let result: any = translations;
    
    // 根据 locale 选择翻译对象
    if (locale === 'en') {
      result = result.en;
    } else {
      result = result['zh-CN'];
    }
    
    for (const k of keys) {
      if (result && typeof result === 'object' && result[k] !== undefined) {
        result = result[k];
      } else {
        return key; // 如果找不到翻译，返回原始 key
      }
    }
    
    return typeof result === 'string' ? result : key;
  };
  
  return { t };
}