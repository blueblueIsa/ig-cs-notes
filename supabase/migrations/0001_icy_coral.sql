/*
  # Initial Schema Setup for Cambridge IGCSE CS Platform

  1. New Tables
    - users (extends auth.users)
    - topics
    - subtopics
    - exercises
    - user_progress

  2. Security
    - Enable RLS on all tables
    - Add policies for authenticated users
*/

-- Users table extending auth.users
CREATE TABLE users (
  id uuid PRIMARY KEY REFERENCES auth.users(id),
  name text,
  created_at timestamptz DEFAULT now()
);

-- Topics table
CREATE TABLE topics (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  description text,
  order_position integer NOT NULL,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Subtopics table
CREATE TABLE subtopics (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  topic_id uuid REFERENCES topics(id) ON DELETE CASCADE,
  title text NOT NULL,
  content text NOT NULL,
  order_position integer NOT NULL,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Exercises table
CREATE TABLE exercises (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  subtopic_id uuid REFERENCES subtopics(id) ON DELETE CASCADE,
  difficulty text CHECK (difficulty IN ('easy', 'medium', 'hard')),
  question text NOT NULL,
  answer text NOT NULL,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- User progress tracking
CREATE TABLE user_progress (
  user_id uuid REFERENCES users(id) ON DELETE CASCADE,
  subtopic_id uuid REFERENCES subtopics(id) ON DELETE CASCADE,
  completed_at timestamptz DEFAULT now(),
  PRIMARY KEY (user_id, subtopic_id)
);

-- Enable Row Level Security
ALTER TABLE users ENABLE ROW LEVEL SECURITY;
ALTER TABLE topics ENABLE ROW LEVEL SECURITY;
ALTER TABLE subtopics ENABLE ROW LEVEL SECURITY;
ALTER TABLE exercises ENABLE ROW LEVEL SECURITY;
ALTER TABLE user_progress ENABLE ROW LEVEL SECURITY;

-- RLS Policies
CREATE POLICY "Users can read their own data"
  ON users
  FOR SELECT
  TO authenticated
  USING (auth.uid() = id);

CREATE POLICY "Public read access for topics"
  ON topics
  FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Public read access for subtopics"
  ON subtopics
  FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Public read access for exercises"
  ON exercises
  FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Users can manage their own progress"
  ON user_progress
  FOR ALL
  TO authenticated
  USING (auth.uid() = user_id)
  WITH CHECK (auth.uid() = user_id);