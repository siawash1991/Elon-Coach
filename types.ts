
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
