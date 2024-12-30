import { z } from 'zod';

export const loginSchema = z.object({
  email: z.string().email('Invalid email address'),
  password: z.string().min(8, 'Password must be at least 8 characters'),
});

export type LoginFormData = z.infer<typeof loginSchema>;

export interface AuthUser {
  id: string;
  email: string;
  full_name: string;
}

export interface AuthState {
  user: AuthUser | null;
  loading: boolean;
  error: Error | null;
}

export interface AuthContextType extends AuthState {
  signIn: (email: string, password: string) => Promise<void>;
  signUp: (email: string, password: string, fullName: string) => Promise<void>;
  signOut: () => Promise<void>;
  resetPassword: (email: string) => Promise<void>;
}

import { supabase } from '../lib/supabase';

export async function checkAuth() {
  const { data: { session } } = await supabase.auth.getSession();
  console.log("session: ", session)
  return !!session;
  // return true;
}

export async function handleAuth(email: string, password: string, mode: 'login' | 'register') {
  // Email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    throw new Error('Please enter a valid email address');
  }

  // Password validation
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$/;
  if (!passwordRegex.test(password)) {
    throw new Error('Password must be at least 8 characters and contain uppercase, lowercase, and numbers');
  }

  try {
    if (mode === 'register') {
      const { error } = await supabase.auth.signUp({
        email,
        password,
      });
      if (error) throw error;
    } else {
      const { error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });
      if (error) throw error;
    }
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(error.message === 'Invalid login credentials'
        ? 'Invalid email or password'
        : error.message);
    }
    throw new Error('An unknown error occurred');
  }
}

export async function handleLogout() {
  await supabase.auth.signOut();
  window.location.href = '/login';
}