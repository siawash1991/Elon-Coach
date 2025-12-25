
export type Language = 'en' | 'fa';

export interface PromptSection {
  title: string;
  content: string;
  example: string;
}

export interface TableRow {
  principle: string;
  question: string;
  whatItDoes: string;
}

export interface ReferenceRow {
  id: string;
  tool: string;
  question: string;
  usage: string;
}

// Post types for the prompt repository
export interface Post {
  id: string;
  slug: string;
  title: {
    en: string;
    fa: string;
  };
  description: {
    en: string;
    fa: string;
  };
  coverImage?: string;
  coverGradient: string;
  icon: string;
  category: {
    en: string;
    fa: string;
  };
  createdAt: string;
}

export type Page = 'home' | 'prompt';

export interface RouterState {
  page: Page;
  promptSlug?: string;
}
