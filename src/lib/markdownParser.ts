import fs from 'fs/promises';
import path from 'path';

export interface NewsItem {
  id: string;
  title: string;
  date: string;
  image: string;
  description?: string;
  content?: string;
}

export async function getNewsData(locale: string): Promise<NewsItem[]> {
  const filePath = path.join(process.cwd(), `public/data/news/${locale}.md`);
  const content = await fs.readFile(filePath, 'utf-8');
  
  const items: NewsItem[] = [];
  const lines = content.split('\n');
  
  let i = 0;
  while (i < lines.length) {
    const line = lines[i].trim();
    
    if (line.startsWith('- id:')) {
      const id = line.substring(4).trim().replace(/^:\s*/, '');
      
      const titleLine = lines[i + 1]?.trim() || '';
      const dateLine = lines[i + 2]?.trim() || '';
      const imageLine = lines[i + 3]?.trim() || '';
      const descLine = lines[i + 4]?.trim() || '';
      const contentLine = lines[i + 5]?.trim() || '';
      
      if (titleLine?.startsWith('- title:')) {
        const title = titleLine.substring(8).trim().replace(/^"|"$/g, '');
        const date = dateLine?.startsWith('- date:') ? dateLine.substring(7).trim().replace(/^"|"$/g, '') : '';
        const image = imageLine?.startsWith('- image:') ? imageLine.substring(8).trim().replace(/^"|"$/g, '') : '';
        const description = descLine?.startsWith('- description:') 
          ? descLine.substring(14).trim().replace(/^"|"$/g, '') 
          : undefined;
          
        let content = '';
        if (contentLine?.startsWith('- content: |')) {
          let j = i + 6;
          while (j < lines.length && !lines[j].trim().startsWith('- id:') && !lines[j].trim().startsWith('---')) {
            content += lines[j].trim() + '\n';
            j++;
          }
          content = content.trim();
        }
        
        items.push({
          id,
          title,
          date,
          image,
          description,
          content,
        });
      }
    }
    i++;
  }
  
  return items;
}

export async function getNewsItemById(locale: string, newsId: string): Promise<NewsItem | null> {
  const news = await getNewsData(locale);
  return news.find(item => item.id === newsId) || null;
}