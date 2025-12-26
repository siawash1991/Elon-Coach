import { Post } from './types';

export const posts: Post[] = [
  {
    id: '1',
    slug: 'elon-musk-thinking',
    title: {
      en: 'Think Like Elon Musk',
      fa: 'مثل ایلان ماسک فکر کن'
    },
    description: {
      en: 'First-principles thinking framework extracted from Elon Musk\'s decision-making process',
      fa: 'چارچوب تفکر اصول اولیه استخراج شده از فرآیند تصمیم‌گیری ایلان ماسک'
    },
    coverImage: '/Elon-Coach/images/elon-cover.jpg',
    coverGradient: 'from-red-600 via-orange-500 to-yellow-500',
    icon: '🚀',
    category: {
      en: 'Mindset',
      fa: 'ذهنیت'
    },
    createdAt: '2024-01-15'
  },
  {
    id: '2',
    slug: 'chatgpt-memory-to-gemini',
    title: {
      en: 'Extract ChatGPT Memory to Gemini',
      fa: 'استخراج حافظه ChatGPT به Gemini'
    },
    description: {
      en: 'Transfer your ChatGPT conversation memory and context to Google Gemini',
      fa: 'انتقال حافظه و زمینه مکالمات ChatGPT به Google Gemini'
    },
    coverImage: '/Elon-Coach/images/chatgpt-gemini-cover.jpg',
    coverGradient: 'from-emerald-600 via-teal-500 to-cyan-500',
    icon: '🧠',
    category: {
      en: 'AI Tools',
      fa: 'ابزار هوش مصنوعی'
    },
    createdAt: '2024-01-20'
  }
];

export const getPostBySlug = (slug: string): Post | undefined => {
  return posts.find(post => post.slug === slug);
};
