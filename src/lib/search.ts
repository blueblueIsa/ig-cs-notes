import { supabase } from './supabase';
import { escapeRegExp, truncateString } from './utils';

export interface SearchResult {
  id: string;
  title: string;
  path: string;
  snippet: string;
  relevance: number;
  type: 'theory' | 'programming';
}

interface SearchableContent {
  id: string;
  title: string;
  content: string;
  path: string;
  type: 'theory' | 'programming';
}

const CONTENT_MAP: SearchableContent[] = [
  {
    id: 'data-rep',
    title: 'Data Representation',
    path: '/theory/data-representation',
    type: 'theory',
    content: 'Number systems, binary, hexadecimal, media representation, images, sound'
  },
  {
    id: 'data-trans',
    title: 'Data Transmission',
    path: '/theory/data-transmission',
    type: 'theory',
    content: 'Packet switching, error checking, parity, checksum, encryption'
  },
  {
    id: 'hardware',
    title: 'Hardware Architecture',
    path: '/theory/hardware',
    type: 'theory',
    content: 'CPU components, registers, buses, memory, storage comparison'
  },
  {
    id: 'operations',
    title: 'Operations',
    path: '/programming/operations',
    type: 'programming',
    content: 'Arithmetic operators, comparison operators, logical operators'
  },
  {
    id: 'control',
    title: 'Control Structures',
    path: '/programming/control-structures',
    type: 'programming',
    content: 'Loops, iteration, for loops, while loops, conditional statements'
  },
  {
    id: 'methods',
    title: 'Basic Methods',
    path: '/programming/basic-methods',
    type: 'programming',
    content: 'Functions, procedures, parameters, return values'
  }
];

export async function searchContent(query: string): Promise<SearchResult[]> {
  // Input validation
  if (!query?.trim()) {
    return [];
  }

  try {
    const searchRegex = new RegExp(escapeRegExp(query), 'gi');
    
    return CONTENT_MAP
      .map(item => {
        // Count matches in title and content
        const titleMatches = (item.title.match(searchRegex) || []).length;
        const contentMatches = (item.content.match(searchRegex) || []).length;
        
        // Calculate relevance score
        const relevance = titleMatches * 2 + contentMatches;
        
        // Create snippet with context
        const matchIndex = item.content.toLowerCase().indexOf(query.toLowerCase());
        const snippet = matchIndex >= 0
          ? truncateString(item.content.slice(Math.max(0, matchIndex - 20), matchIndex + 60), 80)
          : truncateString(item.content, 80);

        return {
          id: item.id,
          title: item.title,
          path: item.path,
          snippet,
          relevance,
          type: item.type
        };
      })
      .filter(result => result.relevance > 0)
      .sort((a, b) => b.relevance - a.relevance);
  } catch (error) {
    console.error('Search error:', error);
    throw new Error('Failed to perform search');
  }
}