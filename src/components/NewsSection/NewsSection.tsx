import React from 'react';
import { getNewsData } from '@/lib/markdownParser';
import NewsSectionContent from './NewsSectionContent';

const NewsSection: React.FC = async () => {
  const newsItems = await getNewsData('en');
  const title = 'Latest News';

  return <NewsSectionContent newsItems={newsItems} title={title} />;
};

export default NewsSection;