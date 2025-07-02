export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      profiles: {
        Row: {
          id: string
          email: string
          full_name: string | null
          avatar_url: string | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id: string
          email: string
          full_name?: string | null
          avatar_url?: string | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          email?: string
          full_name?: string | null
          avatar_url?: string | null
          created_at?: string
          updated_at?: string
        }
      }
      reviews: {
        Row: {
          id: string
          user_id: string
          content: string
          product_name: string | null
          rating: number | null
          sentiment: 'positive' | 'negative' | 'neutral' | null
          created_at: string
        }
        Insert: {
          id?: string
          user_id: string
          content: string
          product_name?: string | null
          rating?: number | null
          sentiment?: 'positive' | 'negative' | 'neutral' | null
          created_at?: string
        }
        Update: {
          id?: string
          user_id?: string
          content?: string
          product_name?: string | null
          rating?: number | null
          sentiment?: 'positive' | 'negative' | 'neutral' | null
          created_at?: string
        }
      }
      replies: {
        Row: {
          id: string
          review_id: string
          user_id: string
          content: string
          ai_model: 'openai' | 'claude' | 'gemini' | null
          is_edited: boolean
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          review_id: string
          user_id: string
          content: string
          ai_model?: 'openai' | 'claude' | 'gemini' | null
          is_edited?: boolean
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          review_id?: string
          user_id?: string
          content?: string
          ai_model?: 'openai' | 'claude' | 'gemini' | null
          is_edited?: boolean
          created_at?: string
          updated_at?: string
        }
      }
      templates: {
        Row: {
          id: string
          user_id: string
          name: string
          content: string
          category: string | null
          variables: Json
          usage_count: number
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          user_id: string
          name: string
          content: string
          category?: string | null
          variables?: Json
          usage_count?: number
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          user_id?: string
          name?: string
          content?: string
          category?: string | null
          variables?: Json
          usage_count?: number
          created_at?: string
          updated_at?: string
        }
      }
    }
  }
}