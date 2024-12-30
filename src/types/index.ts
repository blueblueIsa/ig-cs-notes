export interface User {
  id: string;
  email: string;
  name: string;
  created_at: string;
}

export interface Topic {
  id: string;
  title: string;
  description: string;
  order: number;
}

export interface Subtopic {
  id: string;
  topic_id: string;
  title: string;
  content: string;
  order: number;
}

export interface Exercise {
  id: string;
  subtopic_id: string;
  difficulty: 'easy' | 'medium' | 'hard';
  question: string;
  answer: string;
}

export interface UserProgress {
  user_id: string;
  subtopic_id: string;
  completed_at: string;
}