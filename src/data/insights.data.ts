export interface ArticleData {
  id: string;
  date: string;
  category: string;
  title: string;
  excerpt: string;
  readTime: string;
  image?: string;
  content?: string;
}

export const ARTICLES_DATA: ArticleData[] = [
  {
    id: 'soil-health',
    date: 'Mar 4, 2026',
    category: 'Research',
    title: 'Impact of Soil Health on Crop Yields',
    excerpt: 'New research shows organic matter improvements can increase yields by up to 35% over three seasons.',
    readTime: '5 min',
    image: 'https://images.unsplash.com/photo-1581089778249-891177b05a9d?q=80&w=2000&auto=format&fit=crop',
    content: `New research shows that improving organic matter in soils can boost crop yields by up to 35% over three seasons. This article explores techniques farmers can implement today to start seeing results.`,
  },
  // more articles...
];
