export interface User {
  id: string;
  email: string;
  full_name: string;
  created_at: string;
  last_active: string;
}

export interface Topic {
  id: string;
  title: string;
  description: string | null;
  order_index: number;
  track_type: 'theory' | 'programming';
}

export interface Subtopic {
  id: string;
  topic_id: string;
  title: string;
  content: Record<string, unknown>;
  order_index: number;
  estimated_duration: number | null;
}

export interface Exercise {
  id: string;
  subtopic_id: string;
  difficulty: number;
  question: string;
  answer: string;
  hints: string[];
  solution_explanation: string;
}

export interface UserProgress {
  user_id: string;
  subtopic_id: string;
  completed_at: string;
  confidence_level: number;
}